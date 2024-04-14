import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";


export default function Blog() {
    const { id } = useParams();
    const { blog, loading } = useBlog({
        id: String(id || "")
    });

    if (loading) {
        return <div>
            Loading...
        </div>
    }
    return (
        <>
            <Appbar />
            <FullBlog key={blog.id} id={blog.id}
                title={blog.title}
                content={blog.content}
                author={blog.author.name || "Anonymous"}
            // published={}
            />
        </>
    )
}
