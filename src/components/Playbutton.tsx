import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";

interface PlaybuttonProps {
    title: string;
    displayButton: boolean;
    startKeyPressed: boolean;
    endKeyPressed: boolean;
    endPageRoute?: string;
}

const Playbutton = (props: PlaybuttonProps) => {

    const router = useRouter()

    return (
        <>
            {props.displayButton && 
                <div className='font-mono'>
                <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={false} sequence={[
                    `${props.title} [Y/n] \n >`
                ]}/>
                {props.startKeyPressed && <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={true} sequence={[
                    " y",
                    2000,
                    () => {
                    router.push('/game')
                    }
                ]}/>}
                {props.endKeyPressed && <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={true} sequence={[
                    " n",
                    2000,
                    () => {
                    props.endPageRoute ? router.push(props.endPageRoute) : router.reload()
                    }
                    ]}/>}
                </div>
            }
        
        </>
    )

}

export default Playbutton;