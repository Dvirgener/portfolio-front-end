import VirgRoundedLink from "@/components/custom/virg-rounded-button"
import VirgFacebook from "@/components/icons/virgFacebook"
import VirgGitHub from "@/components/icons/virgGithub"
import VirgUpwork from "@/components/icons/virgUpwork"
import VirgLinkedIn from "@/components/icons/virgLinkedIn"
import VirgYoutube from "@/components/icons/virgYoutube"
import { Mail, MapPinHouse, Phone } from "lucide-react"

VirgRoundedLink
export default function AdditionalContact(){
    return(
        <>
        <div className="h-full px-5 md:px-20 mb-10">
            <div className="mb-5">
                <p className="special-elite-regular text-3xl grenze-regular text-center mb-3 text-white">Contact Information</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
                <div className="flex items-center gap-2 text-white/70">
                    <VirgRoundedLink selectedLink="#" label="Facebook"><Phone size={16} strokeWidth={1.5} /></VirgRoundedLink>
                    <span>+639774228658</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                    <VirgRoundedLink selectedLink="#" label="Facebook"><Mail size={16} strokeWidth={1.5} /></VirgRoundedLink>
                    <span>d.virgener@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                    <VirgRoundedLink selectedLink="#" label="Facebook"><MapPinHouse size={16} strokeWidth={1.5} /></VirgRoundedLink>
                    <span>Davao City, Philippines</span>
                </div>
            </div> 
        </div>
        <div className="h-full px-5 md:px-20">
            <div className="mb-15">
                <p className="special-elite-regular text-3xl grenze-regular text-center mb-3 text-white">Follow Me</p>
            </div>
            <div className="flex gap-5 mt-3 justify-center">
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
        </>
        
    )
}