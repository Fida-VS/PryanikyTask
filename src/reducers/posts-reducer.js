import { ACTION_TYPE } from '../actions';
const initialPostsState = {
	posts: [],
};

export const postsReducer = (state = initialPostsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.GET_POSTS_DATA:
			return {
				...state,
				posts: action.payload,
			}
			case ACTION_TYPE.DELETE_POST: {
				return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload.id)
			}
			}
			case ACTION_TYPE.SET_POST_DATA: {

				//const newPost = state.posts.push(action.payload);

				return {
					...state,
					...action.payload
				}
			}
			case ACTION_TYPE.UPDATE_POST_DATA: {
				const post = state.posts.find((post) => post.id === action.id);
				return {
					...state,
					...post,
					...action.payload
				}
			}
		default:
			return state;
	}
};
