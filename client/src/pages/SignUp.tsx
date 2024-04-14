import Auth from "../components/Auth";
import Quote from "../components/Quote";


export default function SignUp() {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="">
                <Auth type="signup" />
            </div>
            <div className=" hidden lg:block">
                <Quote />
            </div>
        </div>
    )
}
