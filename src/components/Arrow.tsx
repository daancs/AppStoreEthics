import ArrowSvg from './ArrowSvg';

interface ArrowProps {
    pointUp: boolean,
    visible: boolean,
}

export default function ArrowIndicators(props: ArrowProps) {
    const setColour = (pointUp: boolean) => {
        if(pointUp) {
            return '#11F11A'; // Doesn't recognise tailwind.config colors, regular hex had to be used
        } else {
            return '#FB0A18';
        }
    };
    
    return (
      <>
        <div className={`${props.pointUp ? "w-fit h-fit": "w-fit h-fit rotate-180"}`}>
            <ArrowSvg fill={setColour(props.pointUp)} className={`${props.visible ? "" : "invisible"}`} />
        </div>
      </>
    )
}