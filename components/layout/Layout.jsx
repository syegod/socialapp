import { NavBar } from "./NavBar";

export function Layout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <div className="container px-20 mt-5">{children}</div>
        </>
    )
}