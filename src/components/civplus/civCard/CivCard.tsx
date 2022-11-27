import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <Container justifyContent="space-between" gap="5px">
                    <Civ civ={civ} />

                    <div className="civ_card__stats">
                        <div>
                            <span>Power</span>
                            <span>Difficulty</span>
                        </div>

                        <div>
                            <span>
                                {
                                    [...Array(civ.strength)].map((index) => <FontAwesomeIcon key={index} icon={faStar} />)
                                }
                                {
                                    [...Array(3 - civ.strength)].map((index) => <FontAwesomeIcon key={index} icon={farStar} />)
                                }
                            </span>

                            <span>
                                {
                                    [...Array(civ.difficulty)].map((index) => <FontAwesomeIcon key={index} icon={faStar} />)
                                }
                                {
                                    [...Array(3 - civ.difficulty)].map((index) => <FontAwesomeIcon key={index} icon={farStar} />)
                                }
                            </span>
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

            {
                civ.counters &&
                <>
                    <div className="civ_card__counters">
                        <h4>Counters</h4>

                        <ul>
                            {
                                civ.counters.map((counter: string) => <li>{counter}</li>)
                            }
                        </ul>
                    </div>

                    <Space spacing="md" />
                </>
            }

            <div className="civ_card__pantheons">
                <h4>Pantheons</h4>

                {
                    civ.pantheons.map((pantheon: PantheonModel) => <p>{pantheon.name}</p>)
                }
            </div>
        </ContentBox>
    );
}