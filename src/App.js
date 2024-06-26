import { Routes, Route } from 'react-router-dom';
import { Error } from './components';
import { Authorization, Main} from './pages';
//import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { ERROR } from './constants';
import { Container } from '@mui/material';



export const App = () => {



	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if(!currentUserDataJSON) {
			return;
		}



		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser(currentUserData));
	}, [dispatch]);


	return (
		<Container>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization/>} />
					<Route path="*" element={<Error>{ERROR.PAGE_NOT_EXIST}</Error>} />
				</Routes>
				</Container>
	);
};












