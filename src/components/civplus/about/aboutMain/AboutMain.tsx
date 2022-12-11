import { ContentBox } from "../../../meadow/contentBox/ContentBox";
import { Main } from "../../../meadow/main/Main";

import "./aboutMain.css";

export function AboutMain() {
    return (
        <Main className="main">
            <div className="about">
                <h2>About</h2>

                <ContentBox>
                    <p>
                        CIV+ is developed by Abdulhamid Cayirli. It is a website that provides useful tools for the game Civilization VI.
                        <br /><br />
                        The Open Source GitHub repository can be found <a target="_blank" href="https://github.com/acayirli/civplus">here</a>.
                    </p>
                </ContentBox>
            </div>
        </Main>
    );
}