import { request } from "../utils/request";

export const removePostAsync = (id, token) => () =>
	request(`https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, token, 'DELETE');

