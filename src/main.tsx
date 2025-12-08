import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/colors/red-dark.css";
import "@radix-ui/colors/sand-dark.css";
import "@radix-ui/colors/gold-dark.css";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: React Root
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
