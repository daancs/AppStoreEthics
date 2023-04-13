import { SizeChange } from "./GamePageSkeleton";

interface DotProps {
    size: SizeChange

}

export default function AppIndicators(props: DotProps) {
  let dotSpec: Map<SizeChange, string> = new Map([
    [SizeChange.NONE, ""],
    [SizeChange.SMALL, "w-6 h-6 mb-2 ml-7"],
    [SizeChange.BIG, "w-4 h-4 mb-2 ml-7"]
  ]);
    return (
      <>
    <div className={` ${(props.size!= SizeChange.NONE) ? "bg-blue-400 rounded-full" : "invisible"} ${dotSpec.get(props.size)}`}></div>
      </>
    )
}


