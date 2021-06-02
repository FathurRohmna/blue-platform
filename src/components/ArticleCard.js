import Link from 'next/link'

export const ArticleCard = ({ article, ...props }) => {

  return (
    <div className="relative w-full">
      <div className="rounded relative shadow-lg">
        <div className="relative overflow-hidden w-full h-52">
          <img src={article.image_url} className="absolute top-0 left-0 w-full h-full object-cover object-center" />
        </div>
        <div className="px-6 py-4">
          <Link href={`/article/${article.slug}`}>
            <div className="mb-2 cursor-pointer">
              <h1 className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis whitespace whitespace-nowrap">{article.title}</h1>
              <span className="block h-16 w-full overflow-hidden overflow-ellipsis whitespace-pre-line">{article.description}</span>
            </div>
          </Link>
          <div className="pt-4 pb-2">
            {article.categories.map((category, i) => (
              <Link key={i} href={`/category/${category.slug}`}>
                <span className="inline-block bg-gray-200 rounded-full cursor-pointer mb-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}