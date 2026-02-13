import VirgPills from "@/components/custom/virg-pills";
import Skill from "@/components/custom/virg-skillset";
import { CodeXml, Database, Layers, PenTool } from "lucide-react";

export default function AboutMe(){
    return(
        <div className="px-10 md:px-20 mb-55">
            <div className="mb-15">
                <p className="special-elite-regular text-3xl md:text-6xl grenze-regular text-center mb-3"><span className="text-white">About</span> Me</p>
                <p className="text-center text-white roboto-virg">A PHP Laravel Developer dedicated to building dynamic and exceptional digital experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white robot-virg">
                <div className="col md:col-span-2">
                    <p className="special-elite-regular text-xl md:text-4xl grenze-bold-italic mb-8">Crafting Digital Solutions for Business Growth</p>
                    <p className="a text-justify roboto-virg mb-5 text-sm md:text-base">
                        With years of dedicated experience as a web developer, I specialize in creating powerful, custom web solutions with a strong focus on PHP and Laravel. My journey has been centered on building bespoke websites and applications for corporate and individual clients, turning their unique visions into reality. <br /><br />

                        My expertise also extends to WordPress, allowing me to deliver versatile and user-friendly content management systems. Rather than focusing on open-source contributions, my passion lies in partnering directly with clients to architect and develop high-impact digital platforms that drive their success. I combine technical proficiency with a keen eye for UI/UX design to create products that are not only functional but also a delight to use.
                    </p>
                    <p className="special-elite-regular text-xl md:text-3xl grenze-bold mb-8">
                        Technical Skills :
                    </p>
                    <div className="flex flex-row gap-2 md:gap-3 flex-wrap">
                        <VirgPills val="PHP"/>
                        <VirgPills val="Laravel"/>
                        <VirgPills val="Javascript"/>
                        <VirgPills val="React"/>
                        <VirgPills val="Typescript"/>
                        <VirgPills val="Wordpress"/>
                        <VirgPills val="Python"/>
                    </div>
                </div>
                <div className="col flex flex-col space-y-3">
                    <Skill icon={<Layers />} title="Full-Stack Solutions">Architecting robust applications from database to UI for corporate and individual clients.</Skill>

                    <Skill icon={<PenTool />} title="UI/UX Designs">Crafting intuitive and engaging user interfaces that are both beautiful and functional.</Skill>

                    <Skill icon={<CodeXml />} title="Clean Architecture">Writing maintainable, scalable, and efficient code following best practices.</Skill>

                    <Skill icon={<Database />} title="API Development">Designing and building secure and performant RESTful APIs.</Skill>
                </div>
            </div>
        </div>
    )
}