import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,

} from "react-icons/rx";

import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[15]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a className="flex flex-row items-center my-[15px] cursor-pointer button-color-hover"
                            href="https://github.com/jordislpm"
                            target="_blank">
                            <RxGithubLogo className=""/>
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a className="flex flex-row items-center my-[15px] cursor-pointer button-color-hover"
                            href="https://www.linkedin.com/in/juan-tomas-de-pena-medina/"
                            target="_blank">
                            <AiOutlineLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                        <a
                            className="flex flex-row items-center my-[15px] cursor-pointer button-color-hover"
                            href="https://discord.com/users/jordislpm"
                            target="_blank"
                        >
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p> */}
                        <p className="flex flex-row items-center my-[15px] cursor-pointer button-color-hover">
                            <a href="mailto:jordislpm@gmail.com?subject=I'm%20interested%20in%20you%20as%20a%20software%20developer">
                                <span className="text-[15px] ml-[6px]">jordislpm@gmail.com</span>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; jordisdev 2024 All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer