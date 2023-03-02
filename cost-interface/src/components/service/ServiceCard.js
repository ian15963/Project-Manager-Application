import React from "react";
import styles from "../project/ProjectCard.module.css"

function ProjectCard({service, name, cost, description, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(service, cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo Total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>Excluir</button>

            </div>
        </div>
    )
    

}


export default ProjectCard