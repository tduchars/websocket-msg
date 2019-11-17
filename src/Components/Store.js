import React from "react";

//  socket client connection
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  javaScript: [{ from: "tony", msg: "enjoy talking about javaScript" }],
  Python: [{ from: "tony", msg: "enjoy talking about Python" }],
  SQL: [{ from: "tony", msg: "enjoy talking about SQL" }]
};

// retains existing state whilst mapping over new state and re-rendering
function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg
          }
        ]
      };
    default:
      return state;
  }
}

//  to initialise socket
let socket;

//  declared below to ensure if socket changes
function sendChat(value) {
  socket.emit("chat message", value);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", msg => {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  const user = "Tony" + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ allChats, sendChat, user }}>
      {props.children}
    </CTX.Provider>
  );
}
