"use client";
import React from "react";
import {SparklesCore} from "./Sparkles";

export function SparklesPreview() {
    return (
        <div className="h-[15rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-6xl text-5xl lg:text-7xl font-bold text-center text-neutral-300 relative z-20 mb-2">
                Contact Me
            </h1>
            <div className="w-[40rem] relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                 {/* Core component
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={120}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                /> */}

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
