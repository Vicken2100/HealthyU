import React from 'react';
import logo from '../Image/HUp.png';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {

    const navigate = useNavigate();

    const clickEvent = (link) =>{
        navigate(link);
    }
    return(
        <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#92BB9B] p-3" >
                <div className="col-span-3 flex items-center">
                <a href="/Profile">
                    <img src={logo} alt="" className='w-[45px] h-[45px] mr-1 hover:bg-white rounded-full'/>
                </a>
                    <h1 className='font-bold text-white text-[24px] hover:text-[#FBD9D9]'
                        onClick={()=>{
                        navigate("/");
                        }}
                    >Healthy<span className='text-[#323419] font-extrabold text-[26px]'>U</span></h1>
                </div>

                <div className="col-span-7 flex items-center justify-end">
                    <div className='mr-[100px] font-semibold text-[#323419] hover:bg-[#FBD9D9] py-2 px-4 rounded-xl'>
                        <h1 className=' '
                            onClick={()=>{
                            navigate("/materi?class=Olahraga");
                            }}
                            >Olahraga</h1>
                    </div>

                    <div className='mx-[100px] font-semibold text-[#323419] py-2 px-4 rounded-xl hover:bg-[#FBD9D9]'>
                        <h1 className=' '
                            onClick={()=>{
                            navigate("/materi?class=Makanan%20Sehat");
                            }}
                            >Makanan Sehat</h1>
                    </div>

                    <div className='mx-[100px] font-semibold text-[#323419] py-2 px-4 rounded-xl hover:bg-[#FBD9D9]'>
                        <h1 className=' '
                            onClick={()=>{
                            navigate("/materi?class=Perawatan%20Kulit");
                            }}
                            >Perawatan Kulit</h1>
                    </div>

                    <div className='ml-[50px]  font-semibold text-[#323419] py-2 px-4 rounded-xl hover:bg-[#FBD9D9]'>
                    <h1 className=' '
                    onClick={()=>{
                        navigate("/Login");
                    }}
                    >LogIn</h1>
                    </div>
                    
                </div>
            </header>
    )
}

export default Navbar;