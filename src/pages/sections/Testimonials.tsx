import TestimonialCard from "@/components/custom/testimonials/TestimonialCard";


export default function Testimonials(){
    return(
        <div className="h-full px-5 md:px-30">
            <div className="mb-15">
                <p className="special-elite-regular text-3xl md:text-6xl grenze-regular text-center mb-3"><span className="text-white">Client</span> Testimonials</p>
                <p className="text-center text-white roboto-virg">See what my clients have to say about our work together.</p>
            </div>
            <div className="flex justify-center mb-5">
                <button className="text-xs rounded-md border px-6 py-3 shadow shadow-white bg-red-500/80 font-bold text-white hover:text-black hover:scale-110 transition-all hover:bg-white hover:shadow-black hover:cursor-pointer">Leave a Testimonial</button>
            </div>
            <div className="h-150 overflow-auto px-5 md:px-20 py-5 space-y-5">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>         
        </div>
    )
}