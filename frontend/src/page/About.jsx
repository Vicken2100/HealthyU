import React from "react";
import Navbar from '../component/Header';
import Footer from "../component/footer";
import ken from "../Image/ken.jpg";
import au from "../Image/au.jpg";
import ghN from "../Image/PIcture/cingN.png";
import ghP from "../Image/PIcture/cingP.png";
import ig from "../Image/PIcture/instagram.png";
import fb from "../Image/PIcture/facebook.png";
import twt from "../Image/PIcture/twitter.png";

const About = () => {
    return (
        <>
        <Navbar />
        <main className="container mx-auto px-4 py-10">
            <div className="mb-[30px]">
                <h1 className="text-[24px] font-semibold text-[#2A2C14]">About US</h1>
            </div>
            <div className="flex gap-x-[40px] justify-center">

                <div className="bg-[#92BB9B] rounded-lg shadow-lg overflow-hidden w-[230px]">
                    <img
                        className="object-cover h-[280px] w-[90%] m-auto rounded-t-lg mt-3"
                        src={au}
                        alt=""
                    />
                    <div className="px-6 py-3">
                        <h1 className="font-bold text-xl mb-2">Audrey Kussoy</h1>
                            <p className="text-[#2A2C14] text-base">
                            Audrey Kussoy is a student of Computer Science and Engineering at Unikadelasalle Manado
                            </p>
                        </div>
                    <div className="px-6 py-4 ">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Frontend
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Desainer
                        </span>
                    </div>
                </div>

                <div className="bg-[#92BB9B] rounded-lg shadow-lg overflow-hidden w-[230px]">
                    <img
                        className="object-cover h-[280px] w-[90%] m-auto rounded-t-lg mt-3"
                        src={ken}
                        alt=""
                    />
                    <div className="px-6 py-3">
                        <h1 className="font-bold text-xl mb-2">Vicken Manginsela</h1>
                            <p className="text-[#2A2C14] text-base">
                            Vicken Manginsela is a student of Computer Science and Engineering at
                            </p>
                        </div>
                    <div className="px-6 py-4 ">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Backend
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Support
                        </span>
                    </div>
                </div>

                <div className="flex-col kotak dua bawah">
                    <div className="bg-[#92BB9B] rounded-lg shadow-lg overflow-hidden w-[230px] mt-[55px]">
                        <div className="px-6 py-3 flex-col">
                            <h1 className="font-bold text-xl mb-2">Audrey Kussoy</h1>
                            <div className="mt-2 flex">
                                <img src={ig} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://instagram.com/aurellllllia?igshid=MzRlODBiNWFlZA=="><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                @aurellllllia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={fb} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://www.facebook.com/audrey.kussoy?mibextid=ZbWKwL"><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                Audrey Kussoy
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={twt} alt="" className="w-[25px] h-[25px]"/>
                                <a href=""><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                @aurelsonia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={ghP} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://github.com/audreyaurelle"><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                audreyaurelle
                                </p></a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="bg-[#92BB9B] rounded-lg shadow-lg overflow-hidden w-[230px] mt-[40px]">
                        <div className="px-6 py-3 flex-col ">
                            <h1 className="font-bold text-xl mb-2">Vicken Manginsela</h1>
                            <div className="mt-2 flex">
                                <img src={ig} alt="" className="w-[25px] h-[25px]"/>
                                <a href=""><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                @vicken2.10.0
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={fb} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://www.facebook.com/vicken.manginsela"><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                Vicken Manginsela
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={twt} alt="" className="w-[25px] h-[25px]"/>
                                <a href=""><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                Vicken2.10.0
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={ghN} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://github.com/Vicken2100"><p className="ml-2 hover:text-[#FBD9D9] text-[#2A2C14]">
                                Vicken2100
                                </p></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

                
            </div>
            
        </main>
        <Footer />
        </>
    );
    };

export default About;