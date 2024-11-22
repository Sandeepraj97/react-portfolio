import projects from "../../Data/projects.json"
import ProjectCard  from "./projectCard"
import  "./projects.css"

 const Projects = () =>{
    return(
        <section className="project-container" id= "projects"> 
            <h2 className="project-title">Projects</h2>
            <div className="projects">
                {
                    projects.map((project, id)=>{
                        return (
                            <ProjectCard key={id} project= {project}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects