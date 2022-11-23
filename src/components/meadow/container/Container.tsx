export type ContainerProps = {
    justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "center",
    alignItems?: "flex-start" | "flex-end" | "center",
    direction?: "row" | "column",
    wrap?: "nowrap" | "wrap",
    gap?: "5px" | "10px" | "20px",
    children: React.ReactNode
}

export function Container({
    justifyContent = "flex-start",
    alignItems = "flex-start",
    direction = "row",
    wrap = "nowrap",
    gap = "10px",
    children
}: ContainerProps) {
    return (
        <div style={{
            display: "flex",
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexWrap: wrap,
            gap: gap
        }}>
            {children}
        </div>
    );
}