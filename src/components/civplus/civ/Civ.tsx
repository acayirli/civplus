import "./civ.css";

export type CivModel = {
    portrait: React.ReactNode,
    leader: string,
    nation: string
}

export function Civ({ civ }: { civ: CivModel }) {
    return (
        <div className="civ">
            <div className="civ__portrait">
                {civ.portrait}
            </div>

            <div className="civ__title">
                <div className="civ__leader">{civ.leader}</div>
                <div className="civ__nation">{civ.nation}</div>
            </div>
        </div>
    );
}