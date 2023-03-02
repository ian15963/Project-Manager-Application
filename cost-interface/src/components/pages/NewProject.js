import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'

function NewProject(){

    let navigate = useNavigate();
    
    function createProject(project){
        fetch("http://localhost:8080/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then(() => navigate("/projects", {message: 'Projeto criado com sucesso'}))
          .catch((err) => console.log(err))
}

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seus projetos e adicione os serviços</p>
            <ProjectForm btn_project="Criar Projeto" handleSubmit={createProject}/>
        </div>
    )
}

export default NewProject;