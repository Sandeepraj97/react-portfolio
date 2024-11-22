
import "./index.css"

const About = () =>(
    <section className="about-cointainer" id="about">
            <h2 className="about-title" >About</h2>
            <div  className="content">
                <img src="https://i.ibb.co/L1D1TX9/about-Image-C8-Ovzw9-E.png"
                     alt="me with laptop"
                     className="aboutImage" />
                <ul className="aboutItems" >
                    <li className="aboutItem">
                        <img src="https://i.ibb.co/pKrh0Xt/Arrow-img.png"  alt="cursor icon" />                      
                        <div>
                            <h3 className="skill-heading">Frontend Developer</h3>
                            <p className="skill-description">I'm a Frontend Developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src="https://i.ibb.co/WzGqZc8/database-imagge.png"  alt="sever icon" />                    
                        <div>
                            <h3 className="skill-heading">Backend Developer</h3>
                            <p className="skill-description">I have experience in developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                   
                </ul>
            </div>
    </section>
)

export default About