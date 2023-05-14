import React from 'react';
import logo from '../Image/HUp.png';
import ig from "../Image/PIcture/instagram.png";
import twt from "../Image/PIcture/twitter.png";
import fb from "../Image/PIcture/facebook.png";
import { useNavigate } from 'react-router-dom';

const Footer = () =>{

    const navigate = useNavigate();

    const clickEvent = (link) =>{
        navigate(link);
    }



    return (
        <footer className='fixed bottom-0 w-full bg-[#92BB9B] grid grid-cols-10 gap-9 items-center justify-items-center pt-6'>
            <div className="col-span-3 flex items-center">
            <a href="/Profile">
                <img src={logo} alt="" className='w-[45px] h-[45px] mr-1 hover:bg-white rounded-full'/>
            </a>
                <h1 className='font-bold text-white text-[24px]'>Healthy<span className='text-[#323419] font-extrabold text-[26px]'>U</span></h1>
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
                <h1 className='font-semibold'></h1>
                <p><a href="*">contact@healthyu.id</a></p>
                <p><a href="">087846787772</a></p>

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
        </footer>)
    }
    
    export default Footer;