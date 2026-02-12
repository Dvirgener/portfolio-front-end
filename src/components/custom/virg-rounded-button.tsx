import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function VirgRoundedLink({
    children,
    selectedLink,
    label
}: {
  children: React.ReactNode
  selectedLink: string
  label: string
}){
    return(
        <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
                <a href={selectedLink}>
                    <div className="rounded-full border p-2 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:bg-fuchsia-600/30 hover:shadow-fuchsia-500/50">     
                        {children}
                    </div>
                </a>
            </HoverCardTrigger>
            <HoverCardContent side="top" className="bg-transparent text-center text-sm border-0 shadow-none ">
                {label}
            </HoverCardContent>
        </HoverCard>
            )

}