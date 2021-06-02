import { gql } from '@apollo/client'
import Head from 'next/head'

import client from '../apollo-client'

import { ArticleCard } from '@/components/ArticleCard'

import Articles from '@/img/articles.png'
import Articles1 from '@/img/articles1.jpg'

const articles = ({ articles }) => {
  return (
    <div className="w-full">
      <div className="relative w-full min-h-screen">
        <Head>
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Articles - Get more, about technology in my page."
          />
          <meta
            key="og:title"
            property="og:title"
            content="Articles - Get more, about technology in my page."
          />
          <title>Articles - Get more, about technology in my page.</title>
        </Head>
        <section>
          <div className="relative pb-12 overflow-hidden">
            <section className="relative mb-20 block">
              <div className="relative z-1 py-32 px-0 mx-auto w-5/6 max-w-7xl">
                <div className="relative max-w-4.5xl mx-auto">
                  <div className="w-full">
                    <div className="text-left mb-10">
                      <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">Dapatkan informasi update teknologi terbaru.</p>
                    </div>
                    <h1 className="max-w-2xl relative mb-9 text-left font-bold text-gray-800 text-5xl">
                      <span className="lg:inline block">Get more, </span>
                      <span className="lg:inline block"> about technology</span>
                      <span className="lg:inline block"> in my</span>
                      <span className="lg:inline block"> page.</span>
                    </h1>
                    <h2 className="lg:max-w-sm max-w-xs p-0 mb-14 text-left font-normal text-lg text-gray-700">
                      <span className="lg:inline block">Teknologi sangat berkembang</span>
                      <span className="lg:inline block"> cepat saat ini, dapatkan</span>
                      <span className="lg:inline block"> perkembangan teknologi terbaru.</span>
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <div className="absolute top-10 left-1/2 my-0 w-xl">
              <div className="block w-full ml-auto">
                <div className="relative pb-80 w-full">
                  <img className="w-full h-full object-center object-cover" src={Articles} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto lg:pt-10 px-0 pb-28 pt-10 xl:pb-16">
            <div className="relative max-w-5xl w-4/5 mx-auto">
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
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getArticles {
        articles {
          image_url
          title
          description
          slug
          categories {
            name
            slug
          }
        }
      }
    `
  })

  return {
    props: {
      articles: data.articles
    }
  }
}


export default articles
