import React, { useEffect, useState } from 'react';
import Lari from '../Image/orgLari.jpg';
import logo from '../Image/HUp.png';
import org from '../Image/orang.jpg';
import Carousel from "react-multi-carousel";
import axios from "axios";
import { url } from '../utils/globalVariabel';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Header';
import ig from "../Image/PIcture/instagram.png";
import twt from "../Image/PIcture/twitter.png";
import fb from "../Image/PIcture/facebook.png";


const Home = () =>{
    const navigate = useNavigate();
    const [classess, setClassess] = useState([]);
    const getClassess = async() =>{
        const result = await axios.get(url + "/class");
        console.log(result);
        return result.data.data;
    };
    useEffect(()=>{
        getClassess().then((result) => setClassess(result));
    }, []);
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
    };
    return (
        <>
            <Navbar/>

            <main>
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
                    <div className='grid grid-cols-4 gap-2 items-center justify-items-center mt-3'>
                        <div className='bg-[#92BB9B] rounded-xl'>
                            <p className='text-black font-bold text-[22px] col-span-2 p-3'>REKOMENDASI</p>
                        </div>
                    </div>
                </section>

                {classess && classess.map((result, index) =>
                
                <section className='kotakMate p-6' key={index}>
                    
                    <div className='grid grid-cols-7 gap-4 items-center justify-items-center overflow-y-auto h-[50px]'>
                        <h1 className='text-[#2A2C14] col-span-2 font-bold'>{result.name.toUpperCase()}</h1>
                        <div className='col-span-3'></div>
                        <div className=' bg-[#323419] rounded-md col-span-2 text-white hover:bg-[#FBD9D9]'>
                        <h2 className='text-[14px] p-2' onClick={()=>{
                            navigate("/materi?class="+ result.name)
                        }}>View All</h2>
                        </div>
                        
                    </div>
                    {result.subclasses ? 
                    <Carousel
                    showDots={false}
                    infinite={true}
                    autoPlay={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}
                    className="mt-5 "
                    >
                    {result.subclasses && result.subclasses.map((subclassess,index) => 
                        <div className='w-[150px] h-[100px] rounded-xl m-auto flex justify-center items-end relative bg-black' key={index} onClick={()=>{
                            window.location.href = url + "/public/materi/" + subclassess.materi
                        }}>
                            <img src={url+"/public/image/"+ subclassess.image} alt="Your Image" className="absolute top-0 left-0 rounded-t-xl w-[150px] h-[70px] object-fill" />
                            <div className='w-[150px] h-[30px] bg-[#92BB9B] rounded-b-lg text-center'>{subclassess.name}</div>
                        </div>
                )}
                    
                    </Carousel> : ""}
                    
                    
                    
                </section>
                )}

                
            </main>
            
            <footer className='w-full bg-[#92BB9B] grid grid-cols-10 gap-9 items-center justify-items-center pt-6'>
            <div className="col-span-3 flex items-center">
            <a href="/Profile">
                <img src={logo} alt="" className='w-[45px] h-[45px] mr-1 hover:bg-white rounded-full'/>
            </a>
                <h1 className='font-bold text-white text-[24px] hover:text-[#FBD9D9]'>Healthy<span className='text-[#323419] font-extrabold text-[26px]'>U</span></h1>
            </div>
            
            <div className='col-span-2 flex-col items-center justify-end ml-[320px]'>
                <h1 className='font-semibold text-[#323419]'>Olahraga</h1>
                
            </div>
            <div className='col-span-2 flex-col items-center justify-end'>
                <h1 className='mr-[px] font-semibold text-[#323419]'>Kesehatan</h1>
                
            </div>
            <div className='col-span-2 flex-col items-center justify-end'>
                <a href="/About">
                    <h1 className='mr-[280px] font-semibold text-[#323419]'>About Us</h1>
                </a>
                
                
            </div>
            <div className='col-span-1 flex-col items-center justify-end mr-[250px] text-[#323419]'>
                <h1 className='font-semibold '></h1>
                <p><a href="*">contact@healthyu.id</a></p>
                <p><a href="https://wa.me/087846787772">087846787772</a></p>

                <div className='flex mt-1 gap-1'>

                    <a href="https://instagram.com/aurellllllia?igshid=MzRlODBiNWFlZA==">
                        <img className='w-[19px] h-[19px]' src={ig} alt="" />
                    </a>
                    <a href="https://twitter.com/Erickwgk_?t=B-QjnceKJJ5pzMH5jjqR_A&s=08">
                        <img className='w-[19px] h-[19px]' src={twt} alt="" />
                    </a>
                    <a href="https://www.facebook.com/audrey.kussoy?mibextid=ZbWKwL">
                        <img className='w-[19px] h-[19px]' src={fb} alt="" />
                    </a>
                    
                
                </div>
            </div>

            <div className='col-span-10 flex items-center justify-end'>
                <h1 className='text-center font-semibold text-[#323419] '>©GOLDENROSE, 2023</h1>
            </div>
        </footer>



        </>
    )
}

export default Home;