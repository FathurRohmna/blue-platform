export const CardUser = ({profile, name, comment, position, ...prop}) => {
  return (
    <div className="flex items-center justify-center py-12 px-4 w-full flex-shrink-0 ">
      <div className="flex flex-col items-center max-w-2xl visible">
        <blockquote className="text-center relative w-full">
          <div className="lg:my-16 my-8 relative w-full">
            <p className="text-sm lg:text-lg font-normal">{comment}</p>
          </div>
        </blockquote>

        <footer className="flex flex-col lg:flex-row content-center lg:my-10 my-6">
          <span className="lg:mr-6 mr-0">
            <div className="relative inline-block w-16 h-16 rounded-full overflow-hidden">
              <img src={profile} className="absolute top-0 left-0 w-full h-full object-cover object-center" />
            </div>
          </span>
          <div className="text-sm lg:items-start flex flex-col font-semibold max-w-xs">
            {name}
            <span className="mt-1 text-sm font-normal text-left">{position}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}