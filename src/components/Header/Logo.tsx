import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={["2xl","3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            W="64"
        >
            DASHGO
            <Text as="span" 
                ml="1" 
                mr="10" 
                color="pink.500"
                >
                    .
                </Text>
        </Text>
    );
}