export function Progressbar({ progress }: { progress: number })
{
    return (
        <div css={{ height: 10, backgroundColor: "var(--color-grey-1)", width: progress + "%", borderRadius: 2}}></div>
    );
}