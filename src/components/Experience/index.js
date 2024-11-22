import skills from "../../Data/skills.json"
import history from "../../Data/history.json"

import "./index.css"

const Experience =() =>(
    <section id="experience" className="skill-cointainer">
        <h1 className="skill-heading-title">Skills</h1>
        <div className="content">
            <div className="skills">
                {
                    skills.map((skill,id)=>(
                        <div className="skill">
                            <div className="skills-data-cointainer">
                            <img src={skill.imageSrc}  alt={skill.title}/> 
                            <p className="skill-name">{skill.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ul className="history">
                {
                    history.map((item,id)=>(
                        <li className="historyItem">
                        <div className="historyItemDetails">
                            <h3 className="role">{item.role}</h3>
                            <h2 className="organisation">{item.organisation}</h2>
                            <p className="start-end-year">{item.startDate} - {item.endDate}</p>
                        </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
)

export default Experience