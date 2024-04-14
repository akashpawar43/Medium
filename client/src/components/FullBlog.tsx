import Avatar from "./Avatar"

interface SingleBlog {
    id: string;
    title: string;
    content: string;
    published: string;
    author: string
}

export default function FullBlog({
    id,
    title,
    content,
    published,
    author
}: SingleBlog) {
    return (
        <div className=" flex justify-center">
            <div className=" grid grid-cols-12 max-w-screen-xl py-16">
                <div className=" col-span-8 flex flex-col gap-4">
                    <div className=" text-5xl font-bold">
                        {title}
                    </div>
                    <div className=" text-slate-500">
                        Post on 2nd December 2023
                    </div>
                    <div className=" font-medium text-slate-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam nulla quibusdam, eum reiciendis hic odit autem recusandae nisi omnis tempora, possimus cupiditate facere incidunt est ad quam molestias vitae accusamus molestiae eligendi voluptas magni id sint! Libero dicta alias odio consectetur in!
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
                                {author}
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
