import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Error, MyTable } from '../../components';
import { selectFormIsOpen, selectPosts, selectUserToken } from '../../selectors';
import { Header, PostForm } from '../../components';
import { Navigate } from 'react-router';
import { Container, Typography } from '@mui/material';
import { Loader } from '../../components';
import { loadPostsAsync } from '../../actions';


export const Main = () => {

	const [serverError, setServerError] = useState(null);

	const isOpen = useSelector(selectFormIsOpen);

	const token = useSelector(selectUserToken);

	const posts = useSelector(selectPosts);



	const dispatch = useDispatch();

	useEffect(() => {
			dispatch(loadPostsAsync(token))
			.catch((error) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}
			});
		}, [dispatch]);




	return token ? (

		<Container maxWidth='md'>

			<Header />
			{serverError && <Error>{serverError}</Error>}
			<Container>
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
			</Container>
			{isOpen && <PostForm />}
		</Container>
	): (
		 <Navigate to="/login" />
	)
};

