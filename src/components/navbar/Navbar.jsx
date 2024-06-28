import { useState } from "react";
import "./navbar.scss";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>Placeholder</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">How it works</a>
                <a href="/">Contact</a>

            </div>
            <div className="right">
                <a href="/">Login</a>
                <a href="/" className="register">Sign Up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)}/> 
                </div>
                <div className={open? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">How it works</a>
                    <a href="/">Contact</a>
                    <a href="/">Login</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;