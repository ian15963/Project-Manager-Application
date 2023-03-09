import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import styles from './Project.module.css'
import ProjectForm from '../project/ProjectForm';
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";
import Message from "../layout/Message";
import Api from "../axios/config"

function Project(){

    const {id} = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [showServiceForm, setShowServiceForm] = useState(false)



    useEffect(() => {

        Api.get(`projects/${id}`)
        .then((response) => {
            setProject(response.data)
            setServices(response.data.service)
        })

        
    }, [id, project.service])

    function toogleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toogleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function createService(service){

        let custoTotal = parseFloat(project.cost) + parseFloat(service.cost)

        if(custoTotal > parseFloat(project.budget)){
            setMessage('Custo do serviço não pode ser maior que o orçamento, tente novamente.')
            setType('error')
            project.service.pop()
            return false
        }

        project.cost = custoTotal

        Api.post("/services", service)
        .then(() => {
            setShowServiceForm(true)
            setMessage("Serviço criado com sucesso")
            setType("sucess")
        }).catch(err => console.log(err))
        

    } 


     function updateProject(project){
        // Budget Validation
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser inferior ao custo')
            setType('error')
            return false;
        }

         Api.put(`/projects/${id}`, project)
        .then((response) =>{
            toogleProjectForm()
            setProject(response.data)
            setMessage("Projeto atualizado com sucesso")
            setType("sucess")
        }).catch(err => console.log(err))


    }

    
    async function removeService(service, cost){

        project.cost = parseFloat(project.cost) - parseFloat(cost)

        fetch("http://localhost:8080/services", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(() => {
            project.service.pop()
            update()
        })
        .catch(err => console.log(err))

        const update = async () =>{
        
        await Api.put(`/projects/${id}`, project)
        .then((response) => {
            console.log(response.data)
            setMessage("Serviço deletado com sucesso")
            setType("error")
        })
        .catch(err => console.log(err))
    }

    }

    return(
        <>
           {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                {message && <Message msg={message} type={type}/>}
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button onClick={toogleProjectForm} className={styles.button}>{showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>        
                
                {showProjectForm ? 
                <div className={styles.info}>
                    <p>
                        <span>Categoria:</span> {project.category.name}
                    </p>
                    <p>
                        <span>Orçamento:</span> {project.budget}
                    </p>
                    <p>
                        <span>Total Utilizado:</span> {project.cost}
                    </p>
                </div>
                : 
                <div className={styles.info}>
                    <div><ProjectForm handleSubmit={updateProject} btn_project={"Editar Projeto"} projectData={project}/></div>
                </div>}
                </div>
                <div className={styles.service_container}>
                    <h2>Adicione um serviço</h2>
                    <button onClick={toogleServiceForm} className={styles.button}>
                        {showServiceForm ? 'Adicionar serviço' : 'Fechar' }
                    </button>
                    <div className={styles.info}>
                        {!showServiceForm && <ServiceForm
                        btntext="Adicionar Serviço"
                        handleOnSubmit={createService}
                        projectData={project}
                        setProjectData={setProject}/>}
                    </div>
                </div>
                <h2>Serviços</h2>
                <Container customClass="start_service">
                    {services.length > 0 &&
                        services.map((service) => (
                            <ServiceCard
                            key={service.description}
                            service={service}
                            handleRemove={removeService}
                            />
                        ))
                    }
                </Container>
            </Container>
            </div>
            
            ): <Loading/>}
        </>
    )


}

export default Project;