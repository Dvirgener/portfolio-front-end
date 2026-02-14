import linxCodes from "@/assets/linxcodes.png"

export default function Footer(){
    return(
        <div className="flex flex-col py-10 space-y-5 px-10 mt-20 bg-white/10 border-t border-black">
            <div className="flex flex-col justify-center items-center space-y-5 text-white/60 text-sm md:mx-30 border-b pb-5 border-black">
                <img src={linxCodes} className="h-20 w-20"/>
                <span>Crafting digital experiences with passion and precision</span>
                <span>Made with ❣️ by Jayfrill Virgener</span>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5 text-white/40 text-sm md:mx-30 pb-5">
                <span>© 2025 Linx Codes. All rights reserved.</span>
            </div>
        </div>
    )
}