import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // Add React.StricMode during Development
  // Remove React.StrictMode on the Production
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />);
