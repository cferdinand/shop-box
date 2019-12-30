import axios from "axios";
import { baseUrl } from "../../api/config";

const reportReview = reviewId => {
  return axios.put(baseUrl + `reviews/report/${reviewId}`).catch(err => {
    console.log(err);
  });
};

export default reportReview;
