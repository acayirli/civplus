import { Logo } from '../logo/Logo';
import { MainContainer } from '../main_container/MainContainer';
import "./layout.css";

export function Welcome() {
    return (
        <div className="layout">
            <div className="logo_container">
                <Logo />
            </div>

            <div className="main_container">
                <MainContainer />
            </div>
        </div>
    );
}