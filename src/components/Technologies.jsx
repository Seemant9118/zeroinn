'use client'
import HeadBtn from "@/util-components/HeadBtn";
import TechCard from "@/util-components/TechCard";
import { useState } from "react";
// static icons
import JavaScriptIcon from '../../asserts/javascript.png';
import PythonIcon from '../../asserts/python.png';
import JavaIcon from '../../asserts/java.png';
import CsharpIcon from '../../asserts/csharp.png';
import HTMLIcon from '../../asserts/html.png';
import CSSIcon from '../../asserts/css.png';
import ReactIcon from '../../asserts/reactjs.png';
import NodeIcon from '../../asserts/nodejs.png';
import ExpressIcon from '../../asserts/express.png';
import SwiftIcon from '../../asserts/swift.png';
import KotlinIcon from '../../asserts/kotlin.png';
import FlutterIcon from '../../asserts/flutter.png';
import AWSIcon from '../../asserts/aws.png';
import AzureIcon from '../../asserts/azure.png';
import GCPIcon from '../../asserts/gcp.png';


export default function Technologies() {

    const SoftwareDev = [
        {
            icon: JavaScriptIcon,
            title: "JavaScript",
            desc: "JavaScript is a programming language commonly used to create interactive effects within web browsers."
        },
        {
            icon:PythonIcon,
            title: "Python",
            desc: "Python is a versatile programming language known for its simplicity and readability. It is widely used in various domains such as web development, data analysis, artificial intelligence, etc."
        },
        {
            icon:JavaIcon,
            title: "Java",
            desc: "Java is a high-level programming language known for its portability, security, and performance. It is commonly used in enterprise-level applications, Android app development, and more."
        },
        {
            icon:CsharpIcon,
            title: "C#",
            desc: "C# is a versatile programming language developed by Microsoft. It is commonly used for developing Windows applications, web applications, and games using the Unity game engine."
        }
    ];

    const WebDev = [
        {
            icon:HTMLIcon,
            title: 'HTML',
            desc: 'HTML (Hypertext Markup Language) is the standard markup language used to create the structure of web pages.'
        },
        {
            icon:CSSIcon,
            title: 'CSS',
            desc: 'CSS (Cascading Style Sheets) is used for styling the visual presentation of HTML elements on a web page.'
        },
        {
            icon:JavaScriptIcon,
            title: 'JavaScript',
            desc: 'JavaScript is a scripting language that enables interactive web elements, dynamic content, and client-side behavior.'
        },
        {
            icon:ReactIcon,
            title: 'React',
            desc: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently.'
        },
        {
            icon:NodeIcon,
            title: 'Node.js',
            desc: 'Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It is commonly used for building server-side applications and APIs.'
        },
        {
            icon:ExpressIcon,
            title: 'Express.js',
            desc: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.'
        }
    ];

    const AppDev = [
        {
            icon:SwiftIcon,
            title: "Swift",
            desc: "Swift is a powerful and intuitive programming language developed by Apple for building iOS, macOS, watchOS, and tvOS apps. It offers modern features and syntax for safer, more expressive code."
        },
        {
            icon:KotlinIcon,
            title: "Kotlin",
            desc: "Kotlin is a modern programming language developed by JetBrains. It is officially supported for Android app development by Google. Kotlin offers concise syntax, interoperability with Java, and enhanced safety features."
        },
        {
            icon:JavaIcon,
            title: "Java",
            desc: "Java is a widely used programming language for Android app development. It provides a robust and mature ecosystem, platform independence, and extensive libraries for building feature-rich mobile applications."
        },
        {
            icon:ReactIcon,
            title: "React Native",
            desc: "React Native is a framework developed by Facebook for building cross-platform mobile applications using JavaScript and React. It allows developers to write code once and deploy it on multiple platforms, saving time and effort."
        },
        {
            icon:FlutterIcon,
            title: "Flutter",
            desc: "Flutter is an open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language."
        }
    ];

    const CloudService = [
        {
            icon:AWSIcon,
            title: "Amazon Web Services (AWS)",
            desc: "AWS: Amazon's cloud platform offers essential services like computing, storage, and networking, alongside advanced tools for ML, analytics, and IoT."
        },
        {
            icon:AzureIcon,
            title: "Microsoft Azure",
            desc: "Microsoft Azure: Microsoft's cloud service provides a broad range of computing, analytics, storage, and networking solutions. It supports multiple languages and tools for efficient application development and management."
        },
        {
            icon:GCPIcon,
            title: "Google Cloud Platform (GCP)",
            desc: "Google Cloud Platform (GCP) offers scalable cloud solutions, including IaaS, PaaS, and serverless computing. It provides versatile services for computing, storage, ML, and analytics."
        },
    ];

    const navigationTech = [
        { id: 1, title: 'Software Development', component: <TechCard Tech={SoftwareDev} /> },
        { id: 2, title: 'Web Development', component: <TechCard Tech={WebDev} /> },
        { id: 3, title: 'App Development', component: <TechCard Tech={AppDev}/> },
        { id: 4, title: 'Cloud Computing Services', component: <TechCard Tech={CloudService} /> },
    ];

    const [selectedComponent, setSelectedComponent] = useState(navigationTech[0]);

    function handleShowComponent(id) {
        setSelectedComponent(navigationTech[id - 1]);
    }

    return (
        <div className="min-h-[80vh] w-full lg:px-28 md:px-20 px-5 mt-24">
            <div className="flex flex-col gap-5 justify-center items-center my-5">
                <HeadBtn btnName="Technologies" />
                <div className="sm:text-4xl text-2xl font-bold text-center">What Technologies we are working</div>
                <ul className="flex flex-wrap justify-center gap-5 mt-10">
                    {
                        navigationTech.map(tech => (
                            selectedComponent.title == tech.title ?     
                            <li key={tech.title} className="text-primary font-bold border-b-4 rounded border-primary" onClick={() => handleShowComponent(tech.id)}>{tech.title.toUpperCase()}</li>:
                            <li key={tech.title} className="text-gray-700 font-bold  hover:text-primary hover:cursor-pointer hover:border-b-4 rounded border-primary" onClick={() => handleShowComponent(tech.id)}>{tech.title.toUpperCase()}</li>

                        ))
                    }
                </ul>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    selectedComponent.component
                }
            </div>
        </div>
    )
}