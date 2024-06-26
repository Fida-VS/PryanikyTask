import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Error} from '../../components';
import { useResetForm } from '../../hooks';
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { setUser } from '../../actions';
import { request } from '../../utils/request';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { selectUserToken } from '../../selectors';


const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

export const Authorization = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	useResetForm(reset);

	const token = useSelector(selectUserToken);

	const onSubmit = ({ login, password }) => {

		request(
			'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login',
			token,
			'POST',
			{ login, password },
		)
			.then((user) => {
				console.log(user)
				dispatch(setUser(user.data));
				sessionStorage.setItem('userData', JSON.stringify(user.data));
			})
			.then((user) => {
				if (!user) {
					setServerError(`Ошибка запроса: проверьте правильность логина и пароля`);
					return;
				}
			});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;


	if (token) {
		return <Navigate to="/" />;
	} else {
		return (
			<Container sx={{
				width: '17rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: '7rem'
			  }}>
				<Typography sx={{
					marginBottom: '2rem'
				}} variant='h4'>Авторизация</Typography>
				<Box
				component='form'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					'& .MuiTextField-root': { width: '25ch' },
				  }}
				  noValidate
				  autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}>
					<TextField
					sx={{
						marginBottom: '2rem'
					}}

						label="Login"
						type="text"
						placeholder="Логин..."
						{...register('login', {
							onChange: () => setServerError(null),
						})}
					/>
					<TextField
					sx={{
						marginBottom: '2rem'
					}}
						id="outlined-password-input"
						label="Password"
						type="password"
						placeholder="Пароль..."
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
					<Button type="submit" disabled={!!formError}>
						Авторизоваться
					</Button>
					{errorMessage && <Error>{errorMessage}</Error>}
				</Box>
			</Container>
		);
	}
};
