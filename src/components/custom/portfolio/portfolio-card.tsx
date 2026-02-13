import testImage from "@/assets/jayfrill2.jpg"
import PortfolioPill from "./portfolio-pill"

export default function PortfolioCard(){
    return(
    <div className="rounded-md border overflow-hidden md:w-70 bg-fuchsia-400/10 ">
      <img
        src={testImage}
        alt="Portfolio preview"
        className="w-full h-48 object-none md:object-cover border-b"
      />
      <div className="px-5 mt-2">
        <div className="text-white mb-2">
            <p className="font-bold text-lg">Brand Pros Media</p>
        </div>
        <div className="flex gap-2 flex-wrap mb-3">
            <PortfolioPill>PHP</PortfolioPill>
            <PortfolioPill>Laravel</PortfolioPill>
            <PortfolioPill>Livewire</PortfolioPill>
            <PortfolioPill>Javascript</PortfolioPill>
        </div>
        <div className="mb-5">
            <p className="text-white/60 text-[12px] line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate earum quas saepe, distinctio ipsum expedita illo quisquam nesciunt facilis. Odio recusandae ipsa assumenda animi modi quo, suscipit labore! Vel!</p>
        </div>
        <div className="mb-5 px-10">
            <button className="w-full py-2 text-xs text-white border-white border rounded-md hover:bg-white hover:text-black hover:border-black hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">More Details...</button>
        </div>
      </div>
    </div>
    )
}