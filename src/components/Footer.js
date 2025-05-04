import Link from 'next/link';

const explore = [
  { title: 'Product', href: '/product' },
  { title: 'Articles', href: '/articles' },
  { title: 'Author', href: '/author' },
  { title: 'Document', href: '/document' },
];

const follow = [
  { title: 'Instagram', href: 'instagram.com/ftr_rhmn16/' },
  { title: 'Github', href: 'https://github.com/FathurRohmna/' },
];

export function Footer() {
  return (
    <div className="bg-gray-900 pt-16 pb-20 px-8 box-border">
      <div className="max-w-7xl mx-auto text-xs">
        <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-5 sm:grid-cols-4 pb-8 sm:pb-10 md:pb-12 lg:pb-14 text-white">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Blue</h1>
            <p className="mb-2 leading-6">
              Bangun jaringan bisnis lebih modern dan efisien.
            </p>
            <p className="font-semibold text-white">Be Blue.</p>
          </div>
          <div className="">
            <h1 className="font-bold mb-2 text-white">Explore</h1>
            {explore.map((item, index) => (
              <Link href={item.href} key={index} className="block leading-6">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="">
            <h1 className="font-bold mb-2 text-white">Visit</h1>
            <p className="leading-6">
              Karangbawang, Kawunganten <br /> Cilacap, Jawa Tengah <br />{' '}
              Indonesia.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold mb-2 text-white">Follow</h1>
            {follow.map((item, index) => (
              <a href={item.href} key={index} className="block leading-6">
                {item.title}
              </a>
            ))}
          </div>
          <div>
            <h1 className="mb-2 font-bold text-white">New Business</h1>
            <p className="leading-6">fr089138@gmail.com</p>
            <p className="leading-6">+62 838-6788-6915</p>
          </div>
        </div>
      </div>
    </div>
  );
}
