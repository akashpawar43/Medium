import { Link } from "react-router-dom";
import Avatar from "./Avatar";


export default function Appbar() {
    return (
        <div className=" flex justify-between border-b  w-full px-8 py-2">
            <Link to={"/blogs"} className=" w-full flex items-center font-semibold">   
                Medium
            </Link>
            <div className=" w-full flex justify-end">
                <Avatar size={"big"} name="Akash" />
            </div>
        </div>
    )
}
