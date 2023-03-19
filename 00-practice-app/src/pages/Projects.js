import ProjectCard from "../components/ProjectCard";
function Projects() {
  const projectsarray = [
    {
      id: 1,
      title: "Password Generator",
      desc: "a tool to generate passowrds on a project ass needed",
      img: "screenshot.png",
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 2,
      title: "Bakery Store",
      desc: "This was a group project where my team and I where meant to make a store front for a bakery opening up in Toronto.",
      img: "screenshot.png", 
      gitlink: " ",
      weblink: " ",
    },
    {
      id: 3,
      title: "Employee Tracker",
      desc: "this is an application",
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