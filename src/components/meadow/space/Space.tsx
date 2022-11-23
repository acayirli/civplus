import "./spacing.css";

export function Space({ spacing }: { spacing: "sm" | "md" | "lg" }) {
    return (
        <div className={`spacing_${spacing}`}></ div>
    );
}