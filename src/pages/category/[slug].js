import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import Head from 'next/head'

import { ArticleCard } from '@/components/ArticleCard'

import client from '../../apollo-client'

const category = ({categoryData}) => {

  const articles = categoryData.flatMap(categories => categories.articles)
  const categoryTitle = categoryData.map(category => category.name)
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      
            {articles.map((article, i) => (
              <div key={i}>
                <ArticleCard article={article} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getCategories {
        categories {
          slug
        }
      }
    `
  })

  return {
    paths: data.categories.map((category) => ({
      params: {
        slug: category.slug,
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const {data} = await client.query({
    query: gql`
      query getArticle($params: String!) {
        categoriesConnection(where: {slug: $params}) {
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
      params: params.slug
    }
  })

  return {
    props: {
      categoryData: data.categoriesConnection.values,
    }
  }
}

export default category