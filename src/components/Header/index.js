import { Link } from "react-router-dom"

export const Header = () => {
    return(
    <header className="w-screen">
        <div className="flex bg-gray-100 px-16 py-6 shadow justify-between">
            <p>IA Jobs</p>
            <nav className="space-x-4 uppercase">
                <Link to="/">Home</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/learn">Learn</Link>
            </nav>
        </div>
    </header>
    )
}