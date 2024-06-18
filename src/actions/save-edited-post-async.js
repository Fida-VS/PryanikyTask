import { request } from "../utils/request";
import { setPostData } from "./set-post-data";


export const saveEditedPostAsync = (id, token, newPostData) => (dispatch) => {

	const saveRequest = request(`https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/${id}`, token, 'POST', newPostData);
	return saveRequest.then((updatedPost) => {
		console.log(updatedPost)
		dispatch(setPostData(updatedPost.data));

		return updatedPost.data;
	})
};
