import { useState } from "react"

type loginDetails = {
    name: string
    email: string
}
export const State = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState < loginDetails | null>()

    const handleLogIn = () => {
        setLoggedIn(true)
    }
    const handleLogOut = () => {
        setLoggedIn(false)
    }

    const handleGet = () => {
        setUser({
            name: "harsha",
            email: "harsha@gmail.com",
        })
    }
    const handleUser = () => {
        setUser(null)
    }
    return (
        <div>
        <button onClick={handleLogIn}>log in</button>
        <button onClick={handleLogOut}>log out</button>
        {loggedIn &&
        <button onClick={handleGet}>who loggd in</button>
        }
        <h3>user is {loggedIn ? "logged in" : "logged out"} by {loggedIn && user?.name}</h3>
        </div>
    )
}