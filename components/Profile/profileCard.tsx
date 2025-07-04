import React from 'react'

import styles from "./profilecard.module.css"
import { Container } from '../container.styled'




const profileCard = () => {
  return (
		<Container>
			<div className={styles.wrapper}>
				<h1 className={styles.headingName}>Hey I'm Zavier</h1>
				<p className={styles.headingDesc}>
					{" "}
					Software Engineer turned Entrepreneur. I love building things and
					helping people. Very active on Twitter.
				</p>
			</div>
		</Container>
	);
}

export default profileCard
