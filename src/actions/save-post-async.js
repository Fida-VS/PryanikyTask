import { request } from "../utils/request";
import { setPostData } from "./set-post-data";


export const savePostAsync = (token, newPostData) => (dispatch) => {

	const saveRequest = request('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/create', token, 'POST', newPostData);
	return saveRequest.then((addedPost) => {
		dispatch(setPostData(addedPost.data));

		return addedPost.data;
	})
};

