
import styled from 'styled-components';
import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';
import { openForm } from '../../actions/open-form';

const HeaderContainer = ({ className }) => {

	const dispatch = useDispatch();



	const onPostAdd = () => {
		dispatch(openForm());
	};

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};


return (
	<header className={className}>
		<Button type="button" onClick={onPostAdd}>Add</Button>
		<Button type="button" onClick={onLogout}>Logout</Button>
	</header>
	);
};

export const Header = styled(HeaderContainer)`
width: 70%;
margin: 0 auto;

`;
