import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


const initOption = {
  "client-id": "AXw1o6ZsVsWlqURgjkmsve7s6WWiQ_09A6qlmFWJToywHU5uQJKGWc1TPifwTfuMr9Gb-Ex6_d4-QpTP",
  currency: 'USD',
  intent: "capture"
}

// const Container = connect(mapStateToProp, mapDispatchToProp)
ReactDOM.createRoot(document.getElementById("root")).render(

  <App />


);
