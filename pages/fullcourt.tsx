import React from "react";
import { Container } from "../components/container.styled";
import FooterMain from "../components/FooterMain";
import MobileNav from "../components/MobileNav";
import Navi from "../components/Navigation/Navi";
import {
	ProjectFlex,
	ProjectGridImg,
	ProjectGridImgDesc,
	ProjectHeadingDesc,
	ProjectHeadingDiv,
	ProjectHeadingSection,
	ProjectHeadingText,
	ProjectImgWrapper,
	ProjectTextDesc,
	ProjectTextHeading,
	ProjectTextSection,
	ProjectTextWrapper,
} from "../components/ProjectPage.styled";
import BostonPersona from "../assets/images/Boston-Persona-p-800.png";
import FullcourtImgTop from "../assets/images/Fullcourt-Project-Img2.png";
import Image from "next/image";
import { HighlightStyled } from "../components/highlight.styled";
import DesignSystem from "../assets/images/DesignSystem-v1.png";
import FullcourtPreview from "../assets/images/Fullcourt Preview.png";
import FullcourtScreen from "../assets/images/Fullcourt-Screen.png";
import FullcourtScreenSM from "../assets/images/Fullcourt-ScreenSM.png";
import FullcourtScreenDetails from "../assets/images/Fullcourt-ScreenSM-GroupDetails.png";
import Navigation from "../components/Navigation/Navigation";

const fullcourt = () => {
	return (
		<div>
			<Navigation/>
			
			<MobileNav />

			<ProjectHeadingSection backgroundColor="none">
				<Container>
					<ProjectHeadingDiv>
						{/* <ProjectHeadingDesc>
							Mobile Devlopment & UX Design
						</ProjectHeadingDesc> */}
						<ProjectHeadingText>
							Fullcourt
							<br />
						</ProjectHeadingText>
						<ProjectHeadingDesc>
							A mobile app helping{" "}
							<HighlightStyled color="#F15C22">
								basketball heads
							</HighlightStyled>{" "}
							find pickup games to play!{" "}
						</ProjectHeadingDesc>
					</ProjectHeadingDiv>
				</Container>
			</ProjectHeadingSection>
			<Image
				priority={true}
				src={FullcourtImgTop}
				layout="intrinsic"
				alt="Fullcourt Image"
			/>
			<ProjectTextSection backgroundColor="" padding="0px">
				<ProjectTextWrapper>
					<ProjectTextHeading>Summary</ProjectTextHeading>
					<ProjectTextDesc>
						Fullcourt is a mobile app that aims to help the pick up basketball
						community find and share games with ease around the world. As a
						young startup with 40k users and counting we are constantly
						launching new features that help our users. I &apos;ve helped on
						adding new feautes and revamping old ones to provide the best
						experience to our users.
					</ProjectTextDesc>
				</ProjectTextWrapper>
			</ProjectTextSection>

			<ProjectTextSection backgroundColor="" padding="0px">
				<ProjectTextWrapper>
					<ProjectTextHeading>Editing Existing Groups</ProjectTextHeading>
					<ProjectTextDesc>
						For the current iteration of groups users coudl join groups
						backgorund information about groups and how they potentially work
						image at the bottom
					</ProjectTextDesc>
				</ProjectTextWrapper>
				<ProjectGridImg>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Select Image Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
				</ProjectGridImg>
			</ProjectTextSection>

			<ProjectTextSection backgroundColor="" padding="140px 0px">
				<ProjectTextWrapper>
					<ProjectTextHeading>
						Decisions on button placement{" "}
					</ProjectTextHeading>
					<ProjectTextDesc>
						We thought about placing the button to edit the group the the
						navigation at the top but we came to the conclusion that the button
						should follow the exisiting design pattern when users join group.
						One Screen with how it looked before screen when you joined the
						group and another when you are the leader
					</ProjectTextDesc>
				</ProjectTextWrapper>
				<ProjectGridImg>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenDetails}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Select Image Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenDetails}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
				</ProjectGridImg>
			</ProjectTextSection>
			<ProjectTextWrapper>
				<ProjectTextHeading>
					Error States & Character limitation{" "}
				</ProjectTextHeading>
				<ProjectTextDesc>
					In speaking with developers we thought that it would be a good idea to
					allowing users to edit groups we thought it would be helpful to give
					an error state if the group name is already available. This helps the
					development not worry about having multiple groups with the same name
					and causing confusing in the database. We also limited the amout of
					characters for the groups description to not override the system.
				</ProjectTextDesc>
				<ProjectImgWrapper width="auto" margin="">
					<Image src={FullcourtScreenSM} alt="Fullcourt Image" />
				</ProjectImgWrapper>
			</ProjectTextWrapper>

			<ProjectTextSection padding="120px" backgroundColor="#F15C22">
				<ProjectTextWrapper>
					<ProjectTextHeading>
						Streamlining the Game Creaton Process
					</ProjectTextHeading>
					<ProjectTextDesc>
						Before creating a game was a multi-screen process that took too long
						for them to create games. Thinking through our options. I thought it
						was best for us to consolidate the options to one screen and have
						menus that allow you to adjust the game settings such as date,time,
						and if the game is a recurring game.
					</ProjectTextDesc>
				</ProjectTextWrapper>
				<ProjectGridImg>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Select Image Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
					<ProjectImgWrapper width="auto" margin="">
						<Image
							layout="intrinsic"
							src={FullcourtScreenSM}
							alt="Fullcourt Image"
						/>
						<ProjectGridImgDesc>Edit Screen</ProjectGridImgDesc>
					</ProjectImgWrapper>
				</ProjectGridImg>
			</ProjectTextSection>
			<ProjectTextWrapper>
				<ProjectTextHeading color="#F15C22">
					Leveling Up Our Color System
				</ProjectTextHeading>
				<ProjectTextDesc>
					I expanded our color sysetm to help developers have a consistent
					coloring convention system with documentation of when to use those
					colors.
				</ProjectTextDesc>
			</ProjectTextWrapper>
			<ProjectFlex>
				<ProjectImgWrapper width="auto" margin="">
					<Image
						className="img-project"
						layout="intrinsic"
						src={DesignSystem}
						alt="Design System"
					/>
				</ProjectImgWrapper>
			</ProjectFlex>
			<ProjectTextWrapper>
				<ProjectTextHeading>The Learning Process</ProjectTextHeading>
				<ProjectTextDesc>
					As a designer and devloper who bridges the gap between both fields I
					believe that working with a designer and a team of developers has
					helped me understand the best way to communicate to each parties and
					teach them about how the other side works and how to better relate to
					them.
				</ProjectTextDesc>
			</ProjectTextWrapper>

			<FooterMain />
		</div>
	);
};

export default fullcourt;
