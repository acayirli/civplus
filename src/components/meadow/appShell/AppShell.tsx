import "./appshell.css";

export function AppShell({ navbar, sidebar, main }: { navbar: React.ReactNode, sidebar?: React.ReactNode, main: React.ReactNode }) {
    return (
        <div className="shell">
            { navbar }
            <div className="shell__main-container">
                { sidebar }
                { main }
            </div>
        </div>
    );
}