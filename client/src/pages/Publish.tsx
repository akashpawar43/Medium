import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Publish() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div className=" flex flex-col justify-center items-center w-full gap-8">
            <Appbar />
            {title} :
            {content}
            <div className=" w-full md:w-[50%]">
                <div className="mb-4">
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required />
                </div>
                <TextArea onChange={(e) => {
                    setContent(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    console.log(response.data);
                    navigate(`/blog/${response.data.id}`);
                    
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
                    Publish post
                </button>
            </div>
        </div>
    )
}


const TextArea = ({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) => {
    return <>
        <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-b-lg ">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 focus:outline-none " placeholder="Write an article..." required ></textarea>
                </div>
            </div>

        </form >
    </>
}