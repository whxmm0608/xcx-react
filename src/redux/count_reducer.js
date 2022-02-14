const todos = (state = 0, action) => {
  const { type, data } = action;
  const parseData = +data;
  switch (type) {
      case "increment":
      return state + parseData;
    case "decrement":
      return state - parseData;
    case "incrementIfOdd":
      if (state % 2) {
        return state + parseData;
      }
      return state;
    // case "incrementIfAsync":
    default:
      return 0;
  }
};

export default todos;
