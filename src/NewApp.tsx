import { TextInput } from "./components/newMeadow/TextInput/TextInput";

export function NewApp()
{
    return (
        <div css={{ maxWidth: 512, margin: "0 auto", padding: "20px" }}>
            <InputGrid>
                <TextInput label="Firstname" />
                <TextInput label="Lastname" />
                <TextInput label="Phone" />
                <TextInput label="Adress" />
                <TextInput label="Nr." />
            </InputGrid>            
        </div>
    );
}

function InputGrid({ children }: {} & React.HTMLAttributes<HTMLDivElement>)
{
    return (
        <div css={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            { children }
        </div>
    );
}

