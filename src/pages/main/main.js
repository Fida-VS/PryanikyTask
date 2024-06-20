import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Error, MyTable } from '../../components';
import { request } from '../../utils/request';
import { selectFormIsOpen, selectUserToken } from '../../selectors';
import { Header, PostForm } from '../../components';
import { Navigate } from 'react-router';
import { Container, Typography } from '@mui/material';
import { Loader } from '../../components';
//import { selectUserToken } from '../../selectors/select-user-token';

export const Main = () => {
	const [posts, setPosts] = useState([]);

	const [serverError, setServerError] = useState(null);

	const isOpen = useSelector(selectFormIsOpen);

	const token = useSelector(selectUserToken);




	useEffect(() => {
			request('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get', token)
				.then(({ data: posts }) => {
					setPosts(posts);
				})
				.catch((error) => {
					if (error) {
						setServerError(`Ошибка запроса: ${error}`);
						return;
					}
				});
		}, [posts, token]);




	return token ? (


		<Container maxWidth='md'>
			<Header />

			<div>

			{serverError && <Error>{serverError}</Error>}
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(
							({
								id,
								companySigDate,
								companySignatureName,
								documentName,
								documentStatus,
								documentType,
								employeeNumber,
								employeeSigDate,
								employeeSignatureName,
							}) => (
								<MyTable
									key={id}
									id={id}
									companySigDate={companySigDate}
									companySignatureName={companySignatureName}
									documentName={documentName}
									documentStatus={documentStatus}
									documentType={documentType}
									employeeNumber={employeeNumber}
									employeeSigDate={employeeSigDate}
									employeeSignatureName={employeeSignatureName}
								/>
							),
						)}
					</div>
				) : (
				<Container sx={{display: 'flex', alignItems: 'center',
					justifyContent: 'center'}}><Loader/><Typography sx={{marginTop: '7rem', justifyContent: 'space-between'}} variant="h5">Статьи не найдены</Typography></Container>
				)}
			</div>
			{isOpen && <PostForm />}
		</Container>
	): (
		 <Navigate to="/login" />
	)
};

