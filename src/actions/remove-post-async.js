import { request } from "../utils/request";
import { deletePost } from "./delete-post";


export const removePostAsync = (id, token) => (dispatch) =>
	{request(`https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, token, 'DELETE');
		dispatch(deletePost(id));
	};

