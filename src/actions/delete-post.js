import { ACTION_TYPE } from "./action-type";

export const deletePost = (postData) => ({
	type: ACTION_TYPE.DELETE_POST,
	payload: postData,
});
