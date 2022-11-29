import axios from "axios";
import ACTIONS from "./actionTypes";
import { apiStart, apiEnd, apiError } from "./actionCreators";

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type !== ACTIONS.API) return;

    const {
      url,
      method,
      data,
      onSuccess = () => ({}),
      onFailure = () => ({}),
      label,
      headers,
    } = action.payload;

    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    if (label) {
      dispatch(apiStart(label));
    }

    axios
      .request({
        url,
        method,
        headers,
        [dataOrParams]: data,
      })
      .then(({ data }) => {
        dispatch(onSuccess(data));
      })
      .catch((error) => {
        dispatch(apiError(error));
        dispatch(onFailure(error));
      })
      .finally(() => {
        if (label) {
          dispatch(apiEnd(label));
        }
      });
  };

export default apiMiddleware;
