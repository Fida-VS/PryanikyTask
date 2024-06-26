import { ACTION_TYPE } from "./action-type";

export const getPostsData = (postsData) => ({
	type: ACTION_TYPE.GET_POSTS_DATA,
	payload: postsData,
});
