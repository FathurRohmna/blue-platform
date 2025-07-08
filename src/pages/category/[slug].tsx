import { gql } from '@apollo/client';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { ArticleCard } from '@/components/ArticleCard';
import client from '../../apollo-client';
import { CategoryPageData } from 'src/types/category';

interface CategoryPageProps {
  categoryData: CategoryPageData[];
}

interface CategoryParams extends ParsedUrlQuery {
  slug: string;
}

interface CategorySlug {
  slug: string;
}

const CategoryPage = ({ categoryData }: CategoryPageProps) => {
  const articles = categoryData.flatMap((categories) => categories.articles);
  const categoryTitle = categoryData
    .map((category) => category.name)
    .join(', ');

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content={`${categoryTitle} - Blue.com`}
        />
        <meta
          key="og:title"
          property="og:title"
          content={`${categoryTitle} - Blue.com`}
        />
        <title>{`${categoryTitle} - Blue.com`}</title>
      </Head>
      <div className="relative mx-auto lg:pt-10 px-0 pb-28 pt-10 xl:pb-16">
        <div className="relative max-w-5xl w-4/5 mx-auto">
          <h1 className="text-3xl font-semibold mb-20">{categoryTitle}</h1>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {articles.map((article, i) => (
                <div key={article.slug || i}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await client.query<{ categories: CategorySlug[] }>({
      query: gql`
        query getCategories {
          categories {
            slug
          }
        }
      `,
    });

    if (!data || !data.categories) {
      console.error('No categories data received from GraphQL');
      return {
        paths: [],
        fallback: false,
      };
    }

    return {
      paths: data.categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  CategoryParams
> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await client.query({
      query: gql`
        query getArticlesByCategory($params: String!) {
          categoriesConnection(where: { slug: $params }) {
            values {
              articles {
                title
                slug
                image_url
                categories {
                  name
                  slug
                }
                description
              }
              name
            }
          }
        }
      `,
      variables: {
        params: params.slug,
      },
    });

    if (
      !data ||
      !data.categoriesConnection ||
      !data.categoriesConnection.values
    ) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        categoryData: data.categoriesConnection.values,
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
};

export default CategoryPage;
