interface DotProps {
    big: boolean,
    visible: boolean

}

export default function AppIndicators(props: DotProps) {
    return (
      <>
    <div className={` ${props.visible ? "bg-blue-400 rounded-full" : "invisible"} ${props.big ? "w-6 h-6 mb-2 ml-7": "w-4 h-4 mb-4 ml-8"}`}></div>
      </>
    )
}