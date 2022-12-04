import { civs } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Main } from "../../../meadow/main/Main";
import { Civ } from "../../civ/Civ";
import { CivsContentBox } from "../../civsContentBox/CivsContentBox";
import { LearnCivs } from "../learnCivs/LearnCivs";

import "./learnMain.css";

export function LearnMain() {
    return (
        <Main className="main">
            <LearnCivs />
        </Main>
    );
}