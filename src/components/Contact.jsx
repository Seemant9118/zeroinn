'use client';
import { Phone, MapPin, AlarmClockCheck } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({});
    }

    const ContactData = [
        {
            icon: <Phone size={64} strokeWidth={1.25} absoluteStrokeWidth />,
            title: 'Contact',
            data: '+1 (248) 252-6942',
        },
        {
            icon: <MapPin size={64} strokeWidth={1.25} absoluteStrokeWidth />,
            title: 'Location',
            data: '397 Buttercup Dr.Rochester Hills, MI 48307',
        },
        {
            icon: <AlarmClockCheck size={64} strokeWidth={1.25} absoluteStrokeWidth />,
            title: 'Schedule',
            data: '24 Hours / 7 Days Open',
        },
    ];



    return (
        <div className="lg:px-28 md:px-20 px-5 py-24 flex md:flex-row flex-col gap-5">
            <div className="rounded-2xl md:w-1/3 w-full flex flex-col gap-5">
                {
                    ContactData.map(data => (
                        <div key={data.title} className="border rounded-2xl flex gap-5 h-36 p-5 transition-all ease-in duration-300 hover:shadow-xl">
                            <div className="text-primary">
                                <div className="h-full object-cover">{data.icon}</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-primary">{data.title}</h2>
                                <div className="text-gray-500">
                                    {data.data}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="border rounded-2xl md:w-2/3 w-full flex flex-col sm:flex-row px-5 transition-all ease-in duration-300 hover:shadow-xl hover:cursor-pointer">
                <div className="w-full px-2 py-4">
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">Get in Touch</h2>
                        <div className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-3">Ready to get Started</div>
                    </div>
                    <form action="#" method="POST" className="sm:mt-20" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name || ''}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    placeholder="Full Name"
                                    className="block w-full h-14 rounded-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-base text-sm sm:leading-6"
                                />
                            </div>

                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone-number"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    placeholder="Phone Number"
                                    className="block w-full h-14 rounded-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-base text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    placeholder="Email"
                                    className="block w-full h-14 rounded-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400  sm:text-base text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={formData.subject || ''}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className="block w-full h-14 rounded-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-base text-sm sm:leading-6"
                                />
                            </div>


                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        value={formData.message || ''}
                                        onChange={handleChange}
                                        placeholder="Type Your Message here"
                                        className="block w-full rounded-2xl border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-base text-sm sm:leading-6"
                                        
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="my-10 flex justify-center">
                            <button
                                type="submit"
                                className="block rounded-full bg-primary px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-[#1c3ab6]"
                            >
                                Lets connect!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};