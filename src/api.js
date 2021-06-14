import axios from "axios";

const api = {
  getHomeData: async () => {
    try {
      const res = await axios.get("http://www.frame.com.ar/dbfeed/json.php?seccion=1");
      return res.data;
    } catch (error) {
      return error;
    }
  }
};

export default api;