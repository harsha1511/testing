import React from "react"

type ButtonType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


export const Button = (props : ButtonType ) => {
    return <>
    <button onClick={event => props.handleClick(event, 1)}>click me</button>
    </>
}