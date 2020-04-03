import axios from "axios";
import baseUrl from "../../api/config";

const updateHelpfulness = reviewId => {
  return axios.put(`${baseUrl}/reviews/helpful/${reviewId}`).catch(err => {
    console.log(err);
  });
};

export default updateHelpfulness;
