import React from "react";
import { cn } from "../../utility/cn";
import {Spotlight} from "./Spotlight";

export function SpotlightPreview() {

    return (
        <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Further <br /> The Experience.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Wandering the path from the realm of design, onward to front-end development,
                    and continuing down the path, exploring the vast world of full-stack development.
                </p>
            </div>
        </div>
    );
}