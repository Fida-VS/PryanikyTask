import { ACTION_TYPE } from "./action-type";

export const openForm = (formParams) => ({
type: ACTION_TYPE.OPEN_FORM,
payload: formParams,
});
