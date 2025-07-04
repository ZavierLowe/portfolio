import React from "react";
import { Container } from "../components/container.styled";
import Navi from "../components/Navigation/Navi";
import FooterMain from "../components/FooterMain";
import {
	AboutHeading,
	AboutSection,
	AboutText,
} from "../components/AboutStyle.styled";
import MobileNav from "../components/MobileNav";
import Navigation  from "../components/Navigation/Navigation"

const about = () => {
	return (
		<div>
			<Navigation />
			
			<MobileNav />
			<Container>
				<AboutSection>
					<AboutHeading>My Story</AboutHeading>

					<AboutText>
						After graduating college with a B.S in Psychology. I tried many
						career paths to find a career path. I went through a plenty full of
						ups and downs trying to find out what career path would be the best
						for me with my background and skills. I first attempted UX design
						where I realized early on that this career path would not be the
						best fit for me but I tried it, and ultimatley relaized that it
						wasnot for me. After I tried software engineering as a career path
						and learned alot about programming and buliding web applications. I
						attended a three month boocamp to learn full stack web development.
						Saying that it was extremely hard is an understatment! I went
						through the whole interview gaulent that was software engineering
						and began to do some work for a startup. After contributing for some
						days I realized in that moment that I could not see myself
						programming day in and day out as a career path. While taking a step
						back and doing some research, I stumbled onto a cyber sercurtiy
						youtube channel talking about security and tech news. I then
						proceeded to binge watch the videos and research more into a career
						in cyber security. Something clicked where now I am excited to learn
						more about cyber security and the constant challnges organiations
						face protecting their assets. I believe the psychological aspects of
						cybersecurity and my desire to understand threact actors and how
						they compromise organizations lead me to currently wanting to be a
						cyber security professional. I eventuall want to get into a
						leadership position as a CISO and help individuals in underserved
						communities gain the knowledge to start and thrive in thier
						Cybersecurity career.
					</AboutText>
				</AboutSection>
			</Container>

			<FooterMain />
		</div>
	);
};

export default about;
