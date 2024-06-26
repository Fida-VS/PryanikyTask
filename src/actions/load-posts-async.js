import { request } from '../utils/request';
import { getPostsData } from './get-posts-data';

export const loadPostsAsync = (token) => (dispatch) =>
	request(
		`https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get`,
		token)
		.then(({ data: posts }) => {
		console.log(posts);
		dispatch(getPostsData(posts));

		return posts;
	});



