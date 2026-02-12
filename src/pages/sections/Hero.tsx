
import myImage from "@/assets/jayfrill2.jpg"

import FloatingShape from "@/components/custom/virg-floatingShape"
import { ArrowDownToLine, ChevronDown } from "lucide-react"
import VirgRoundedLink from "@/components/custom/virg-rounded-button"
import VirgFacebook from "@/components/icons/virgFacebook"
import VirgUpwork from "@/components/icons/virgUpwork"
import VirgGitHub from "@/components/icons/virgGithub"
import VirgYoutube from "@/components/icons/virgYoutube"
import VirgLinkedIn from "@/components/icons/virgLinkedIn"




export default function HeroSection(){

    return(
        <div className="flex flex-col items-center justify-center space-y-5 relative py-15">
            {/* Left */}
            <FloatingShape x={20} y={10} />
            <FloatingShape x={5} y={85} />
            <FloatingShape x={15} y={65} />
            <FloatingShape x={33} y={30} />
            <FloatingShape x={25} y={87} />

            {/* Right */}
            <FloatingShape x={85} y={85} />
            <FloatingShape x={55} y={15} />
            <FloatingShape x={90} y={25} />
            <FloatingShape x={75} y={45} />
            <FloatingShape x={65} y={25} />
            <div className="mb-10">
                <img src={myImage} className="h-40 w-40 md:h-50 md:w-50 rounded-full bg-background shadow-[0_0_60px_rgba(217,70,239,0.45)]"/>

            </div>
            <div>
                <span className='special-elite-regular text-3xl md:text-6xl grenze-regular'>Hi! I am </span>
                <span className='special-elite-regular text-3xl md:text-6xl grenze-regular grenze-bold text-fuchsia-600'>Jayfrill Virgener</span>
            </div>
            <div>
                <span className='special-elite-regular text-md grenze-regular text-xl text-white'>Full Stack </span>
                <span className='special-elite-regular  grenze-regular grenze-bold text-2xl text-fuchsia-600'>Web Developer</span>
            </div>
            <div>
                <span className="text-gray-500 text-center text-sm">Crafting digital experiences with modern technologies</span>
            </div>
            <div>
                <p className="md:w-170 text-center text-white roboto-virg text-sm px-6 md:px-0">I specialize in building exceptional digital experiences using PHP, Javascript, and Web Libraries and Frameworks specially Laravel and React. With a passion for clean code and innovative solutions, I transform ideas into powerful web applications.</p>
            </div>
            <div className="flex gap-10 justify-between mt-5 px-2">
                <button className="w-40 md:w-50 text-xs text-white bg-fuchsia-600 md:text-sm font-bold px-6 rounded-3xl shadow-[0_0_50px_rgba(217,70,239,0.45)] hover:cursor-pointer  transition-all duration-300 ease-in-out hover:scale-110">View My Work</button>
                <button className="w-40 md:w-50 text-xs text-white outline outline-fuchsia-600 md:text-sm px-6 py-2 rounded-3xl flex items-center gap-2 hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
                    <ArrowDownToLine  size={12}/>
                    Download my CV

                </button>
            </div>
            <div>
                <ChevronDown className="h-8 w-8 animate-bounce text-white" />
            </div>
            <div className="flex gap-5 mt-3">
                    <VirgRoundedLink selectedLink="https://www.facebook.com/JayVirgener" label="Facebook">
                        <VirgFacebook/>
                    </VirgRoundedLink>
                    <VirgRoundedLink selectedLink="https://www.youtube.com/@jayfrillvirgenernaya2989" label="Youtube">
                        <VirgYoutube/>
                    </VirgRoundedLink>
                    <VirgRoundedLink selectedLink="https://www.linkedin.com/in/jayfrill-virgener-naya-4819602ba/" label="Linked In">
                        <VirgLinkedIn/>
                    </VirgRoundedLink>
                    <VirgRoundedLink selectedLink="https://github.com/Dvirgener" label="Github">
                        <VirgGitHub/>
                    </VirgRoundedLink>
                    <VirgRoundedLink selectedLink="https://www.upwork.com/freelancers/~01189721f64f8dc80f" label="Upwork">
                        <VirgUpwork/>
                    </VirgRoundedLink>
            </div>






        </div>
    )
}