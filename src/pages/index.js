import Head from 'next/head';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

import { CardUser } from '@/components/CardUser';

export default function Home() {
  const commentData = [
    {
      name: 'Fathur Rohman',
      comment:
        'Pelayanan yang sangat bagus. Produk yang dihasilkan pun tidak kalah bagus. Sehingga para pelangan saya puas dengan pelanan Blue.',
      profile: '/img/profiles/alex.png',
      position: 'FullStack Developer',
    },
    {
      name: 'Angel Veronik',
      comment:
        'Saya harap platform ini selalu memberikan pelayanan yang terbaik.',
      profile: '/img/profiles/angel.png',
      position: 'CEO Bukagendong.com',
    },
    {
      name: 'Bread Andini',
      comment:
        'Greattttt !! Website saya sekarang berjalan dengan sangat baik sehingga website saya sekarang meiliki banyak pengunjung.',
      profile: '/img/profiles/bread.png',
      position: 'Directur Olympic',
    },
    {
      name: 'Rebeca Tyas',
      comment: 'Platform yang sangat recommended  untuk membangun bisnis anda.',
      profile: '/img/profiles/rebeca.png',
      position: 'Pengusaha udang',
    },
    {
      name: 'Smully',
      comment:
        'Usaha yang baru saya dirikan selama kurang dari 1 tahun ini sekarang berkembang pesat setelah saya membuat website di Blue.',
      profile: '/img/profiles/smuly.png',
      position: 'Wirausaha',
    },
  ];
  return (
    <div className="w-full">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Blue - Bangun jaringan bisnis lebih modern dan efisien."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Blue - Bangun jaringan bisnis lebih modern dan efisien."
        />
        <title>Blue - Bangun jaringan bisnis lebih modern dan efisien.</title>
      </Head>
      <div className="relative w-full min-h-screen">
        <header>
          <div className="relative lg:pb-10 pb-4">
            <div className="relative lg:mb-8 mb-0 block">
              <div className="relative z-1 py-20 sm:py-6 md:py-10 px-0 w-5/6 mx-auto max-w-7xl">
                <div className="relative max-w-4.5xl mx-auto">
                  <div className="w-full sm:text-center lg:text-left">
                    <p className="text-sm mb-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                      Dapatkan informasi update teknologi terbaru.
                    </p>
                    <h1 className="font-bold text-5xl max-w-5xl relative mb-9 text-gray-800">
                      Bisnis modern <br /> dan efisien dengan teknologi.
                    </h1>
                    <div className="w-full flex sm:justify-center lg:justify-start items-center justify-start">
                      <h2 className="max-w-lg p-0 mb-14 font-normal text-gray-700 text-lg">
                        Blue adalah platform pelayanan pembuatan website,
                        webapp, maupun mobileapp. Menggunakan Javascript sebagai
                        Bahasa utamanya.
                      </h2>
                    </div>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link
                          href="/order"
                          className="w-ful flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                          Pesan sekarang
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                          href="/product"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-70 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                          Produk
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-24 relative w-full overflow-hidden">
                    <img src="/img/mobile.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto box-border lg:pt-24 pt-10 lg:pb-28 xl:pb-16 overflow-hidden lg:overflow-visible">
            <div className="relative max-w-5xl w-4/5 mx-auto">
              <div className="w-full m-auto text-center max-w-2xl">
                <h2 className="mx-auto mb-10 text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                  Keunggulan product
                </h2>
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl relative mb-9 font-bold text-gray-800">
                  Kecepatan adalah prioritas.
                </h1>
                <p className="max-w-3xl mx-auto text-center text-xl break-words whitespace-pre-line text-gray-700">
                  Penelitian menunjukan bahwa user hanya bisa menunggu loading
                  aplikasi maksimal 30 detik saja.
                </p>
              </div>

              <ul className="flex flex-col justify-start flex-wrap mt-24 lg:flex-row lg:-mx-16 py-9">
                <div className="box-border xl:w-1/2 py-14 px-6 lg:px-16 lg:py-10 xl:mb-18">
                  <div className="flex items-center">
                    <div className="flex mr-6 xl:mr-9 self-start items-center flex-shrink-0 w-9 h-9 mb-5">
                      <div className="h-full w-full">
                        <div className="w-full h-auto">
                          <div className="relative w-full pb-4">
                            <figure className="absolute top-0 left-0 w-full h-full">
                              <img
                                className="h-12 w-12"
                                src="/img/icon/seo.svg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block align-start relative">
                      <h1 className="mb-4 text-xl font-semibold">
                        Optimasi SEO
                      </h1>
                    </div>
                  </div>

                  <div className="xl:ml-18 xl:mr-0 mr-0">
                    <p className="text-gray-700 font-normal text-lg break-words whitespace-pre-line">
                      Seo yang optimasi dengan baik akam memudahkan mesin
                      pencari untuk memahami konteks konten dan relevansi
                      website Anda dengan kata kunci yang dicari.
                    </p>
                  </div>
                </div>

                <div className="box-border xl:w-1/2 py-14 px-6 lg:px-16 lg:py-10 xl:mb-18">
                  <div className="flex items-center">
                    <div className="flex mr-6 xl:mr-9 self-start items-center flex-shrink-0 w-9 h-9 mb-5">
                      <div className="h-full w-full">
                        <div className="w-full h-auto">
                          <div className="relative w-full pb-4">
                            <figure className="absolute top-0 left-0 w-full h-full">
                              <img
                                className="h-12 w-12"
                                src="/img/icon/speed.svg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block align-start relative">
                      <h1 className="mb-4 text-xl font-semibold">
                        Fast Loading
                      </h1>
                    </div>
                  </div>

                  <div className="xl:ml-18 xl:mr-0 mr-0">
                    <p className="text-gray-700 font-normal text-lg break-words whitespace-pre-line">
                      User Experience/pengalaman pelanggan adalah hal utama yang
                      produk kami sajikan untuk memuaskan para pelanggan Anda.
                    </p>
                  </div>
                </div>

                <div className="box-border xl:w-1/2 py-14 px-6 lg:px-16 lg:py-10 xl:mb-18">
                  <div className="flex items-center">
                    <div className="flex mr-6 xl:mr-9 self-start items-center flex-shrink-0 w-9 h-9 mb-5">
                      <div className="h-full w-full">
                        <div className="w-full h-auto">
                          <div className="relative w-full pb-4">
                            <figure className="absolute top-0 left-0 w-full h-full">
                              <img
                                className="h-12 w-12"
                                src="/img/icon/easy-develop.svg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block align-start relative">
                      <h1 className="mb-4 text-xl font-semibold">
                        Easy for Develop
                      </h1>
                    </div>
                  </div>

                  <div className="xl:ml-18 xl:mr-0 mr-0">
                    <p className="text-gray-700 font-normal text-lg break-words whitespace-pre-line">
                      Dengan struktur pembangunan yang baik menjadikan aplikasi
                      Anda lebih optimal dan mempermudah untuk pengembangan
                      kedepannya.
                    </p>
                  </div>
                </div>

                <div className="box-border xl:w-1/2 py-14 px-6 lg:px-16 lg:py-10 xl:mb-18">
                  <div className="flex items-center">
                    <div className="flex mr-6 xl:mr-9 self-start items-center flex-shrink-0 w-9 h-9 mb-5">
                      <div className="h-full w-full">
                        <div className="w-full h-auto">
                          <div className="relative w-full pb-4">
                            <figure className="absolute top-0 left-0 w-full h-full">
                              <img
                                className="h-12 w-12"
                                src="/img/icon/stability.svg"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block align-start relative">
                      <h1 className="mb-4 text-xl font-semibold">Stability</h1>
                    </div>
                  </div>

                  <div className="xl:ml-18 xl:mr-0 mr-0">
                    <p className="text-gray-700 font-normal text-lg break-words whitespace-pre-line">
                      Dengan teknologi-teknologi terbaru dan modern membuat
                      produk Kami lebih mudah untuk diakses di mana saja dan
                      kapan saja.
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto box-border lg:pt-32 px-0 lg:pb-28 pt-18 xl:pb-16">
            <div className="relative max-w-5xl w-4/5 mx-auto pb-16">
              <div className="w-full m-auto text-center max-w-2xl">
                <h2 className="uppercase mx-auto mb-10 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                  Intergation
                </h2>
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl relative mb-9 font-bold text-gray-800">
                  Terintregasi dengan teknologi terbaik.
                </h1>
                <p className="max-w-3xl mx-auto text-center text-xl break-words whitespace-pre-line text-gray-700">
                  Kami menggunakan teknologi-teknologi terbaru dan terbaik, yang
                  sudah terbukti oleh banyak company.
                </p>
              </div>
            </div>

            <div className="relative max-w-4.5xl mx-auto lg:my-32 my-8 overflow-hidden min-h-sm">
              <div className="absolute top-9 my-0 w-xl md:w-full">
                <div className="block w-full ml-auto">
                  <div className="relative w-full">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="/img/Laptop.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative max-w-5xl w-4/5 mx-auto pb-16">
              <div className="w-full m-auto text-center max-w-2xl">
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl relative mb-9 font-bold text-gray-800">
                  Frontend Teknology
                </h1>
                <p className="max-w-3xl mx-auto text-center text-xl break-words whitespace-pre-line text-gray-700">
                  Teknologi yang kami gunakan memastikan agar situs atau
                  aplikasi anda dapat berjan dengan baik, dan mampu memberikan
                  kesan User Experience, sehingga user dapat beriteraksi secara
                  nyaman.
                </p>
              </div>
            </div>

            <div className="relative w-full mx-auto lg:mb-24 mt-0 max-w-7xl lg:-mt-5">
              <div className="relative">
                <div className="relative z-0 w-full pb-20 overflow-hidden lg:pb-0">
                  <div className="flex flex-col relative mx-auto w-10/12 max-w-7xl z-1 lg:flex-row lg:items-center lg:min-h-screen">
                    <div className="relative w-full z-1 box-border pb-11 lg:w-2/5 lg:py-52 lg:px-12 px-6">
                      <h1 className="text-xl font-semibold mt-12">
                        Framework/Library
                      </h1>
                      <p className="mt-4 text-lg font-normal text-gray-700">
                        <span className="font-bold">React js</span> dan{' '}
                        <span className="font-bold">Next js</span> sebagai tools
                        utamanya. Untuk styling menggunakan{' '}
                        <span className="font-bold">Tailwindcss</span>,{' '}
                        <span className="font-bold">Material-ui</span>. Dan{' '}
                        <span className="font-bold">Redux</span> untuk state
                        management.
                      </p>
                    </div>
                    <div className="relative z-10 lg:w-3/5 w-full mt-10 mx-auto">
                      <div className="w-full">
                        <div className="relative w-full pb-12 h-64">
                          <img
                            src="/img/card/card-front-frame.svg"
                            className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mx-auto lg:mb-24 mt-0 max-w-7xl lg:-mt-5">
              <div className="relative">
                <div className="relative z-0 w-full pb-20 overflow-hidden lg:pb-0">
                  <div className="flex flex-col-reverse lg:flex-row relative mx-auto w-10/12 max-w-7xl z-1 lg:items-center lg:min-h-screen">
                    <div className="relative z-10 lg:w-3/5 w-full mt-10 mx-auto">
                      <div className="w-full">
                        <div className="relative w-full pb-12 h-64">
                          <img
                            src="/img/card/card-front-ssr.png"
                            className="absolute top-0 left-0 w-full h-full object-center object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full z-1 box-border pb-11 lg:w-2/5 lg:py-52 lg:px-12 px-6">
                      <h1 className="text-xl font-semibold mt-12">
                        SSR/CSR/SSG
                      </h1>
                      <p className="mt-4 text-lg font-normal text-gray-700">
                        Menggunakan{' '}
                        <span className="font-bold">teknologi yang tepat</span>{' '}
                        agar produk yang di hasilkan maksimal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative w-full mx-aut
              o mb-24 mt-0 max-w-7xl lg:-mt-5"
            >
              <div className="relative">
                <div className="relative z-0 w-full pb-20 overflow-hidden lg:pb-0">
                  <div className="flex flex-col relative mx-auto w-10/12 max-w-7xl z-1 lg:flex-row lg:items-center lg:min-h-screen">
                    <div className="relative w-full z-1 box-border pb-11 lg:w-2/5 lg:py-52 lg:px-12 px-6">
                      <h1 className="text-xl font-semibold mt-12">
                        Mengkonsumsi data dari Graphql atau RestAPI server
                      </h1>
                      <p className="mt-4 text-lg font-normal text-gray-700">
                        <span className="font-bold">Apollo/client</span> adalah
                        tools yang digunakan kami untuk mengkonsumsi Graphql dan{' '}
                        <span className="font-bold">Axios</span> untuk RestAPI.
                      </p>
                    </div>
                    <div className="relative z-10 lg:w-3/5 w-full mt-10 mx-auto">
                      <div className="w-full">
                        <div className="relative w-full pb-12 h-64">
                          <img
                            src="/img/card/card-dront-api.svg"
                            className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative max-w-5xl w-4/5 mx-auto pb-16">
              <div className="w-full m-auto text-center max-w-2xl">
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl relative mb-9 font-bold text-gray-800">
                  Backend Teknology
                </h1>
                <p className="max-w-3xl mx-auto text-center text-xl break-words whitespace-pre-line text-gray-700">
                  Tidak kalah penting dari sisi Client side, Server side juga
                  sangan berperan penting dalam suatu website maupun aplikasi.
                </p>
              </div>
            </div>

            <div className="relative w-full mx-auto lg:mb-24 mt-0 max-w-7xl lg:-mt-5">
              <div className="relative">
                <div className="relative z-0 w-full pb-20 overflow-hidden lg:pb-0">
                  <div className="flex flex-col relative mx-auto w-10/12 max-w-7xl z-1 lg:flex-row lg:items-center lg:min-h-screen">
                    <div className="relative w-full z-1 box-border pb-11 lg:w-2/5 lg:py-52 lg:px-12 px-6">
                      <h1 className="text-lg font-semibold mt-12">
                        Framework/Library
                      </h1>
                      <p className="mt-4 text-lg font-normal text-gray-700">
                        <span className="font-bold">Node js</span> adalah salah
                        satu alat terbaik untuk saat ini dalam pengembangan
                        sebuah aplikasi khusunya dalam sisi server. Kami
                        menggunakan <span className="font-bold">Nest js</span>{' '}
                        dan <span className="font-bold">Express js</span> untuk
                        framework utamanya.
                      </p>
                    </div>
                    <div className="relative z-10 lg:w-3/5 w-full mt-10 mx-auto">
                      <div className="w-full">
                        <div className="relative w-full pb-12 h-64">
                          <img
                            src="/img/card/card-back-frame.svg"
                            className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mx-auto lg:mb-24 mt-0 max-w-7xl lg:-mt-5">
              <div className="relative">
                <div className="relative z-0 w-full pb-20 overflow-hidden lg:pb-0">
                  <div className="flex flex-col-reverse lg:flex-row relative mx-auto w-10/12 max-w-7xl z-1 lg:items-center lg:min-h-screen">
                    <div className="relative z-10 lg:w-3/5 w-full mt-10 mx-auto">
                      <div className="w-full">
                        <div className="relative w-full pb-12 h-64">
                          <img
                            src="/img/card/card-back-databa.svg'"
                            className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full z-1 box-border pb-11 lg:w-2/5 lg:py-52 lg:px-12 px-6">
                      <h1 className="text-lg font-semibold mt-12">
                        Database Management System dan ORM
                      </h1>
                      <p className="mt-4 text-lg font-normal text-gray-700">
                        Menggunakan{' '}
                        <span className="font-bold">PostgreSQL</span> dan{' '}
                        <span className="font-bold">MongoDB</span> untuk DBMS.{' '}
                        <span className="font-bold">Prisma</span> dan{' '}
                        <span className="font-bold">Mongoose</span> untuk ORM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto box-border lg:pt-24 pt-10 lg:pb-28 xl:pb-16 overflow-hidden lg:overflow-visible">
            <div className="relative max-w-5xl w-4/5 mx-auto">
              <div className="w-full m-auto text-center max-w-2xl">
                <h2 className="mx-auto mb-4 text-center uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                  People say about us.
                </h2>
              </div>

              <Carousel
                showArrows={false}
                emulateTouch
                showThumbs={false}
                showStatus={false}
                className="my-24"
              >
                {commentData.map((data, i) => (
                  <CardUser
                    key={i}
                    profile={data.profile}
                    name={data.name}
                    comment={data.comment}
                    position={data.position}
                  />
                ))}
              </Carousel>

              <div className="flex justify-center w-full">
                <div className="lg:mt-24 mt-12 mb-12 mx-6 w-full max-w-xs shadow-lg">
                  <Link
                    href="/order"
                    className="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Build with us now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
