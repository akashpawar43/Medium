import Avatar from "./Avatar"

interface SingleBlog {
    id: string;
    title: string;
    content: string;
    published: string;
    authorName: string
}

export default function FullBlog({
    id,
    title,
    content,
    published,
    authorName
}: SingleBlog) {
    return (
        <div className=" flex justify-center">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 max-w-screen-xl py-8 lg:py-14 w-[85%] gap-6 md:gap-10">
                <div className=" col-span-8 flex flex-col gap-4">
                    <div className=" text-5xl font-bold">
                        {title}
                    </div>
                    <div className=" text-slate-500">
                        Post on 2nd December 2023
                    </div>
                    <div className=" font-medium text-slate-700">
                        {content}
                    </div>
                </div>
                <div className=" col-span-4">
                    <div className=" font-medium pb-4">
                        Auther
                    </div>
                    <div className=" flex flex-row gap-4">
                        <div>
                            <Avatar name="Akash" size="big" />
                        </div>
                        {/* <div className=" bg-zinc-200 h-8 w-10 rounded-full"></div> */}
                        <div className="">
                            <div className=" text-xl font-bold">
                                {authorName}
                            </div>
                            <div className=" text-slate-500 font-semibold">
                                Master of mirth, purveyor of puns, and the funniest person in the kingdom.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
