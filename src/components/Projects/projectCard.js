
import  "./projectCard.css";

const ProjectCard = ({project : {title, imageSrc, description, skills, source,demo}}) =>{
    return(
        <div className= "projectcard-container">
            <div className="card-cointainer">
            <img src={imageSrc} className="product-image" alt ="img" />
            <h3 className="projectcard-title">{title}</h3>
            <p className="projectcard-description">{description}</p>
            <ul className="skills">
                {
                    skills.map((skill, id)=>{
                        return <li key={id} className="projectcard-skill">{skill}</li>
                    })
                }
            </ul>
            <div className="projectcard-links">
                <a href={source} className="projectcard-link">GitHub</a>
                <a href={demo} className="projectcard-link">Demo</a>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard