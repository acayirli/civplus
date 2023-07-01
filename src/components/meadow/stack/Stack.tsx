export function Stack({ children, className, spacing = 20 }: { children: React.ReactNode, className?: string, spacing?: 20 | 10 })
{
    return (
        <div className={className} css={{display: "flex", flexDirection: "column", gap: spacing}}>
            { children }
        </div>
    );
}