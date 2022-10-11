type styleProp = {
    styles: React.CSSProperties
}

export const Style = (props:styleProp) => {
    return (
        <div style={props.styles}>
            hello world
        </div>
    )
}