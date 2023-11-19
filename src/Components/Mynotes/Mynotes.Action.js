import {getusersAllNotes} from "../../api/notes.api";
import {
  fetchuserTicketLoading,
  fetchuserticketlistSuccess,
  fetchuserTicketFail,
  } from './Mynotes.Slice';
export const fetchusersAllNotes = (formData) => async (dispatch) => {
    dispatch(fetchuserTicketLoading());
    try {
      const result = await getusersAllNotes(formData);
    //   console.log(result);
      result.data.result.length &&
        dispatch(fetchuserticketlistSuccess(result.data.result));
    } catch (error) {
      dispatch(fetchuserTicketFail(error.message));
    }
  };