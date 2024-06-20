import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';
import { openForm } from '../../actions/open-form';
import { Toolbar } from '@mui/material';


export const Header = () => {

	const dispatch = useDispatch();

	const onPostAdd = () => {
		dispatch(openForm());
	};

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};


return (
	<AppBar position="static">
		<Toolbar>
		<Button sx={{ flexGrow: 1, marginLeft: '4rem' }} size="large" color="inherit" type="button" onClick={onPostAdd}>
			Add new  record </Button>
		<Button size="small" color="inherit" type="button" onClick={onLogout}>Logout</Button>
		</Toolbar>
	</AppBar>
	);
};


