import { useState } from "react";
import { CivLabelModel } from "../../../labels";
import { Container } from "../../meadow/container/Container";
import { CivLabel } from "../civLabel/CivLabel";

export function CivLabelFilters({ labels, onChange }: { labels: CivLabelModel[], onChange: (selectedLabels: CivLabelModel[]) => void }) {
    const [selectedLabels, setSelectedLabels] = useState<CivLabelModel[]>([]);

    function handleOnClickLabel(label: CivLabelModel) {
        let newLabels;

        if (selectedLabels.includes(label)) {
            newLabels = selectedLabels.filter((item) => item != label);
            setSelectedLabels(newLabels);
        }
        else {
            newLabels = selectedLabels.concat(label);
            setSelectedLabels(newLabels);
        }

        onChange(newLabels);
    }

    return (
        <Container wrap="wrap">
            {
                labels.sort((a, b) => a.localeCompare(b)).map((label) => <CivLabel key={label} label={label} onClick={handleOnClickLabel} />)
            }
        </Container>
    );
}