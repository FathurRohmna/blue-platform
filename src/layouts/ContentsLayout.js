import Link from 'next/link'

export function ContentsLayout({ children }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="relative mx-auto lg:pt-10 px-0 lg:pb-28 pb-16 pt-10 xl:pb-16">
        <div className="relative max-w-5xl w-4/5 mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}