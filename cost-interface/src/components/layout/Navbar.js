import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css"
import logo from "../../img/costs_logo.png"
import {FaTimes, FaBars} from 'react-icons/fa'

function Navbar(){

    const[mobile, setMobile] = useState(false)

    function MobileToggle(){
        setMobile(!mobile)
    }

    return(
            <nav className={styles.navbar}>
                <Container>
                    <Link to='/'>
                        <img src={logo} alt="Costs"></img>
                    </Link>
                    <ul className={mobile ? `${styles.list_mobile}` : `${styles.list}`} onClick={() => setMobile(false)}>
                        <li className={styles.item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/company'>Empresa</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/contact'>Contato</Link>
                        </li>
                    </ul>
                    <button className={styles.mobile} onClick={MobileToggle}>
                            {mobile ? <FaTimes/> : <FaBars/>}
                    </button>
                </Container> 
            </nav>

    )
}

export default Navbar;