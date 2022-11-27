import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./drafterTimeline.css";

export function DrafterTimeline({ activeStep }: { activeStep: 1 | 2 | 3 }) {
    return (
        <div className="drafter-timeline">
            <span className={`drafter-timeline__item ${activeStep == 1 ? "drafter-timeline__item--active" : null}`}>
                <FontAwesomeIcon icon={activeStep > 1 ? faCheckCircle : faCircle} />
                Settings
            </span>

            <span className={`drafter-timeline__item ${activeStep < 2 ? "drafter-timeline__item--disabled" : null} ${activeStep == 2 ? "drafter-timeline__item--active" : null}`}>
                <FontAwesomeIcon icon={activeStep > 2 ? faCheckCircle : faCircle} />
                Bans
            </span>

            <span className={`drafter-timeline__item ${activeStep < 3 ? "drafter-timeline__item--disabled" : null} ${activeStep == 3 ? "drafter-timeline__item--active" : null}`}>
                <FontAwesomeIcon icon={faCircle} />
                Results
            </span>
        </div>
    );
}