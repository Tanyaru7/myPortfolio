import React from 'react'
import ProjectCard from './ProjectCard'
import projects from './ProjectData'
import style from './ProjectContainer.module.css'

function ProjectContainer() {
	return (
		<div className={style.container}>
			{projects.map((project, id) => (
				<div key={id}>
					<ProjectCard
						image={project.image}
						borderColor={project.borderColor}
						id={id}
						link={project.link}
						buttonColor={project.buttonColor}
						title={project.title}
					/>
				</div>
			))}
		</div>
	)
}

export default ProjectContainer
