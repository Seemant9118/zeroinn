import Image from "next/image";

import Link from "next/link";

export default function TeamCard({ profileImg, name, designation, icons }) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transition-all ease-in duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                <Image src={profileImg} alt="profile-picture" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                    {name}
                </h4>
                <p
                    className="block font-sans text-base antialiased font-medium leading-relaxed text-black bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    {designation}
                </p>
                <div className="flex justify-around py-2">
                    {icons.map(i => (
                        <div key={i.id} className="hover:text-primary"><Link href={i.path}>{i.icon}</Link></div>
                    ))}
                </div>
            </div>
        </div>
    );
};