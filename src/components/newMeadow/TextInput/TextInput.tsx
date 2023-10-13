export type TextInputProps = { 
    label?: string,
    value?: string,
    onChange?: (val: string) => void,
    error?: string,
    placeholder?: string
};

export function TextInput({ label, value, onChange, error, placeholder }: TextInputProps)
{
    return (
        <div css={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "5px" }}>
            <label css={{ fontFamily: "sans-serif", fontSize: "14px", color: "#919191" }}>
                { label }
            </label>

            <input css={{ border: "none", fontSize: "18px", color: "#333", fontFamily: "sans-serif", padding: "5px 0px" }}
                value={value} 
                onChange={onChange && ((e) => onChange(e.target.value))} 
                placeholder={placeholder} />

            <p css={{}}>
                { error }
            </p>
        </div>
    );
}