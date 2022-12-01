import axios from "axios";
import env from "react-dotenv";
import { apiCallBegin } from "../apiConfig";
const BASE_URL = env.API_URL;

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegin.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    try {
      const response = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data: data,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: { error: error.message } });
    }
  };

export default apiMiddleware;
