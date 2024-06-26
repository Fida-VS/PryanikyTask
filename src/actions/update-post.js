import { ACTION_TYPE } from "./action-type";

export const updatePost = (postsData) => ({
	type: ACTION_TYPE.UPDATE_POST_DATA,
	payload: postsData,
});
