import React from 'react';
import styled from "styled-components";

export const CardGrid = styled.div`
	margin-top: 140px;
	margin-bottom: 140px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	// grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 80px;
	grid-row-gap: 90px;
	justify-content: center;
	align-items: center;
	@media (max-width: 428px) {
		
		grid-template-columns: 1fr;
	}

	@media (min-width:768px){
		grid-template-columns:repeat(2,1fr) ;
		grid-column-gap: 40px;
	}
	
	@media (min-width:1024px){
		grid-template-columns:repeat(2,1fr) ;
		grid-column-gap: 40px;
	}
`;
