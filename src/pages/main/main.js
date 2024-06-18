import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Table } from '../../components/table/table';
import { request } from '../../utils/request';
import { selectFormIsOpen, selectUserToken } from '../../selectors';
import { PostForm } from '../../components';
//import { useAuth } from '../../hooks';
import { Navigate } from 'react-router';
//import { selectUserToken } from '../../selectors/select-user-token';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);

	const isOpen = useSelector(selectFormIsOpen);

	const token = useSelector(selectUserToken);




	useEffect(() => {
			request('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get', token)
				.then(({ data: posts }) => {
					setPosts(posts);

				})
				.catch((error) => {
					if (error) {
						console.log(`Ошибка запроса: ${error}`);
						return;
					}
				});
		}, [posts, token]);




	return token ? (
		<div className={className}>
			<div>Главная</div>
			<div>
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
								<Table
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
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>
			{isOpen && <PostForm />}
		</div>
	): (
		 <Navigate to="/login" />
	)
};

export const Main = styled(MainContainer)`
width: 70%;
margin: 0 auto;
`;
