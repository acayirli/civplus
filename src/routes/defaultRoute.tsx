import {createRoute} from "@tanstack/react-router";
import {rootRoute} from "./rootRoute";
import React from "react";
import {Box} from "@chakra-ui/react";
import {Drafter} from "../v2Components/Drafter/Drafter";

export const defaultRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "civplus/",
    component:  () => {        
        return (
            <Box sx={{ padding: "20px" }}>
                <Drafter />
            </Box>
        );
    }
});