import { civs } from "../../../../../civs";
import { Civ } from "../../../civ/Civ";
import { listEntryStyles } from "../../list.styles";
import { CivProfileModel } from "../../statsMain/StatsMain";

export function CivListEntry({ civ, position, displayedStat }: { civ: CivProfileModel, position: number, displayedStat: React.ReactNode }) {
    return (
        <div css={listEntryStyles}>
            <div>
                {position}.
            </div>

            <Civ civ={civs[civ.name]} css={{ flexGrow: 1 }} />

            <div>
                {displayedStat}
            </div>
        </div>
    );
}