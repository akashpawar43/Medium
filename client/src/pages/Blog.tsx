import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";
import SingleBlogSkeleton from "../components/SingleBlogSkeleton";


export default function Blog() {
    const { id } = useParams();
    const { blog, loading } = useBlog({
        id: String(id || "")
    });

    if (loading) {
        return <>
            <Appbar />
            <SingleBlogSkeleton />
        </>
    }
    return (
        <>
            <Appbar />
            {blog &&
                <FullBlog
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    authorName={blog.author ? blog.author.name || "Anonymous" : "Anonymous"}
                    published={blog.published ? "Published" : "Not Published"}
                />
            }
        </>
    )
}
