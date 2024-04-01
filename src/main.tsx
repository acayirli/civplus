import React from "react";
import ReactDOM from "react-dom/client";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {rootRoute} from "./routes/rootRoute";
import {defaultRoute} from "./routes/defaultRoute";
import {ChakraProvider, ColorModeScript, DarkMode, extendTheme, ThemeConfig} from "@chakra-ui/react";
import "./index.css";
import {statsRoute} from "./routes/stats/statsRoute";

// tanstack react router
const routeTree = rootRoute.addChildren([defaultRoute, statsRoute]);
const router = createRouter({ routeTree });

// chakra ui
const config: ThemeConfig  = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};
const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <DarkMode>
                <RouterProvider router={router} />
            </DarkMode>
        </ChakraProvider>
    </React.StrictMode> 
);
