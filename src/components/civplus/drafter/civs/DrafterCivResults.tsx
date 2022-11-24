import { Button } from "../../../meadow/button/Button";
import { Container } from "../../../meadow/container/Container";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Space } from "../../../meadow/space/Space";
import { Civ, CivModel } from "../../civ/Civ";
import { CivCard } from "../../civCard/CivCard";

import "./drafterCivResults.css";

export function DrafterCivResults({ results }: { results: CivModel[][] }) {
    function getPlayerMarkup(name: string, playerResults: CivModel[]) {
        return (
            <>
                <h3>{name}</h3>

                <ContentBox className="drafter-results">
                    {
                        playerResults.map((civ) => <Civ civ={civ} />)
                    }
                </ContentBox>

                <Space spacing="lg" />
            </>
        );
    }

    return (
        <div className="drafter-settings">
            

            <Container justifyContent="space-between">
                <h2>Civs</h2>

                <Button text="Share" />
            </Container>

            {
                results.map((playerResults, index) => getPlayerMarkup("Player " + (index + 1), playerResults))
            }

            <CivCard civ={results[0][0]} />
        </div>
    );
}