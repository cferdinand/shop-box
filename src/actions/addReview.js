import axios from "axios";
import getReviewList from "./getReviewList.js";
import baseUrl from "../../api/config.js";

const addReview = ([productId, newReview]) => {
  return dispatch => {
    return axios
      .post(`${baseUrl}reviews/${productId}`, newReview)
      .then(() => {
        getReviewList([1, "Reviews", productId]);
      })
      .then(() => {
        dispatch({
          type: "ADD-REVIEW",
          payload: {}
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default addReview;
