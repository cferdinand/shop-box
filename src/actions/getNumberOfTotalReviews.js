import axios from "axios";
import baseUrl from "../../api/config.js";

const getTotalReviews = productID => {
  return axios
    .get(`${baseUrl}/reviews/${productID}/list?count=100000`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};

export default getTotalReviews;
