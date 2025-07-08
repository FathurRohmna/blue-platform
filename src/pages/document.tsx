import Link from 'next/link';
import Head from 'next/head';

const document = () => {
  return (
    <div className="w-full">
      <div className="relative w-full min-h-screen">
        <Head>
          <meta
            key="twitter:title"
            name="twitter:title"
            content="Documentation - More knowledge, about techno."
          />
          <meta
            key="og:title"
            property="og:title"
            content="Documentation - More knowledge, about techno."
          />
          <title>Documentation - More knowledge, about techno.</title>
        </Head>
        <section>
          <div className="relative pb-12 overflow-hidden">
            <section className="relative mb-20 block">
              <div className="relative z-1 py-32 px-0 mx-auto w-5/6 max-w-7xl">
                <div className="relative max-w-4.5xl mx-auto">
                  <div className="w-full">
                    <div className="text-left mb-10">
                      <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                        Cari informasi lainnya disini
                      </p>
                    </div>
                    <h1 className="max-w-3xl relative mb-9 text-left font-bold text-gray-800 text-5xl">
                      More knowledge, <br /> about techno.
                    </h1>
                    <h2 className="max-w-sm p-0 mb-14 text-left text-lg font-normal text-gray-700">
                      <span className="lg:inline block">
                        Lebih tau mendalam tentang
                      </span>
                      <span className="lg:inline block">
                        {' '}
                        Framework dan Library yang
                      </span>
                      <span className="lg:inline block">
                        {' '}
                        saya gunakan dalam
                      </span>
                      <span className="lg:inline block">
                        {' '}
                        pengembangan aplikasi.
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </section>

            <div className="absolute top-12 left-1/2 my-0 w-xl">
              <div className="block w-full ml-auto">
                <div className="relative pb-80 w-full">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="/img/document.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full relative max-w-7xl mx-auto">
          <div className="relative mx-auto box-border pb-24 lg:pt-8">
            <div className="relative max-w-4.5xl mx-auto">
              <div className="w-full pb-6 mx-auto text-center max-w-2xl">
                <h2 className="text-3xl mb-10 font-bold text-gray-900">
                  Documentation :
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-6">
                <div className="relative w-full">
                  <div className="rounded border-gray-400 border-2 py-4 px-6">
                    <h1 className="font-bold text-xl mb-4">Create React App</h1>
                    <p className="text-gray-700 text-base mb-4">
                      React adalah sebuah framework User Interface yang
                      dikembangkan oleh Facebook
                    </p>
                    <Link
                      href="/docs/create-react-app"
                      className="text-base underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>

                <div className="relative w-full">
                  <div className="rounded border-gray-400 border-2 py-4 px-6">
                    <h1 className="font-bold text-xl mb-4">Typescript</h1>
                    <p className="text-gray-700 text-base mb-4">
                      React adalah sebuah framework User Interface yang
                      dikembangkan oleh Facebook
                    </p>
                    <Link
                      href="/docs/typescript"
                      className="text-base underline"
                    >
                      Read more
                    </Link>
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

export default document;
