import {Flex, Stack, Text} from "@chakra-ui/react";

export function CustomBarChart({ data }: { data: { text: string, count: number, icon: React.ReactNode }[] })
{
    const hundretPercent = data[0].count;
    
    return (
        <Flex gap="10px" alignItems="flex-end" sx={{
            height: "300px",
        }}>
            {
                data.map(x => x.count > 0 && (
                    <Stack key={x.text}
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            backgroundColor: "#F7FAFC",
                            borderTopRightRadius: "50px",
                            borderTopLeftRadius: "50px",
                            borderBottomLeftRadius: "5px",
                            borderBottomRightRadius: "5px",
                        }} style={{
                            height: (Math.max(x.count / hundretPercent * 100, 25)) + "%",
                        }}>
                        {x.icon}
                        <Text color="black">{x.count}</Text>
                    </Stack>
                ))
            }
        </Flex>
    );
}