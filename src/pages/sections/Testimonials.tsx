import TestimonialCard from "@/components/custom/testimonials/TestimonialCard";
import SectionTitle from "@/components/custom/virg-section-title";


export default function Testimonials(){
    return(
        <div className="h-full px-5 md:px-30">
            <SectionTitle titleNot="Client" titleBold="Testimonials" description="See what my clients have to say about our work together."/>
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