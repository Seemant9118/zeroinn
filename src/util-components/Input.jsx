import { SendHorizontal } from 'lucide-react';

export default function Input() {
    return (
        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm"></span>
                </div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block h-14 w-full rounded-md border py-1.5 pl-7 pr-20 text-gray-700 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-base sm:leading-6"
                    placeholder="Email address"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <SendHorizontal color="#155bd5" size={28} strokeWidth={0.75} absoluteStrokeWidth />
                </div>
            </div>
        </div>
    )
}
