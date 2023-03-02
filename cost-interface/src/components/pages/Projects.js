import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../project/ProjectCard';
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import Loading from '../layout/Loading';


function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState('')

    useEffect(() => {

        setTimeout(() =>{
            fetch("http://localhost:8080/projects", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.json())
            .then( (data) => {setProjects(data)
            setRemoveLoading(true)})
            .catch(err => console.log(err))
        }, 3000)     
    }, [])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    function deleteProject(id) {

        setProjectMessage('')

        fetch(`http://localhost:8080/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage("Projeto deletado com sucesso.")
        })
        .catch((err) => console.log(err))
    }

    return (
    <div className={styles.project_container}>
        <div className={styles.project_container_top}>
            <h1>Meus Projetos</h1>
            <LinkButton to="/newproject" text="Criar projeto"/>
        </div>
        {message && <Message msg={message} type="success"/>}
        {projectMessage && <Message msg={projectMessage} type="success"/>}
        <Container customClass="start">
               {projects.length > 0 &&
                projects.map((project) => (
                    <ProjectCard name={project.name} id={project.id} budget={project.budget}
                    key={project.id} category={project.category.name} handleRemove={deleteProject}/>
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length ===0 &&(
                    <p>Não há projetos cadastrados</p>
                )}
        </Container>
    </div>
    )
}

export default Projects;