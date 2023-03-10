import ProjectCard from "../components/ProjectCard";
function Projects() {
  const projectsarray = [
    {
      id: 1,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 2,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png", 
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 3,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 4,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 5,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 6,
      title: "Password Generator",
      desc: "a tool to generate",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
  ]


  return (
    <section className="projects">
      <h2>Project</h2>
      <div> 
        {projectsarray.map(project=>{
          return <ProjectCard 
          key={project.id} 
          title= {project.title}
          desc= {project.desc}
          img= {project.img}
          gitlink= {project.gitlink}
          weblink={project.weblink}/>
        })}
      </div>
    </section>
  );
}

export default Projects;