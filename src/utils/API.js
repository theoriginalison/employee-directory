import axios from "axios";

const URL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    search: function () {
        return axios.get(URL);
    }
};