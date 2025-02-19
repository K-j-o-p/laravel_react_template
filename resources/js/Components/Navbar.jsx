import { Link } from "@inertiajs/react"

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="nav-dark">
                    <Link className="nav-link" href="#">Home</Link>
                    <Link className="nav-link" href="#">About</Link>
                </nav>
            </header>
        </>
    )
}