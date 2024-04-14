import { Link } from "react-router-dom";
import Avatar from "./Avatar";


export default function Appbar() {
    return (
        <div className=" flex justify-between border-b  w-full px-8 py-2">
            <Link to={"/blogs"} className=" w-full flex items-center font-semibold">
                Medium
            </Link>
            <div className=" w-full flex justify-end gap-2">
                <Link to={"/publish"}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                        New
                    </button>
                </Link>
                <Avatar size={"big"} name="Akash" />
            </div>
        </div>
    )
}
