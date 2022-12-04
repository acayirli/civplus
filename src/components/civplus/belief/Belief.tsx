import { BeliefModel } from "../../../beliefs";

import "./belief.css";

export function Belief({ belief }: { belief: BeliefModel }) {
    return (
        <img className="belief" src={belief.image} />
    );
}