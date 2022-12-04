import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CivModel } from "../../../civs";
import { CivLabelModel } from "../../../labels";
import { genericPantheons, PantheonModel, pantheons } from "../../../pantheons";
import { Container } from "../../meadow/container/Container";
import { ContentBox } from "../../meadow/contentBox/ContentBox";
import { Space } from "../../meadow/space/Space";
import { Civ } from "../civ/Civ";
import { CivLabel } from "../civLabel/CivLabel";

import "./civCard.css";
import { Pantheon } from "../pantheon/Pantheon";
import { BeliefModel } from "../../../beliefs";
import { Belief } from "../belief/Belief";

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
                                    [...Array(civ.strength)].map((star, index) => <FontAwesomeIcon key={index} icon={faStar} />)
                                }
                                {
                                    [...Array(3 - civ.strength)].map((star, index) => <FontAwesomeIcon key={index} icon={farStar} />)
                                }
                            </span>

                            <span>
                                {
                                    [...Array(civ.difficulty)].map((star, index) => <FontAwesomeIcon key={index} icon={faStar} />)
                                }
                                {
                                    [...Array(3 - civ.difficulty)].map((star, index) => <FontAwesomeIcon key={index} icon={farStar} />)
                                }
                            </span>
                        </div>
                    </div>
                </Container>
            </div>

            <Space spacing="md" />

            <div className="civ_card__labels">
                {
                    civ.labels.map((label: CivLabelModel) => <CivLabel key={label} label={label} />)
                }
            </div>

            <Space spacing="md" />

            <div className="civ_card__strategy">
                <h4>Strategy</h4>

                <ul>
                    {
                        civ.strategies.length > 0 
                        ? civ.strategies.map((strategy: string, index) => <li key={index}>{strategy}</li>)
                        : <li>No information available.</li>
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
                                civ.counters.map((counter: string, index) => <li key={index}>{counter}</li>)
                            }
                        </ul>
                    </div>

                    <Space spacing="md" />
                </>
            }

            <div className="civ_card__pantheons">
                <h4>Pantheons</h4>

                {
                    civ.pantheons.length > 0 &&
                    civ.pantheons.map((pantheon: PantheonModel, index) => <Pantheon key={index} pantheon={pantheon} />)
                }
                {
                    civ.pantheons.length == 0 &&
                    <p>
                        Pick any generic pantheon, for example one of the following:
                        {
                            genericPantheons.sort(() => 0.5 - Math.random()).slice(0, 3).map((pantheon: PantheonModel, index) => <Pantheon key={index} pantheon={pantheon} />)
                        }
                    </p>
                }
            </div>

            <Space spacing="md" />

            {
                civ.beliefs &&
                <>
                    <div className="civ_card__beliefs">
                        <h4>Beliefs</h4>

                        {
                            civ.beliefs.map((belief: PantheonModel, index) => <Belief key={index} belief={belief} />)
                        }
                    </div>

                    <Space spacing="md" />
                </>
            }
        </ContentBox>
    );
}