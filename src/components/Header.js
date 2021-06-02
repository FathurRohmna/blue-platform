import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import MenuIco from '@/img/menu.svg'
import Logo from '@/img/logo.svg'

export const Header = () => {
  return (

    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 lg:pb-8 pb-0 bg-white">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <a className="ml-2">
                    <span className="sr-only">Portofolio</span>
                    <img className="h-6 w-auto" src={Logo} />
                  </a>
                </Link>
                <div className="mr-2 flex items-center md:hidden">
                  <Menu as="div" className="relative text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full p-2">
                        <img src={MenuIco} className="w-5 h-5" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-2">
                          <Menu.Item>
                            <button
                              className="px-3 py-2 inline-block w-full text-left"
                              onClick={() => Router.push('/product')}
                            >
                              Product
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              className="px-3 py-2 inline-block w-full text-left"
                              onClick={() => Router.push('/articles')}
                            >
                              Articles
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              className="px-3 py-2 inline-block w-full text-left"
                              onClick={() => Router.push('/author')}
                            >
                              Author
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              className="px-3 py-2 inline-block w-full text-left"
                              onClick={() => Router.push('/document')}
                            >
                              Documentation
                            </button>
                          </Menu.Item>

                          <Menu.Item>
                            <button
                              className="px-3 py-2 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                              onClick={() => Router.push('/order')}
                            >
                              Pesan Apk
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link href="/product">
                <a className="font-semibold text-lg text-gray-700 hover:text-gray-500">Product</a>
              </Link>

              <Link href="/articles">
                <a className="font-semibold text-lg text-gray-700 hover:text-gray-500">Articles</a>
              </Link>

              <Link href="/author">
                <a className="font-semibold text-lg text-gray-700 hover:text-gray-500">Author</a>
              </Link>
                    
              <Link href="/document">
                <a className="font-semibold text-lg  text-gray-700 hover:text-gray-500">Document</a>
              </Link>

              <Link href="/order">
                <a href="#" className="font-medium text-base rounded-md  text-white px-8 py-3 border-transparent hover:bg-blue-700 bg-blue-600 md:py-4 md:text-lg md:px-10">Pesan App</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}