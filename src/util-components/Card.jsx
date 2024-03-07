// Card component
export default function Card({ icon, title, desc }) {
    return (
        <div className="border rounded w-full h-80 flex flex-col px-10 justify-center transition-all ease-in duration-300 hover:shadow-xl hover:cursor-pointer">
            <div id="icon" className="h-1/3 w-1/2 flex justify-start text-primary " >{icon}</div>
            <div id="title" className="h-1/6 font-bold text-xl">{title}</div>
            <div id="desc" className="h-1/3 md:text-sm text-xs text-slate-400">{desc}</div>
        </div>
    );
};