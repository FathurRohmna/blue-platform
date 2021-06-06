import Link from 'next/link'


export const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-full">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative overflow-hidden w-full h-52">
          <img src={project.thumbail_url} className="absolute top-0 left-0 w-full h-full object-cover object-center" />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2">
            <div className="mb-2 cursor-pointer">
              <h1 className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis whitespace whitespace-nowrap">{project.title}</h1>
              <span className="block w-full overflow-hidden overflow-ellipsis whitespace-pre-line">{project.description}</span>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <Link href={project.source_code}>
              <a className="px-3 py-2 text-blue-600">Source Code</a>
            </Link>
            <Link href={project.demo}>
              <a className="bg-blue-600 px-3 py-2 text-white font-normal rounded-md">Demo</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}