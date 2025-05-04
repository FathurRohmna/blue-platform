import Head from 'next/head';

const product = () => {
  return (
    <div className="w-full">
      <div className="relative w-full min-h-screen">
        <Head>
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Product - We are build modern, faster Product access."
          />
          <meta
            key="og:title"
            property="og:title"
            content="Product - We are build modern, faster Product access."
          />
          <title>Product - We are build modern, faster Product access.</title>
        </Head>
        <section>
          <div className="relative pb-12 overflow-hidden">
            <section className="relative mb-16 block">
              <div className="relative z-1 py-32 px-0 mx-auto w-5/6 max-w-7xl">
                <div className="relative max-w-4.5xl mx-auto">
                  <div className="w-full">
                    <div className="text-left mb-10">
                      <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                        Product apa yang kami buat ?
                      </p>
                    </div>
                    <h1 className="max-w-3xl relative mb-9 text-left font-bold text-gray-800 text-5xl">
                      We are build modern, <br /> faster Product <br /> access.
                    </h1>
                    <h2 className="text-lg max-w-sm p-0 mb-14 text-left font-normal text-gray-700">
                      Apa yang dapat anda lakukan untuk mengembangkan bisnis
                      anda ? Kami punya solusi yang tepat untuk permasalahan
                      tersebut. Check it !
                    </h2>
                    <div className="mt-5 sm:mt-10 sm:flex justify-start">
                      <div className="rounded-md">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-normal rounded-md text-white bg-blue-600"
                        >
                          Bangun app sekarang
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-2">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 text-base font-normal rounded-md text-blue-600 bg-white"
                        >
                          Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="absolute top-32 left-1/2 my-0 w-xl">
              <div className="block w-full ml-auto">
                <div className="relative pb-80 w-full">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/img/product.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative mx-auto box-border pb-10 mb-8 lg:pt-10 px-0 lg:pb-28 pt-4 xl:pb-16">
            <div className="relative max-w-5xl w-4/5 mx-auto">
              <div className="w-full mx-auto text-center max-w-2xl">
                <h2 className="mx-auto mb-10 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600 uppercase text-sm">
                  Great App
                </h2>
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl relative mb-9 font-bold text-gray-800">
                  Kembangkan Bisnis Anda.
                </h1>
                <p className="max-w-3xl mx-auto text-center text-lg font-normal text-gray-700 break-words whitespace-pre-line">
                  Dizaman digital seperti saat ini kita dituntut untuk mengikuti
                  perkembangan zaman. Gadget, laptop, dan komputer sudah menjadi
                  kebutuhan pokok untuk semua orang. Dengan itu jadikanlah ini
                  sebagai peluang bisnis anda, dengan memanfaatkan pelayanan
                  Kami.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative max-w-7xl mx-auto">
          <div className="relative mx-auto box-border lg:pt-18">
            <div className="relative max-w-5xl w-4/5 mx-auto">
              <div className="w-full mx-auto text-left max-w-2xl">
                <div className="relative w-full pb-20 overflow-hidden">
                  <div className="flex flex-col lg:flex-row relative w-full">
                    <div className="relative pb-11 w-full lg:w-1/2">
                      <h1 className="text-lg font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                        Web App
                      </h1>
                      <p className="text-lg font-normal text-gray-700">
                        Laptop dan komputer adalah salah satu perangkat yang
                        paling banyak digunakan pada era saat ini. Dengan Web
                        Aplikasi seperti{' '}
                        <span className="font-bold">E-Commerce app</span>,{' '}
                        <span className="font-bold">Store App</span> dapat
                        mengembangkan bisnis Anda.
                      </p>
                    </div>
                    <div className="relative w-full mx-auto lg:w-1/2">
                      <div className="relative h-32">
                        <img
                          className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          src="/img/service/ecommerce.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full pb-20 overflow-hidden">
                  <div className="flex flex-col lg:flex-row relative w-full">
                    <div className="relative pb-11 w-full lg:w-1/2">
                      <h1 className="text-lg font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                        Mobile App
                      </h1>
                      <p className="text-lg font-normal text-gray-700">
                        Hampir 80% orang didunia sudah mempunya handphone
                        sebagai alat komunikasinya. Dengan memanfaatkan
                        teknologi seperti{' '}
                        <span className="font-bold">React Native</span>, kami
                        dapat membuat aplikasi yang dapat diakses oleh seluruh
                        orang.
                      </p>
                    </div>
                    <div className="relative w-full mx-auto lg:w-1/2">
                      <div className="relative h-32">
                        <img
                          className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          src="/img/service/mobileapp.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full pb-20 overflow-hidden">
                  <div className="flex flex-col lg:flex-row relative w-full">
                    <div className="relative pb-11 w-full lg:w-1/2">
                      <h1 className="text-lg font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                        Blog App/Website Official
                      </h1>
                      <p className="text-lg font-normal text-gray-700">
                        Sebagai salah satu sarana berbagi informasi, Blog dapat
                        juga digunakan sebagai sarana Comercial seperti
                        periklanan.
                      </p>
                    </div>
                    <div className="relative w-full mx-auto lg:w-1/2">
                      <div className="relative h-32">
                        <img
                          className="absolute top-0 left-0 w-full h-full object-center object-fill"
                          src="/img/service/blogapp.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
