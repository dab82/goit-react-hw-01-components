import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const Table = styled.table`
	width: 60%;
	margin: 0 auto;
	text-align: center;
	border: 1px solid gray;
	border-radius: 5px;
	background: white;
	& thead th {
		padding: ${(props) => props.theme.spacing(3)};
		font-family: ${(props) => props.theme.fonts.secondary};
		${font({ fs: 18, fw: 600, lh: 24 })};
		color: ${(props) => props.theme.colors.white};
		background: ${(props) => props.theme.colors.tableHead};
		text-transform: uppercase;
	}
	& tbody td {
		padding: ${(props) => props.theme.spacing(3)};
		${font({ fs: 14, fw: 400, lh: 18 })};
		color: ${(props) => props.theme.colors.secondaryText};
	}

	& tbody tr:nth-child(even) {
		background: ${(props) => props.theme.colors.greyBg};
	}

	& thead th,
	& tbody td {
		width: calc(100% / 3);
	}
`;
