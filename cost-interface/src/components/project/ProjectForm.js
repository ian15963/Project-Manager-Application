import React, { useEffect, useState } from 'react'
import Input from '../form/Input'
import Selection from '../form/Selection'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btn_project, handleSubmit, projectData}){

    const [category, setCategory] = useState([])
    const [project, setProject] = useState( projectData || {})

    useEffect(() =>{
        fetch("http://localhost:8080/category", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json())
        .then((data) => setCategory(data))
        .catch((error) => console.log(error))
    }, [])
    
    
    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function selectionChange(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input name="name" type="text" placeholder="Insira o nome do projeto," text="Nome do projeto" handleOnChange={handleChange}
            value={project.name ? project.name : ''}/>
            <Input name="budget" type="number" text="Digite o orçamento" placeholder="Digite o valor do orçamento" handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}/>
            <Selection name="categoria" text="Selecione a categoria" options={category} handleOnChange={selectionChange}
            value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btn_project} />
        </form>
    )
}

export default ProjectForm