import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";


export default function Blogs() {
    const { blogs, loading } = useBlogs();

    if (loading) {
        return <div className=" flex flex-col justify-center items-center">
            <Appbar />
            <div className=" grid grid-cols-1 w-[85%] md:w-[60%] lg:w-[50%] ">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }
    return (
        <div className=" flex flex-col justify-center items-center">
            <Appbar />
            <div className=" grid grid-cols-1 w-[85%] md:w-[60%] lg:w-[50%] ">
                {blogs.map(blog =>
                    <BlogCard key={blog.id}
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishDate={"Dec 12,2024"}
                    />
                )}
            </div>
        </div>
    )
}
