import ContactForm from "@/components/custom/contact/ContactForm";

export default function Contact(){
    return(
        <div className="h-full px-5 md:px-30 mb-25">
            <div className="mb-15">
                <p className="special-elite-regular text-3xl md:text-6xl grenze-regular text-center mb-3"><span className="text-white">Get in</span> Touch</p>
                <p className="text-center text-white roboto-virg">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
            </div>
            <div className="h-full text-white md:px-40">
                <div className="p-7 bg-white/10 rounded-md outline outline-white/50 ">
                    <ContactForm/>
                </div>
            </div>

      
        </div>
    )
}