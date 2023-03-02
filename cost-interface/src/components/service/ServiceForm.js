import React, {useState} from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleOnSubmit, btntext, projectData}){
    
    const [services, setServices] = useState([])
    
    function submit(e){
        e.preventDefault()
        console.log(services)
        projectData.service.push(services)
        handleOnSubmit(services)

       fetch(`http://localhost:8080/projects/${projectData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        }).then(resp => resp.json())
        .then((data) => {
            console.log(data)
            console.log(projectData)
        })
        .catch(err => console.log(err))
    }

    function handleOnChange(e){
        setServices({...services, [e.target.name]: e.target.value})
    }
    
    return(
     <form className={styles.form} onSubmit={submit}>
        <Input
        text="Nome do serviço"
        type="text"
        name="name"
        placeholder="Digite o nome do serviço"
        handleOnChange={handleOnChange}
        />
        <Input
        text="Custo do serviço"
        type="number"
        name="cost"
        placeholder="Digite o custo do serviço"
        handleOnChange={handleOnChange}
        />
        <Input
        text="Descrição do serviço"
        type="text"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleOnChange}
        />
        <SubmitButton text={btntext}/>
     </form>

    )

}

export default ServiceForm