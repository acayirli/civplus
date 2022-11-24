export type CivLabelModel = 
"Science" | "Culture" | "Religion" | "Production" |
"Gold" | "War" | "Carry" | "Beginner-friendly" |
"Timing push" | "Versatile" | "Ward";

export function CivLabel({ label }: { label: CivLabelModel }) {
    return (
        <button className="civ_label" type="button">
            { label }
        </button>
    );
}