import { request } from "../utils/request";
import { updatePost } from "./update-post";


export const saveEditedPostAsync = (id, token, newPostData) => (dispatch) => {

	const saveRequest = request(`https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/${id}`, token, 'POST', newPostData);
	return saveRequest.then((updatedPost) => {

		dispatch(updatePost(updatedPost.data));

		return updatedPost.data;
	})
};
