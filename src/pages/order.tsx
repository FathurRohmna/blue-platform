import Head from 'next/head'

const order = () => {
  return (
    <div className="relative w-full max-w-4.5xl h-screen mx-auto">
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Order - Pesan app di Blue."
        />
        <meta
          key="og:title"
          property="og:title"
          content="Order - Pesan app di Blue."
        />
        <title>Order - Pesan app di Blue.</title>
      </Head>
      <div className="relative w-full px-6 text-center h-full flex items-center">
        <h1 className="font-bold text-2xl lg:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600 w-full">fr081938@gmail.com</h1>
      </div>
    </div>
  )
}

export default order