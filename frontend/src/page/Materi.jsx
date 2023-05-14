import React, { useEffect, useState } from "react";
import back from "../Image/PIcture/arrow.png";
import Footer from "../component/footer";
import logo from '../Image/HUp.png';
import Navbar from '../component/Header';
import Lari from '../Image/orgLari.jpg';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { url } from '../utils/globalVariabel';
import Cookies from 'js-cookie';

const Materi = () =>{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [subClassess, setSubClassess] = useState([]);
    
    const materi = searchParams.get("class");
    const status = Cookies.get('status');
    const token = Cookies.get("token");

    useEffect(()=>{
        if(!materi){
            navigate("/");
        }
    }, [navigate, materi]);

    const getSubClassess = async() =>{
        const result = await axios.get(url + "/class/subClass?filters[class]="+materi);
        return result.data.data;
    };
    useEffect(()=>{
        getSubClassess().then((result) => setSubClassess(result));
    }, []);
    const deleteMateri = async(xid) =>{
        await axios.delete(url + "/class/subClass/"+xid, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        } )
        window.location.reload();
    }
    return (
        <>
            <Navbar/>

            <main className="h-[480px] scrollable overflow-y-auto mt-5">
                
            <section className='kotak awal '>
                    <div className='relative'>
                        <img src={Lari} alt="" className='m-auto w-screen h-[280px]'/>
                        <div className='absolute inset-0 flex items-center left-[200px]'>
                            <p className='text-white font-bold'>
                            Menjaga kesehatan hari ini memberikan harapan <br />yang lebih baik untuk hari esok. 
                            <br />
                            <br />
                            Dengan <span className='text-[#87e79c]'>HealthyU</span>,  raih tubuh yang sehat dan <br />
                            bugar dengan mengatur gaya hidup Anda apa <br /> 
                            yang Anda lakukan, apa yang Anda konsumsi, <br /> 
                            setiap hari.
                            </p>
                        </div>
                        
                    </div>
                </section>

                <section className="materi p-6">
                <h1 className="font-semibold text-black capitalize text-center col-span-7 text-[25px]"> {materi} </h1>
                {status && status === "Editor" ?  <div className="flex justify-between">
                    <button className="bg-[#92BB9B] hover:bg-green-700 text-black font-bold py-2 px-4 rounded-xl"
                    onClick={()=>{
                        navigate("UnggahM?class=" + materi);
                    }}
                    >
                        Tambah Materi
                    </button>
                </div> : ""}
                
                    <div className='grid grid-cols-10 gap-4 pt-1 mt-[60px]'>
                        {subClassess && subClassess.map((subclassessChild,index) => 
                            <div className='w-[200px] h-[100px] mt-7 rounded-xl m-auto flex justify-center items-end relative col-span-2' key={index}
                            onClick={()=>{
                                window.location.href = url + "/public/materi/" + subclassessChild.materi
                            }}
                            >
                                <img src={url+"/public/image/"+ subclassessChild.image} alt="Your Image" className="absolute top-0 left-0 rounded-t-xl w-full h-[70px] object-fill" />
                                <div className='w-full h-[30px] bg-[#92BB9B] text-center rounded-b-lg'>{subclassessChild.name}</div>
                                {status && status === "Editor" ? <button className="bg-red-500 hover:bg-red-700 text-black font-bold px-4 z-10 text-[12px] h-[30px] rounded-br-lg"
                                onClick={()=>{
                                    deleteMateri(subclassessChild.xid);
                                }}
                                >
                                    Hapus
                                </button> : ""}
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer/>
            
        </>
       
    );
}

export default Materi;