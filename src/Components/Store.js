import React from "react";

export const CTX = React.createContext();

/*
  {
    from: user
    msg: hi
    topic: general
  }
  
  state = {
    topic1: [
      {msg},{msg},{msg}
    ]
  }
*/

const initState = {
  javaScript: [{ from: "tony", msg: "enjoy talking about javaScript" }],
  Python: [{ from: "tony", msg: "enjoy talking about Python" }],
  SQL: [{ from: "tony", msg: "enjoy talking about SQL" }]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECIEVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
