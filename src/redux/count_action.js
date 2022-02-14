import constants from "./constants";

export const createIncrementActon = (data) => ({
  type: constants.INCREMENT,
  data,
});
export const createDecrementActon = (data) => ({
  type: constants.DECREMENT,
  data,
});
export const createAsyncAction = (data, time) => {
  // 异步action，借助了thunk
  // 异步action不是必须要用的
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementActon(data))
    }, time);
  }
}
export default {};
