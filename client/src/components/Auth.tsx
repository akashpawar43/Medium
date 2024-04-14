import { Link, useNavigate } from "react-router-dom";
import LabelInput from "./LabelInput";
import { useState } from "react";
import { SignupInput } from "@akkipawar/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const sendRequest = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}`, postInput)
            const jwt = response.data.jwt;
            localStorage.setItem("token", "Bearer " + jwt);
            navigate("/blogs");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col w-[80%] md:w-[55%] gap-4">
                {/* {JSON.stringify(postInput)} */}
                <div className=" text-center">
                    <div className=" text-3xl font-bold">{type === "signup" ? "Create an account" : "Welcome Back"}</div>
                    <div className=" text-zinc-500 font-medium">
                        {type === 'signup' ? "Already have an account?" : "Don't have an account?"}
                        <Link to={type === "signup" ? "/signin" : "/signup"} className=" underline ml-1">{type === "signup" ? "Sign In" : "Sign Up"}</Link>
                    </div>
                </div>
                {type === "signup" ? <LabelInput label="Name" placeholder="Enter your username" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        name: e.target.value
                    })
                }} /> : null}
                <LabelInput label="Email" placeholder="Enter your Email" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        email: e.target.value
                    })
                }} />
                <LabelInput label="Pasword" type="password" placeholder="" onChange={(e) => {
                    setPostInput({
                        ...postInput,
                        password: e.target.value
                    })
                }} />
                <button type="button" onClick={sendRequest} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
        </div>
    )
}
