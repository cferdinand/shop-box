import axios from "axios";
import baseUrl from "../../api/config.js";

const getReviewList = ([
  page,
  actionType,
  productID,
  count = 2,
  sort = "relevance"
]) => {
  return dispatch => {
    return axios
      .get(
        `${baseUrl}/reviews/${productID}/list?count=${count}&page=${page}&sort=${sort}`
      )
      .then(({ data }) => {
        dispatch({
          type: actionType === "REVIEWS" ? "REVIEWS" : "UPDATE-REVIEWS",
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getReviewList;
