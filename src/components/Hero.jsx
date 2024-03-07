import Image from "next/image";
import {PlayCircle} from 'lucide-react';
import HeroIamge from "../../asserts/HeroImage.jpg";


export default function Hero() {
    return (
        <div className="bg-primary min-h-[80vh] w-full lg:px-28 md:px-20 px-5 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-3">
            <div className="flex flex-col gap-10 justify-center items-start">
                <h1 className="text-white font-bold md:text-5xl sm:text-3xl text-2xl">Delivering Customize Business Solutions</h1>
                <p className="text-slate-300 sm:text-base text-xs">Elevate your business with cutting-edge technology and unparalleled expertise. Let's embark on a journey to redefine possibilities together.</p>
                <div id="btnGroup" className="flex sm:flex-row flex-col gap-2">
                    <button className="bg-white rounded w-40 h-12 p-2 text-primary font-bold sm:text-base text-sm hover:text-white hover:bg-primary hover:border">Get Started</button>
                    <button className="border w-40 h-12 p-2 rounded text-white font-bold sm:text-base text-sm flex justify-center items-center gap-2 hover:border-2 hover:bg-[#1c3ab6]"><PlayCircle size={28} strokeWidth={1.25} absoluteStrokeWidth />Watch Intro</button>
                </div>
            </div>
            <div className="flex flex-col justify-center mb-10">
                <div className="lg:h-2/3 md:h-full">
                    <Image src={HeroIamge} alt="" className="w-full h-full md:object-cover object-contain rounded-lg"/>
                </div>
            </div>
        </div>
    );
};