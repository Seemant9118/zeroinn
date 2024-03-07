import HeadBtn from "@/util-components/HeadBtn";
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import deafultProfile from "../../asserts/Profile.jpg";
import TeamCard from "@/util-components/TeamCard";

export default function Team() {

    const TeamData = [
        {
            profileImg: deafultProfile,
            title: 'Norman Dav',
            designation: 'Founder / CTO',
            icons: [
                {
                    id: 1,
                    icon: <Facebook strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'facebook.com',
                },
                {
                    id: 2,
                    icon: <Twitter strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'twiiter.com',
                },
                {
                    id: 3,
                    icon: <Linkedin strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'linkedin.com',
                },
            ]
        },
        {
            profileImg: deafultProfile,
            title: 'Julie Hese',
            designation: 'Co Founder / CEO',
            icons: [
                {
                    id: 1,
                    icon: <Facebook strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'facebook.com',
                },
                {
                    id: 2,
                    icon: <Twitter strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'twitter.com',
                },
                {
                    id: 3,
                    icon: <Linkedin strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'linkedin.com',
                },
            ]
        },
        {
            profileImg: deafultProfile,
            title: 'Roman joseph',
            designation: 'Co Founder / CMO',
            icons: [
                {
                    id: 1,
                    icon: <Facebook strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'facebook.com',
                },
                {
                    id: 2,
                    icon: <Twitter strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'twitter.com',
                },
                {
                    id: 3,
                    icon: <Linkedin strokeWidth={0.5} absoluteStrokeWidth />,
                    path: 'linkedin.com',
                },
            ]
        },
    ];

    return (
        <div className="min-h-[80vh] w-full lg:px-28 md:px-20 px-5 sm:py-24 py-5">
            <div className="flex flex-col gap-5 justify-center items-center my-5">
                <HeadBtn btnName="Team" />
                <div className="sm:text-4xl text-2xl font-bold">Our Creative Team</div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    TeamData.map(team => (
                        <TeamCard key={team.title} profileImg={team.profileImg} name={team.title} designation={team.designation} icons={team.icons} />
                    ))
                }
            </div>
        </div>
    )
}