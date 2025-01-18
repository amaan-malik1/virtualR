import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Price = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"> Pricing</h2>
            <div className="flex flex-wrap justify-center">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p>
                                {option.title}
                                {option.title === "Pro" && (<span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>)}
                            </p>
                            <p className="mb-8">
                                <span className="text-3xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <div key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 />
                                        <span className="ml-2 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </ul>
                            <a href="#"
                                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                            >Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Price