import { Routes, Route } from 'react-router-dom';
import { Error, Header } from './components';
import { Authorization, Main} from './pages';
//import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { ERROR } from './constants';



export const App = () => {

	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if(!currentUserDataJSON) {
			return;
		}



		const currentUserData = JSON.parse(currentUserDataJSON);

		const token = currentUserData.token;
		console.log(token)

		dispatch(setUser(currentUserData));
	}, [dispatch]);


	return (
		<>
		    <Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization/>} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST}/>} />
				</Routes>
				</>
	);
};












