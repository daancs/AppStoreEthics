import { SizeChange } from "./GamePageSkeleton";

interface DotProps {
    size: SizeChange
}

export default function AppIndicators(props: DotProps) {

  // Tailwind-specifications for dots of various sizes
  let dotSpec: Map<SizeChange, string> = new Map([
    [SizeChange.NONE, "w-6 h-6 mb-1 ml-7"],
    [SizeChange.SMALL, "w-6 h-6 mb-1 ml-7"],
    [SizeChange.BIG, "w-4 h-4 mb-3 ml-7"]
  ]);
  
    return (
      <>
    <div className={` ${(props.size!= SizeChange.NONE) ? "bg-blue-400 rounded-full" : "bg-primary-bg rounded-full"} ${dotSpec.get(props.size)}`}></div>
      </>
    )
}


