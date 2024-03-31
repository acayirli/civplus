import {createRootRoute, Outlet} from "@tanstack/react-router";
import {Card, Flex, Text} from "@chakra-ui/react";
import {Link} from "@tanstack/react-router";

import logo from "../assets/images/logos/civ_logo.webp";
import {statsRoute} from "./stats/statsRoute";
import {defaultRoute} from "./defaultRoute";

export const rootRoute = createRootRoute({
    component: () => {        
        return (
            <>
                <Card borderRadius={0}>
                    <Flex padding="10px 20px" gap="20px" alignItems="center">
                        <img src={logo} alt="Civ+ Logo" style={{ height: 30 }} />

                        <Text letterSpacing="1px" fontWeight="bold">
                            <Link to={defaultRoute.to}>
                                Drafter
                            </Link>
                        </Text>

                        <Text letterSpacing="1px" fontWeight="bold">
                            <Link to={statsRoute.to}>
                                Stats
                            </Link>
                        </Text>

                        <Text letterSpacing="1px" fontWeight="bold">
                            <Link to={statsRoute.to}>
                                Leaders
                            </Link>
                        </Text>

                        <Text letterSpacing="1px" fontWeight="bold">
                            <Link to={statsRoute.to}>
                                About
                            </Link>
                        </Text>
                    </Flex>
                </Card>

                <Outlet />
            </>
        );
    }
});