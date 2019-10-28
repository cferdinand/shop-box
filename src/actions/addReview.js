import axios from "axios";
import getReviewList from "./getReviewList.js";

const addReview = ([productId, newReview]) => {
  console.log(newReview);
  return dispatch => {
    return axios
      .post(`http://18.223.1.30/reviews/${productId}`, newReview)
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