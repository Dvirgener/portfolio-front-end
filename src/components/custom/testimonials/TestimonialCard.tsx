import { Star } from "lucide-react";

export default function TestimonialCard(){
    return(
                <div className="text-white px-2 py-5 rounded-md bg-red-500/10 w-full border border-white/30 shadow-md shadow-white/30">
                    <div className="md:flex justify-between mb-3 ps-5 md:ps-0 space-y-2">
                        <div className="flex gap-2 items-center md:px-10">
                            <Star fill="white" className="text-white"  />
                            <Star fill="white" className="text-white"  />
                            <Star fill="white" className="text-white"  />
                            <Star fill="white" className="text-white"  />
                            <Star fill="white" className="text-white"  />
                        </div>
                        <span className="font-bold grenze-regular text-xl pe-3">Dec 3, 2025</span>
                    </div>
                    <div className="md:px-10 ps-5 text-sm mb-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quos officiis nam mollitia. Voluptas delectus illo reiciendis exercitationem quaerat quis? Velit pariatur dolor dolores rerum similique eveniet amet praesentium molestias?</p>
                    </div>
                    <div className="mb-3 px-5 md:px-15">
                        <span className="font-bold text-md grenze-bold">
                            <span className="font-bold grenze-regular text-xl pe-3">-</span>
                            Jayfrill Virgener O Naya
                        </span>
                    </div>
                    <div className="mx-5 md:mx-20 px-5 py-3 ring ring-white border rounded-md text-white/70 bg-white/10">
                        <span className="text-sm ">
                            <span className="font-bold grenze-bold text-md pe-1">Jayfrill: </span>
                            <span>Thank you for the Great Feedback and Support!</span>
                        </span>
                    </div>
                </div>
    )
}