import "./index.css"

const Navbar =  () =>(
    <nav className="nav-container">
         <a className =" nav-name" href="/">
            SR 
        </a>  
        <ul className="nav-list-cointainer">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
)

export default Navbar