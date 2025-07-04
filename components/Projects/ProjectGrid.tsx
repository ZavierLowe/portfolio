import React from "react";
import { Container } from "../container.styled";
import { CardGrid } from "./cardGrid.styled";
import {
	Card,
	CardDescription,
	CardHeading,
	CardMeta,
	CardText,
	CardWrapper,
} from "../Card.styled";
import DelphicPreview from "../assets/images/DelphicPreview.png";
import MacbookDelphic from "../assets/images/Macbook Pro Delphic.png";
import DelphicPreviewNew from "../assets/images/DelphicPreviewNew.png";
import DxcPreview from "../assets/images/DXC-Preview.png";
import FullcourtPreview from "../assets/images/Fullcourt Preview.png";
import BostonPrview from "../assets/images/Boston Preview.png";
import DXCMacbook from "../assets/images/DXC-Macbook.png";
import DelphicMac from "../assets/images/Delphic-Mac.png";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = () => {
	return (
		<div>
			<Container>
				<CardGrid>
					{/*  Card 1 */}
					<div className="card-wrapper">
						<Link href="/fullcourt">
							<Image
								className="img-hover"
								width={600}
								src={FullcourtPreview}
								alt="Fullcourt Image"
							/>
						</Link>
						<CardText>
							<CardMeta>Mobile App</CardMeta>
							<CardHeading>Fullcourt</CardHeading>
							<CardDescription>
								Helping a basketball app protect thier user data through using
								security tools and security audits.
							</CardDescription>
						</CardText>
					</div>

					{/*  Card 2 */}
					<CardWrapper>
						<a
							className="card-position"
							href="https://delphic-beauty.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								width={600}
								src={DelphicMac}
								alt="Delphic Preview"
							/>
						</a>
						<CardText>
							<CardMeta>Front End Devlopment</CardMeta>
							<CardHeading>Delphic Beauty</CardHeading>
							<CardDescription>
								Homepage for an e-Commerce skincare brand
							</CardDescription>
						</CardText>
					</CardWrapper>
					{/*  Card 3 */}

					<CardWrapper>
						<a
							href="https://thedxcproductions.com/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								width={500}
								src={DXCMacbook}
								alt="DXC Preview"
							/>
						</a>

						<CardText>
							<CardMeta>Front End Development</CardMeta>
							<CardHeading>DXC Productions</CardHeading>
							<CardDescription>
								A portfolio for helping a Filmmaker showcasing her work
							</CardDescription>
						</CardText>
					</CardWrapper>

					{/* Card 4*/}
					<CardWrapper>
						<a
							href="https://delphic-beauty.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<Image
								className="img-hover"
								src="https://www.cnet.com/a/img/resize/c8e177fc03893ab03730c078ecf53a457f249009/hub/2018/09/25/15f64cde-e248-4093-8528-44372905fdd6/2019-mercedes-amg-gt-63-s-4-door-coupe-29.jpg?auto=webp&fit=crop&height=675&width=1200"
								width={600}
								height={400}
								alt="Boston Preview"
							/>
						</a>
						<CardText>
							<CardMeta>Offensive Security</CardMeta>
							<CardHeading>Password Cracking</CardHeading>
							<CardDescription>
								Using Kali Linux to learn about password cracking fro a set of
								hashes using hashcat
							</CardDescription>
						</CardText>
					</CardWrapper>
				</CardGrid>
			</Container>
		</div>
	);
};

export default ProjectGrid;
