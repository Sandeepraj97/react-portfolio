
import "./index.css"

const Contact = () =>{
    return(
        <footer id="contact" className="contact-container">
            <div className="contact-text"> 
                <h2>Contact</h2>
                <p>Feel Free to Reach Out!</p>
            </div>
            <ul className="contact-links">
                <li className="contact-link">
                    <a href="sandeep.raj0297@gmail.com">
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" className="log-icon"
                     alt="Email icon" />Mail</a>
                </li>
                <li className="contact-link">
                    <a href="www.linkedin.com/in/sandeep-raj-s-250b75187">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" className="log-icon"
                     alt="linkedin icon" />Linked-in</a>
                </li>
                <li className="contact-link">
                    <a href="https://github.com/Sandeepraj97">
                    <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" className="log-icon"
                     alt="Githib icon" />GitHub</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact