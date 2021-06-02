import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import client from '../../apollo-client'

const article = ({ articleData }) => {

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {articleData && articleData.map((article, i) => (
        <div key={i} className="relative mx-auto lg:pt-4 px-0 lg:pb-28 pt-2 xl:pb-16">
          <Head>
            <meta
              key="twitter:title"
              name="twitter:title"
              content={article.title}
            />
            <meta
              key="og:title"
              property="og:title"
              content={article.title}
            />
            <title>{article.title}</title>
          </Head>
          <div className="relative max-w-5xl w-full mx-auto">
            <div className="w-full relative mx-auto px-2 mb-2">
              <div className="relative w-full pb-16 h-96 overflow-hidden rounded-3xl">
                <img className="absolute top-0 left-0 w-full h-full object-center object-cover" src={article.image_url} alt="" />
              </div>
            </div>
            <div className="w-full relative px-6">
              <div className="w-full flex justify-end">
                {article.categories.map((category, i) => (
                  <Link key={i} href={`/category/${category.slug}`}>
                    <span className="inline-block bg-gray-200 rounded-full cursor-pointer mb-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{category.name}</span>
                  </Link>
                ))}
              </div>
              <h1 className="max-w-3xl mx-auto font-bold py-16 text-center text-5xl text-gray-800">{article.title}</h1>
              <div className="w-full max-w-4.5xl mx-auto">
                <div className="pb-20">
                  <p className="font-light italic">{article.published_at}</p>
                  <p className="font-semibold text-normal">{article.users.username}</p>
                </div>
                <ReactMarkdown children={article.content} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getArticles {
        articles {
          slug
        }
      }
    `
  })

  return {
    paths: data.articles.map((article) => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const { data } = await client.query({
    query: gql`
      query getArticle($params: String!) {
        articlesConnection(where: {slug: $params}) {
          values {
            title
            content
            image_url
            categories {
              name
              slug
            }
            users {
              username
            }
            published_at
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
      articleData: data.articlesConnection.values
    }
  }
}

export default article