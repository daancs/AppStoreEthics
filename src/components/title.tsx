interface TitleProps {
    title: string,
    children?: React.ReactNode
}

const Title = (props: TitleProps) => {
    return (
        <>
            <h1 className="text-4xl font-bold text-center text-white">{props.title}</h1>
            {props.children}
        </>
        
    )
}


export default Title
