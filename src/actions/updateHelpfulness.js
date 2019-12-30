import axios from "axios";
import { baseUrl } from "../../api/config";

const updateHelpfulness = reviewId => {
<<<<<<< HEAD
  return axios.put(baseUrl + `reviews/helpful/${reviewId}`).catch(err => {
    console.log(err);
  });
=======
  return axios
    .put(`http://3.134.102.30/reviews/helpful/${reviewId}`)
    .catch(err => {
      console.log(err);
    });
>>>>>>> b4bca9ba7a759f9cdc24310e1e9b772ad5fefed3
};

export default updateHelpfulness;
