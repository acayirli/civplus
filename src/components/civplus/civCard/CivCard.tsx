import { CivModel } from "../../../civs";
import { CivLabelModel } from "../../../labels";
import { PantheonModel } from "../../../pantheons";
import { Container } from "../../meadow/container/Container";
import { ContentBox } from "../../meadow/contentBox/ContentBox";
import { Space } from "../../meadow/space/Space";
import { Civ } from "../civ/Civ";
import { CivLabel } from "../civLabel/CivLabel";

import "./civCard.css";

export function CivCard({ civ }: { civ: CivModel }) {
    return (
        <ContentBox className="civ_card">
            <div className="civ_card__header">
                <Container justifyContent="space-between">
                    <Civ civ={civ} />

                    <div>
                        <div>
                            Strength: {civ.strength}
                        </div>

                        <Space spacing="sm" />

                        <div>
                            Difficulty: {civ.difficulty}
                        </div>
                    </div>
                </Container>
            </div>

            <Space spacing="md" />

            <div className="civ_card__labels">
                {
                    civ.labels.map((label: CivLabelModel) => <CivLabel label={label} />)
                }
            </div>

            <Space spacing="md" />

            <div className="civ_card__strategy">
                <h4>Strategy</h4>

                <ul>
                    {
                        civ.strategies.map((strategy: string) => <li>{strategy}</li>)
                    }
                </ul>
            </div>

            <Space spacing="md" />

            <div className="civ_card__pantheons">
                <h4>Pantheons</h4>

                {
                    civ.pantheons.map((pantheon: PantheonModel) => <p>{pantheon.name}</p>)
                }
            </div>
        </ContentBox>
    );
}