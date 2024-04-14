
export default function SingleBlogSkeleton() {
    return (
        <div className=" flex justify-center">
            <div className=" flex flex-col-reverse xl:grid xl:grid-cols-12 max-w-screen-xl py-8 lg:py-14 w-[85%] gap-14">
                <div className=" col-span-8 flex flex-col gap-4">
                    <div className=" text-5xl font-bold">
                        <div className="h-6 bg-gray-200 rounded-full w-60 mb-4"></div>
                    </div>
                    <div className=" text-slate-500">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className=" flex flex-col gap-10">
                        <div className=" font-medium text-slate-700">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                        </div>
                        <div className=" font-medium text-slate-700">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                        </div>
                        <div className=" font-medium text-slate-700">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-4">
                    <div className=" font-medium pb-4">
                        Auther
                    </div>
                    <div className=" flex flex-row gap-2">
                        <div>
                            <svg className="w-8 h-8 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </div>
                        <div className="">
                            <div className=" text-xl font-bold">
                                <div className="h-2.5 bg-gray-300 rounded-full  w-28"></div>
                            </div>
                            <div className=" text-slate-500 font-semibold flex flex-col gap-1 mt-2 col-span-6">
                                <div className="h-2.5 bg-gray-300 rounded-full w-48 sm:w-64"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full w-36 sm:w-48"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
