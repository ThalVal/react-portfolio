import React from "react"
import "../style/Resume.css"



export default function Resume() {
    return (
        <section className="px-4 py-16 md: 9y-24 lg: 9x-8" id="resume">
            <div className="mx-auto max-w-screen-lg">
                <div className="flex flex-col divide-y-2 divide-neutral-300">
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Work Experience</h2>
                                
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3" >
                            <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                    <h3 className="workEx">
                                        INSERT PREVIOUS WORK
                                    </h3>
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">INSERT JOB NAME</span>
                                    <span> * </span>
                                    <span className="flex-1 text-sm sm:flex-none">INSERT JOB TIMEFRAME</span>
                                </div>
                                </div>
                                <p>
                                    <ul>
                                        <li>INSERT JOB DESCRIPTION</li>
                                    </ul>
                                </p>
                            </div>
                            INSERT DUPLICATE BC IT BREAKS FOR SOME REASON
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Skills</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400"></span>
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3">
                        <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                    <h3 className="workEx">
                                       Full Stack Developer Skills and Programs
                                    </h3>
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    
                                </div>
                                </div>
                                <p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>NoSql</li>
                                        <li>Mongoose</li>
                                        <li>HTML/CSS</li>
                                        <li>Javascript</li>
                                        <li>Bootstrap</li>
                                        <li>Handlebars</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                        <div className="col-span-1 flex justify-center md:justify-start">
                            <div className="relative h-max">
                                <h2 className="text-xl font-bold uppercase text-neutral-800">Education</h2>
                                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-blue-400"></span>
                            </div>
                        </div>
                        <div className="col-span flex flex-col md:col-span-3">
                        <div className="flex flex-col ph-8 last:ph-0 md:text-left" id="information">
                                <div className="fle flex-col ph-4">
                                   
                                <div className="flex items-center justify-center gap-x-2 md:justify-start">
                                    <span className="flex-1 text-sm font-medium italic sm:flex-none">UW Full Stack Developer Bootcamp</span>
                                    <span> * </span>
                                    <span className="flex-1 text-sm sm:flex-none">March-June 2023</span>
                                </div>
                                </div>
                                <p>Work Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
