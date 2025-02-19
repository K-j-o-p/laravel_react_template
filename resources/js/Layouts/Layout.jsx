import { Link } from "@inertiajs/react";
import Navbar from "../Components/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>
        </>
    )
}