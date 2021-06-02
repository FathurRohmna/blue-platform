import { gql } from '@apollo/client'
import Head from 'next/head'

import Link from 'next/link'

import client from '../apollo-client'

import { ProjectCard } from '@/components/ProjectCard'

import Author from '@/img/author-2.png'
import Articles1 from '@/img/articles1.jpg'

const author = ({projects}) => {
  return (
    <div className="w-full">
      <div className="relative w-full min-h-screen">
        <Head>
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Author - This is my, Potofolio site."
          />
          <meta
            key="og:title"
            property="og:title"
            content="Author - This is my, Potofolio site."
          />
        <title>Author - This is my, Potofolio site.</title>
        </Head>
        <section>
          <div className="relative pb-12 overflow-hidden">
            <section className="relative mb-20 block">
              <div className="relative z-1 py-32 px-0 mx-auto w-5/6 max-w-7xl">
                <div className="relative max-w-4.5xl mx-auto">
                  <div className="w-full">
                    <div className="text-left mb-10">
                      <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">Siapa pembuat website ini ?</p>
                    </div>
                    <h1 className="max-w-3xl relative mb-9 text-left font-bold text-gray-800 text-5xl">This is my, <br /> Potofolio site.</h1>
                    <h2 className="max-w-sm p-0 mb-14 text-left text-lg font-normal text-gray-700">
                      Tujuan utama dibangunnya website ini adalah sebagai sarana pembelajaran sekaligus Portofolio untuk saya. Dibangun menggunakan Next js dan Tailwind CSS untuk bagian Client, dan Strapi untuk Server.
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <div className="absolute top-24 left-1/2 my-0 w-xl">
              <div className="block w-full ml-auto">
                <div className="relative pb-80 w-full">
                  <img className="w-full h-full object-center object-cover" src={Author} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto box-border lg:pb-28 pt-8 xl:pb-16 px-6">

            <div className="mt-10 mb-28 mx-auto max-w-4.5xl px-0 flex items-center justify-center sm:mt-12 sm:px-0 md:mt-16 lg:mt-20 lg:px-0 xl:mt-38">
              <div className="w-full mx-auto flex flex-col justify-between lg:flex-row">
                <div className="text-left mb-10 w-full lg:w-1/2">
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">Fathur Rohman</h1>
                  <h2 className="text-base font-light text-gray-600 ml-1">Fullstack Developer</h2>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="">
                    <p className="text-base mb-8">Sudah lebih satu tahun saya mendalami secara intensif dunia pemrogramman dengan cara belajar autodidak. Banyak hal-hal yang saya dapatkan selama pembelajaran, seperti bagaimana sebuah website ataupun webapp dapat berjalan dan digunakan, mulai dari pembangunan Frontend untuk sisi Client bagian dan Backend untuk sisi Server.</p>
                    <div className="text-sm">
                      <Link href="instagram.com/ftr_rhmn16/"><a className="inline-block mr-2 underline cursor-pointer">Instagram</a></Link>
                      <Link href="https://github.com/FathurRohmna/"><a className="inline-block mr-2 underline cursor-pointer">Github</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-20 max-w-4.5xl mx-auto px-0 items-center justify-center">
              <div className="relative w-full">
                <div className="text-center w-full mx-auto max-w-2xl">
                  <h2 className="mx-auto mb-10 text-3xl text-center uppercase font-bold">My Work</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                  {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                  ))}

                </div>
              </div>
            </div>

            <div className="w-full relative max-w-4.5xl mx-auto flex items-center justify-center">
              <div className="relative w-full">
                <div className="text-center w-full mx-auto max-w-2xl">
                  <h2 className="mx-auto mb-10 text-3xl text-center uppercase font-bold">My Skills/Experience</h2>
                </div>

                <div className="relative flex flex-col lg:flex-row">
                  <div className="relative">
                    <ul className="max-w-3xl w-full lg:w-1/2">
                      <li className="mb-10">
                        <h1 className="font-bold mb-6">React js</h1>
                        <p className="text-base">
                          Membuat Single Page Aplication atau CSR menggunakan CRA, 
                          yang dibantu dengan react-router-dom untuk menghandle router. 
                          Untuk styling saya lebih menggunakan Material-UI untuk SPA/CSR. 
                          Untuk state management menggunakan Redux atau Hooks.
                        </p>
                      </li>
                      <li>
                        <h1 className="font-bold mb-6">Next js</h1>
                        <p className="text-base">
                          React js Framework, yang mempunyai banyak feature-feature 
                          unggulan untuk memudahkan dalam pengembangan aplikasi. Salah satu
                          fiture unggulan Next js adalah SSR/SSG yang dimana membuat
                          web app anda lebih cepat, Optiomal SEO. Salah satau fiture yang 
                          tidak kalah penting adalah anda dapat mebuat sebuah server API 
                          maupun Grahql. Untuk styling saya lebih menggunakan Tailwind CSS.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="relative mt-10">
                    <ul className="max-w-3xl w-full lg:w-1/2">
                      <li className="mb-10">
                        <h1 className="font-bold mb-6">Express js</h1>
                        <p className="text-base">
                          Mampu mmbangun sebuah server yang berisi feature-feature seperti
                          authentication, CRUD data, dll. Tahu bagaimana middleware pada express berjalan,
                          handling error, custom exception, membuat RestAPI ataupun Graphql server, 
                          yang dapat diintegrasikan menggunakan Typescript. Menggunakan mongoose dan Prisma
                          untuk conect ke DBMS Mongo DB ataupun PostgresSQL. Menggunakan Swagger-UI untuk 
                          dokumentasi.
                        </p>
                      </li>
                      <li className="mb-10">
                        <h1 className="font-bold mb-6">Nest js</h1>
                        <p className="text-base">
                          Bagi personality, Nest js adalah salah satu Node js framework terbaik menurut saya,
                          dengan struktur project yang lebih rapih, sehingga sangat memudahkan dalam pengembangan,
                          Nest berisi module module yang saling terkoneksi sehingga applikasi dapat berjalan.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
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
        projects {
          title
          thumbail_url
          source_code
          demo
          description
        }
      }
    `
  })

  return {
    props: {
      projects: data.projects
    }
  }
}

export default author
