"use client";

import { useState } from 'react';
import ourCompanyImg from '../../asserts/ourCompany.jpg';
import Image from "next/image";

export default function OurCompany() {
    const companyData = [
        { id: 1, title: "Who We are", desc: "Zeroin was born from a vision to revolutionize the IT industry. Founded by a team of passionate technologists, we embarked on a mission to empower businesses with transformative solutions. From humble beginnings to becoming a cornerstone of innovation, our journey is defined by a relentless pursuit of excellence." },
        { id: 2, title: "Our Vision", desc: "At Zeroin, our vision is to be the catalyst for digital transformation, empowering businesses to thrive in a rapidly evolving world. We envision a future where technology seamlessly integrates with every aspect of our lives, driving innovation and creating limitless possibilities." },
        { id: 3, title: "Our History", desc: "Since our inception, Zeroin has been at the forefront of technological innovation. From developing groundbreaking software solutions to implementing cutting-edge infrastructure, our history is a testament to our commitment to excellence." },
    ];
    const [selectedData, setSelectedData] = useState(companyData[0]);

    function handleCompanyData(id) {
        setSelectedData(companyData[id - 1]);
    }

    return (
        <div className="min-h-[80vh] w-full lg:px-28 md:px-20 px-5 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-10 my-10">
            <div className="flex justify-center items-center">
                <div className="lg:h-4/5 h-full md:h-full">
                    <Image src={ourCompanyImg} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col gap-10 justify-center">
                <h3 className="font-bold text-2xl"><span className="text-primary ">--</span>OUR STORY</h3>
                <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">Our team comes with the experience and knowledge</h1>
                <div id='btnGroup' className="border bg-gray-200 flex sm:flex-row flex-col gap-5 p-3 rounded-md">
                    {
                        companyData.map(c => (
                            <div key={c.id}>
                                {
                                    selectedData.title == c.title ? <button className="rounded sm:w-36 w-full h-12 p-2 font-bold sm:text-base text-sm bg-primary text-white hover:text-white hover:cursor-text" onClick={() => handleCompanyData(c.id)}>{c.title}</button>
                                        :
                                        <button className="rounded sm:w-36 w-full h-12 p-2 font-bold sm:text-base text-sm bg-white text-primary hover:text-white hover:bg-primary active:bg-primary active:text-white" onClick={() => handleCompanyData(c.id)}>{c.title}</button>
                                }
                            </div>
                        ))
                    }
                </div>
                <div id='paraGroup' className="flex flex-col gap-3 text-gray-500 sm:text-base text-sm">
                    <p>{selectedData.desc}</p>
                </div>
            </div>
        </div>
    )
}