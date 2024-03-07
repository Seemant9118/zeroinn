import Input from '@/util-components/Input';

export default function Footer() {

    const solutionsList = [
        { title: 'Marketing', path: '' },
        { title: 'Analytics', path: '' },
        { title: 'Commerce', path: '' },
        { title: 'Insight', path: '' },
    ];

    const supportList = [
        { title: 'Pricing', path: '' },
        { title: 'Documentation', path: '' },
        { title: 'Guides', path: '' },
        { title: 'API status', path: '' },
    ];

    return (
        <footer className="border-t-2 border-slate-100 h-1/2 grid lg:grid-cols-6 lg:px-28 md:px-20 px-5 sm:py-24 py-5" >
            <div className="col-span-2 flex flex-col justify-around">
                <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold">Zeroin</h1>
                <div id="caption" className=" w-full text-gray-500">Enhance your business with cutting-edge technology and unparalleled expertise.</div>
                <div className="w-full text-slate-500 ">
                    © 2024, TechCom.<br />
                    Design and Developed by <span className="text-primary">Techpix - sk </span>
                </div>
            </div>

            <div className='flex flex-col justify-around py-5 gap-2'>
                <div className='font-bold sm:text-xl text-base'>Solutions</div>
                <ul className="flex flex-col gap-3">
                    {
                        solutionsList.map((solItem) => (
                            <li key={solItem.title} className="text-slate-500 hover:text-black hover:cursor-pointer" >{solItem.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col justify-around py-5 gap-2'>
                <div className='font-bold sm:text-xl text-base'>Support</div>
                <ul className="flex flex-col gap-3">
                    {
                        supportList.map((supItem) => (
                            <li key={supItem.title} className="text-slate-500 hover:text-black hover:cursor-pointer" >{supItem.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='col-span-2 flex flex-col justify-around py-5 gap-2'>
                <div className='font-bold sm:text-xl text-base'>Subscribe</div>
                <p className='text-slate-500'>Subscribe now for exclusive access to premium content</p>
                <Input />
            </div>
        </footer>
    );
};