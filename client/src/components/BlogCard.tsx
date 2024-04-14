import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishDate: string;
}

export default function BlogCard({
    id,
    authorName,
    title,
    content,
    publishDate
}: BlogCardProps) {
    return (
        <Link to={`/blog/${id}`}>
            <div className=" flex gap-2 flex-col mt-5 min-w-[80%] max-w-7xl">
                <div>
                    <Avatar size={"small"} name={authorName} /> {authorName} <span>&#183;</span> <span className=" text-zinc-500 font-normal">{publishDate}</span>
                </div>
                <div className=" font-bold text-2xl">
                    {title}
                </div>
                <div className=" text-md text-gray-600 font-semibold mb-3">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className=" text-gray-500 mb-4">
                    {(Math.ceil(content.length / 100)) + " minute(s) read"}
                </div>
                <div className=" bg-zinc-200 h-[1px]"></div>
            </div>
        </Link>
    )
}

