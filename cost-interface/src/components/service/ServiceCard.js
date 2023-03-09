import React from "react";
import styles from "../project/ProjectCard.module.css"

function ProjectCard({service, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(service, service.cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{service.name}</h4>
            <p>
                <span>Custo Total:</span> R${service.cost}
            </p>
            <p>{service.description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>Excluir</button>

            </div>
        </div>
    )
    

}


export default ProjectCard