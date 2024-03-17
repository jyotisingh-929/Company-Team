import React from 'react';
import MemberCard from './MemberCard';
import img1 from '../Images/ribban1.png';
import img2 from '../Images/ribban2.png';


const Card = ({ image, name, role }) => {
    return (
        <>
            <div className="p-3 rounded-lg w-lg h-70 shadow-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div>
                    <div className="flex justify-center">
                        <img
                            src={image}
                            className="rounded-lg h-full w-64 "
                        />
                    </div>
                    <div className="flex gap-4 justify-center relative flex-col p-2 py-4">
                        <h4 className="font-bold text-xl">{name}</h4>

                    </div>
                    <div className="flex gap-4 justify-center relative flex-col p-2 py-4">
                        <h4 className="font-semibold text-lg text-fuchsia-500">{role}</h4>

                    </div>
                </div>
            </div>
        </>
    );
};
const TeamPage = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-end items-end absolute w-24 lg:w-28  top-0 right-0'>
                <img src={img2} className='items-end' />
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-3xl lg:text-5xl font-semibold box-border box-content bg-fuchsia-500 rounded-md px-4 py-2 text-white'>VeriTech Software Services</h1>
                <p className='text-xl font-serif text-slate-600 pt-8 md:w-3/4 w-2/3 '>Welcome to VeriTech Software Services, where a dedicated team of professionals works together to bring
                    innovation, creativity and expertise to software industry ,get to know the individuals who make our company thrive.
                </p>
            </div>
            <hr className='border-dashed border-2 border-fuchsia-500 mt-14 lg:mx-96 mx-20' />
            {/* Leadership/Management Team */}
            <div className='pt-14'>
                <div className='text-center'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>Meet Our Team</h1>
                </div>
                <div className='flex flex-col items-center justify-center text-center mt-7'>
                    <h1 className='text-xl font-semibold box-border box-content bg-fuchsia-500 rounded-md px-4 py-1 text-white'>Leadership/Management Team</h1>

                </div>
                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center text-center '>
                        {MemberCard.leadershipCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center text-center '>
                        {MemberCard.mainLeadCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Development Team */}
            <div className='pt-10'>
                <div className='grid grid-cols-6 gap-4 flex'>
                    <div className='flex justify-start items-start w-24 lg:w-28  top-0 left-0'>
                        <img src={img1} className='items-start' />
                    </div>
                    <div className='flex flex-col col-start-2 col-span-4 items-center justify-center text-center mt-3'>
                        <h1 className='text-xl font-semibold bg-fuchsia-500 rounded-md px-4 py-1 text-white'>Development Team</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center text-center '>
                        {MemberCard.developerCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center text-center '>
                        {MemberCard.devCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Sales and Marketing Team */}
            <div className='pt-10'>
                <div className='grid grid-cols-6 gap-4 flex'>
                    <div className='flex justify-end items-end absolute w-24 lg:w-28 -right-0 '>
                        <img src={img2} className='items-end' />
                    </div>
                    <div className='flex flex-col col-start-2 col-span-4 items-center justify-center text-center mt-3'>
                        <h1 className='text-xl font-semibold box-border box-content bg-fuchsia-500 rounded-md px-4 py-1 text-white'>Sales and Marketing Team</h1>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center text-center '>
                        {MemberCard.salesCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <div className='flex justify-center items-center mt-14 '>
                    <div className='flex grid sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center text-center '>
                        {MemberCard.marketingCard.map((data, index) => (
                            <Card
                                key={index}
                                image={data.img}
                                name={data.title}
                                role={data.role}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-start w-24 lg:w-28  top-0 left-0'>
                <img src={img1} className='items-start' />
            </div>
        </div>
    )
}

export default TeamPage;