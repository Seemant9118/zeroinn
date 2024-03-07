import Image from "next/image";

export default function TechCard({ Tech }) {
    return (
        <>
            {
                Tech.map((tech) => (
                    <div key={tech.title} className="w-full p-3 text-slate-800 border border-gray-200 rounded-lg shadow transition-all ease-in duration-300 hover:shadow-lg hover:cursor-pointer hover:bg-primary hover:text-white">
                        <Image className="h-1/4 w-1/3 object-contain" src={tech.icon} alt=""/>
                        <div className="h-3/4 p-5">
                            <h5 className="text-2xl font-bold tracking-tight ">
                                {tech.title}
                            </h5>
                            <p className="lg:text-base text-sm">
                                {tech.desc}
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    );
};