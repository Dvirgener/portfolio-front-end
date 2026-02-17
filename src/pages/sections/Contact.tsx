import ContactForm from "@/components/custom/contact/ContactForm";
import SectionTitle from "@/components/custom/virg-section-title";


export default function Contact(){





    return(
        <div className="h-full px-5 md:px-30 mb-25">
                  <div className='px-5'>
        <SectionTitle titleNot="Get in" titleBold="Touch" description="Have a project in mind or just want to say hi? I'd love to hear from you."/>
      </div>
            <div className="h-full text-white md:px-40">
                <div className="p-7 bg-white/10 rounded-md outline outline-white/50 ">
                    <ContactForm/>
                </div>
            </div>
            

      
        </div>
    )
}