import axios from "axios";
import baseUrl from "../../api/config.js";

let getReviewMetaData = productID => {
  //assuming that the url has products/:productID

  return dispatch => {
    return axios
      .get(`${baseUrl}/reviews/${productID}/meta`)
      .then(({ data }) => {
        dispatch({
          type: "UPDATE_REVIEW_METADATA",
          data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export default getReviewMetaData;
