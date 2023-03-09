import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'
import Api from "../axios/config";

function NewProject(){

    let navigate = useNavigate();
    
    function createProject(project){

        Api.post("/projects", project)
        .then(() => {
            navigate("/projects", {state: {message: 'Projeto criado com sucesso'}})
        })

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