export type ContainerProps = {
    className?: string,
    justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "center",
    alignItems?: "flex-start" | "flex-end" | "center",
    direction?: "row" | "column",
    wrap?: "nowrap" | "wrap",
    gap?: "5px" | "10px" | "20px" | "40px",
    fill?: boolean
    children: React.ReactNode
}

export function Container({
    className,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    direction = "row",
    wrap = "nowrap",
    gap = "10px",
    fill = false,
    children
}: ContainerProps) {
    return (
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justifyContent,
                alignItems: alignItems,
                flexWrap: wrap,
                gap: gap,
                height: fill ? "100%" : "auto"
            }}>
            {children}
        </div>
    );
}