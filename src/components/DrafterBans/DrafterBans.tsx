import { Container } from "../Container/Container.tsx";
import { leaders } from "../../data/leaders.tsx";
import { LeaderCard } from "../LeaderCard/LeaderCard.tsx";
import { LeaderGrid } from "../LeaderGrid/LeaderGrid.tsx";
import { TextInput } from "../TextInput/TextInput.tsx";
import { useState } from "react";
import { Stack } from "../Stack/Stack.tsx";
import { Flex } from "../Flex/Flex.tsx";
import { Button } from "../Button/Button.tsx";
import { Heading } from "../Heading/Heading.tsx";

export type DrafterBansProps = {
	onContinue?: (bannedLeaders: string[]) => void;
	onCancel?: () => void;
};

export function DrafterBans({
	onContinue,
	onCancel,
}: Readonly<DrafterBansProps>) {
	const [bannedLeaders, setBannedLeaders] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const filteredLeaders = Object.values(leaders).filter((leader) =>
		leader.leader.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	function handleToggleBan(leaderId: string, banned: boolean) {
		if (banned) {
			setBannedLeaders([...bannedLeaders, leaderId]);
		} else {
			setBannedLeaders(bannedLeaders.filter((x) => x !== leaderId));
		}
	}

	return (
		<Container size={"xl"} style={{ padding: "20px 40px" }}>
			<Stack gap={"lg"}>
				<Heading>Bans</Heading>

				<Flex justifyContent={"space-between"} gap={"lg"}>
					<Flex gap={"lg"} style={{ alignItems: "flex-end" }}>
						<TextInput
							inline
							label={"Search"}
							value={searchTerm}
							onChange={setSearchTerm}
						/>

						<div style={{ whiteSpace: "nowrap" }}>
							{bannedLeaders.length > 0 && `${bannedLeaders.length} bans`}
						</div>
					</Flex>

					<Flex gap={"lg"}>
						<Button onClick={() => onContinue?.(bannedLeaders)}>
							Continue
						</Button>
						<Button onClick={onCancel} variant={"secondary"}>
							Restart
						</Button>
					</Flex>
				</Flex>

				{filteredLeaders.length > 0 ? (
					<LeaderGrid>
						{filteredLeaders.map((leader) => (
							<LeaderCard
								isBanned={bannedLeaders.includes(leader.id)}
								onToggleBan={handleToggleBan}
								key={leader.id}
								{...leader}
							/>
						))}
					</LeaderGrid>
				) : (
					<div>No search results</div>
				)}
			</Stack>
		</Container>
	);
}
