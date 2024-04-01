


function TimelineItem({year, title, duration, details}) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-500">
        <li className="mb-10 ml-2">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white dark:border-stone-900 dark:bg-stone-500"/>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="text-white bg-stone-900 rounded-md font-bold dark:bg-white dark:text-stone-800">{year}
                </span>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {title}
                </h3>
                <div className="my-1 text-sm font-normal leading-none text-stone-400 ">
                    {duration}
                </div>
            </p>
                <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                    {details}
                </p>
        </li>
    </ol>
  )
}
export default TimelineItem