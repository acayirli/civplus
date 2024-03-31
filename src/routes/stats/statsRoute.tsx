
import {rootRoute} from "../rootRoute";
import {Box} from "@chakra-ui/react";
import React from "react";
import {createRoute} from "@tanstack/react-router";
import {Stats} from "../../v2Components/Stats/Stats";

export const statsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "civplus/stats",
    component:  () => {
        return (
            <Box sx={{ padding: "20px" }}>
                <Stats />
            </Box>
        );
    }
});