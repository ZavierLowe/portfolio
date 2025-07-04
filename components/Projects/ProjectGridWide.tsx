import React from "react";
import { Container } from "../container.styled";
import {
	CardGridWide,
	CardGridWideDesc,
	CardGridWideHeading,
	CardGridWideHeadingWrapper,
	CardGridWideMeta,
	ProjectDivider,
	ProjectIcon,
	ProjectLinkWrapper,
} from "./ProjectGridWide.styled";
import Image from "next/image";
import Link from "next/link";
import FullcourtImgTop from "../../assets/images/Fullcourt-Project-Img2.png";
import { Button } from "../Button.styles";


const ProjectGridWide = () => {
	return (
		<div>
			<Container>
				<CardGridWide>
					{/* Project 1 */}
					<ProjectLinkWrapper href="/fullcourt" margin="140px 0px">
						<CardGridWideMeta>
							{" "}
							Product Design & Mobile Development
						</CardGridWideMeta>
						<CardGridWideHeadingWrapper>
							<CardGridWideHeading>Fullcourt</CardGridWideHeading>
							<CardGridWideDesc>
								{" "}
								A basketball app for the pickup community
							</CardGridWideDesc>
							{/* <ProjectIcon>
								<svg
									// className="project-img"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6 6L18 18M18 18V10M18 18H10"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</ProjectIcon> */}

							<Button>+</Button>
						</CardGridWideHeadingWrapper>
						<Image
							className="img-hover"
							src={FullcourtImgTop}
							alt="Fullcourt Image"
							width={1300}
						/>
					</ProjectLinkWrapper>
				</CardGridWide>

			
			</Container>
		</div>
	);
};

export default ProjectGridWide;
