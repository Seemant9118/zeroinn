import HeadBtn from '@/util-components/HeadBtn';
import { CodeSquare, MonitorDot, TabletSmartphone, CloudCog, GlobeLock, CircuitBoard, Handshake, UserRoundCog, LineChart, Building2 } from 'lucide-react';
import Card from '@/util-components/Card';


export default function Services() {

    const servicesData = [
        {
            icon: <CodeSquare size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "Software Development",
            description: "Creating custom software solutions tailored to specific business requirements, ranging from web applications to mobile apps and enterprise software."
        },
        {
            icon: <MonitorDot size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "Web Development",
            description: "Designing and developing websites using technologies such as HTML, CSS, JavaScript, and content management systems (CMS) like WordPress or Drupal."
        },
        {
            icon: <TabletSmartphone size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "Mobile App Development",
            description: "Building applications for mobile devices such as smartphones and tablets, for platforms like iOS (Apple) and Android."
        },
        {
            icon: <CloudCog size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "Cloud Computing Services",
            description: "Providing access to computing resources (servers, storage, databases, networking, software) over the internet, enabling scalability, flexibility, and cost-efficiency."
        },
        {
            icon: <CircuitBoard size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "Data Analytics and Business Intelligence",
            description: "Utilizing data to derive insights, make informed decisions, and optimize business processes through techniques like data mining, predictive analytics, and reporting."
        },
        {
            icon: <Handshake size={36} strokeWidth={0.5} absoluteStrokeWidth className='hoverEffect h-full w-1/2 p-0' />,
            title: "IT Consulting",
            description: "Advising businesses on technology strategies, helping them align IT with their business goals, and providing expertise on various IT-related matters."
        },
    ];

    return (
        <div className="min-h-[80vh] w-full lg:px-28 md:px-20 px-5 my-10">
            <div className="flex flex-col gap-5 justify-center items-center my-5">
                <HeadBtn btnName="Services"/>
                <div className="sm:text-4xl text-2xl font-bold">Our Best Services</div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    servicesData.map(service => (
                        <div key={service.title}><Card icon={service.icon} title={service.title} desc={service.description} /></div>
                    ))
                }
            </div>
        </div>

    );
};