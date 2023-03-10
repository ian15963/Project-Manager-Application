import React from "react";
import styles from './ProjectCard.module.css'
import { Link } from "react-router-dom";

function ProjectCard({name, id, category, budget, handleRemove}){

    const deleteProject = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>Editar</Link>
                <button onClick={deleteProject}>Remover</button>
            </div>
        </div>
    )

}

export default ProjectCard;