import React from 'react'
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'

const Hero = () => {
    return (
        <div>
            <div className="flex item-center justify-center flex-col mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    VirtualR build tools
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span>
                </h1>
                <p className="self-center mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus laborum repudiandae sunt inventore veniam earum repellat! Nisi doloremque dolorum blanditiis voluptates, earum architecto autem nemo necessitatibus ex facere vero in.
                </p>
                <div className="flex justify-center my-10">
                    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Start for Free</a>
                    <a href="" className="border py-3 px-4 mx-3 rounded-md">Documentation</a>
                </div>
                <div className="flex justify-center m-auto w-5/6">
                    <video src={video1} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"></video>
                    <video src={video2} autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"></video>
                </div>
            </div>
        </div>
    )
}

export default Hero