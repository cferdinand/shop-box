import axios from "axios";
import { baseUrl } from "../../api/config";
import getReviewList from "./getReviewList.js";

const addReview = ([productId, newReview]) => {
  return dispatch => {
    return axios
      .post(baseUrl + `reviews/${productId}`, newReview)
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
