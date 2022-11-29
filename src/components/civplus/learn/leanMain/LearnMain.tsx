import { civs } from "../../../../civs";
import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Main } from "../../../meadow/main/Main";
import { Civ } from "../../civ/Civ";

export function LearnMain() {
    return (
        <Main>
            <h2>Learn</h2>

            <ContentBox>
                {
                    Object.values(civs).map((civ) => <Civ key={civ.id} civ={civ} />)
                }
            </ContentBox>
        </Main>
    );
}