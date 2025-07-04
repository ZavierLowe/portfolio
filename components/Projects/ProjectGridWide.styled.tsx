import styled from "styled-components";


interface LinkProps{
	margin:string;
}


export const CardGridWide = styled.div`
	margin-top: 140px;
	
	@media (max-width: 428px) {
		width: 100%;
		
	}
`;

export const CardGridWideHeadingWrapper = styled.div`
	font-family: "ClashDisplay-Variable", sans-serif;
	display: flex;
	justify-content: space-between;
	align-items: end;
	margin: 12px 0px;
	opacity: 1;
	&:hover {
		opacity: 1;
	}

	@media (max-width: 428px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const CardGridWideHeading = styled.h1`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 48px;
	font-weight: 600;
	letter-spacing: 0.2rem;
	@media (max-width: 425px) {
		font-size: 1.6em;
	}
`;
export const CardGridWideDesc = styled.p`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 20px;
	font-weight: 400;
	margin: 12px 0px;
	letter-spacing: 0.1rem;
	@media (max-width: 428px) {
		font-size: 1em;
	}
`;
export const CardGridWideMeta = styled.span`
	font-family: "ClashDisplay-Variable", sans-serif;
	font-size: 14px;
	color: #2d2c2c;
	font-weight: 400;
	letter-spacing: 1.2px;
`;

export const ProjectDivider = styled.div`
	height: 1px;
	background-color: #090909;
	margin: 20px 0px;
`;

export const ProjectIcon = styled.div`
	width: 42px;
	height: 42px;
	opacity: 0.25;
	&:hover {
		opacity: 1;

		transition: all 0.5s ease-out;
	}
	@media (max-width: 428px) {
		width: 20px;
		height: 20px;
	}
`;

export const ProjectLinkWrapper = styled.a<LinkProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: #151414;
	filter: blur(0px);
	will-change: filter, opacity;
	opacity: 1;
	margin: ${(props) => props.margin};
	&:hover {
		opacity: 1;
		transition: all 0.3s ease-in-out;
		color: #f15c22;
		will-change: opacity;
	}

	@media (max-width: 425px) {
		width: 100%;
		
	}
`;
