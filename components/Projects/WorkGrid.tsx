import React from 'react'
import Fullcourt2 from '../../assets/images/Fullcourt-Project-Img2.png'
import Image from 'next/image'
import { Container } from '../container.styled';
import styles from "./workgrid.module.css";
import Delphic from "../../assets/images/Delphic-Mac.png"

const WorkGrid = () => {
  return (
		<>
        <Container>

				<div className={styles.projectGrid}>
                <div>

                <h1>Project Name</h1>
                <p>Project Title</p>
                </div>
                <div className={styles.card}>

                <Image className={styles.cardImage} src={Delphic} width={700}/>
                <h1>Project Name</h1>
                <p>Project Title</p>
                </div>
             
                
                </div>
		
        </Container>
			
		</>
	);
}

export default WorkGrid
