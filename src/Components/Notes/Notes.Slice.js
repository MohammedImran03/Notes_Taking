import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  notes: "",
  noteinput:"",
};

const tempnotesSlice = createSlice({
  name: "tempSlice",
  initialState,
  reducers: {
    tempnotesPending: (state) => {
      state.isLoading = true;
    },
    tempnotesInputvalues: (state, { payload }) => {
        state.isLoading = false;
        state.noteinput = "success";
        state.notes = payload;
      },
    tempnotesgetvalues: (state, { payload }) => {
      state.isLoading = false;
      state.noteinput = "success";
      state.notes = payload;
    },
    tempnotesError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.notes = payload;
    },
    clearresponse: (state) => {
      state.notes = "";
    },
    DeleteComplete: (state) => {
      state.isLoading = false;
      state.notes="";
    },
    openNewNoteSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload;
      state.notes="";
    },
    clearStatus: (state) => {
      state.status = "";
    },
    openNewNoteFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload;
    },
  },
});

const { reducer, actions } = tempnotesSlice;

export const {
  tempnotesPending,
  tempnotesInputvalues,
  tempnotesgetvalues,
  tempnotesError,
  clearresponse,
  DeleteComplete,
  openNewNoteSuccess,
  openNewNoteFail,
  clearStatus,
} = actions;

export default reducer;