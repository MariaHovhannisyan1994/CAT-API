import { picActions } from "../slices/items";
import axios from "axios";

export const fetchItems = (payload) => {
  return async (dispatch) => {
    const fetchPics = async () => {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        payload
      );
    
      return response.data;
    };
    const picData = await fetchPics();
    dispatch(picActions.setPicData({response:picData,page:payload.params.page}));
  };
};
