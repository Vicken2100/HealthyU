import React, { useEffect, useRef, useState } from "react";
import back from "../Image/PIcture/arrow.png";
import Dela from "../Image/logo dela.png";
import axios from "axios";
import { url } from "../utils/globalVariabel";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { sleep } from "../utils/utils";

const Login = () =>{
    const [loading, setLoading] = useState(false);
    const username = useRef();
    const password = useRef();
    const rePass = useRef();
    const Token = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const token = Cookies.get('token');
    useEffect(()=>{
        if(!token){
        navigate("/");
    }
    }, [navigate, token])

    const submitEvent = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const data = {
            username : username.current.value,
            password : password.current.value,
            rePass : rePass.current.value,
            token : Token.current.value
        }
        try {
            await axios.post(url+ "/login/register", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            Swal.fire('Berhasil Ditambah', '', 'success');
            await sleep(1000);
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setError("Register Gagal, coba lagi");
            } 
            Swal.fire('Gagal Di tambah', '', 'error');

        }
        
        setLoading(false);
    }

    return (
        <>

        {loading ? <div className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-blue-900 to-blue-500 h-screen w-screen flex items-center justify-center opacity-50 z-5">
            <div className="animate-pulse rounded-full h-20 w-20 border-4 border-blue-100"></div>
        </div> : ""}

            <nav className="grid grid-cols-7 gap-4 items-center justify-items-center bg-[#ffffff] py-3">
                <div className="col-span-1 flex items-center">
                    <img src={back} alt="back" className="w-[30px] h-[30px] rounded-full hover:bg-[#92BB9B]" 
                    onClick={()=>{
                    navigate("/Profile");
                }}/>
                </div>
                <div className="col-span-5">
                    <h1 className="font-[500] text-[24px]">R E G I S T E R</h1>
                </div>
                <div className="col-span-1 flex items-center">
                    <img src={Dela} alt="" className="w-[40px] h-[40px] rounded-full"/>
                </div>
            </nav>

            <main className="text-white bg-[#92BB9B]">
                <div className="justify-items-center text-black w-screen h-screen">
                    <form onSubmit={submitEvent}>
                        <div className="mx-auto w-max pt-[250px]">
                            <input 
                            type="text"
                            className="bg-transparent placeholder-black"
                            ref={username}
                            placeholder="Username"
                            />
                            <hr />
                        </div>
                        
                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={password}
                            className="bg-transparent placeholder-black"
                            placeholder="Password"
                            />
                            <hr />
                        </div>

                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={rePass}
                            className="bg-transparent placeholder-black"
                            placeholder="Retype Password"
                            />
                            <hr />
                        </div>

                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={Token}
                            className="bg-transparent placeholder-black"
                            placeholder="Token"
                            />
                            <hr />
                        </div>

                        {error ? <p className="block text-center mt-[10px] text-red-500">{error}</p>  : ""}
                        
                        <div className="bg-white block agline-middle rounded-md mx-auto w-max px-[100px] mt-[40px]">
                            <input 
                            className="font-bold text-[#1D92AC]"
                            type="submit" 
                            disabled={loading}
                            value="Login" />
                        </div>
                    </form>
                </div>
            </main>
            
        </>
       
    );
}

export default Login;