const doReduce = (st, act) => {
  switch (act.type) {
    case "inc":
      return { count: st.count + 1 };
    case "dec":
      return { count: st.count - 1 };
    case "res":
      return { count: 0 };
    default:
      throw new Error("Unexpected action");
  }
};

export default doReduce;
