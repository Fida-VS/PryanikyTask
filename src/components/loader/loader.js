import styled from 'styled-components';

const LoaderContainer = ({className}) => (
	<div className={className}>

	</div>
);

export const Loader = styled(LoaderContainer)`
position: fixed;
top: 30%;
left: 48%;
transform: translate(-50%, -50%);
width: 25px;
height: 25px;
border: 5px solid grey;
border-radius: 50%;
border-left-color: transparent;
animation: loader 1s infinite;


@keyframes loader {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
`;
