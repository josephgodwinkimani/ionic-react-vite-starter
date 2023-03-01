/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App";
import "./index.css";

if ("serviceWorker" in navigator) {
	// && !/localhost/.test(window.location)) {
	registerSW();
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
