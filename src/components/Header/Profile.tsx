import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface IProfileProps {
    showProfileData?: Boolean;
}

export function Profile({ showProfileData }: IProfileProps) {
    return (
        <Flex align="center" >
            {showProfileData && (
                <Box 
                    mr="4" 
                    textAlign="right">
                    
                    <Text>Ricardo Machado</Text>
                    
                    <Text 
                        color="gray.300" 
                        fontSize="small"
                    >
                        ricardo.machado10.rm@gmail.com
                    </Text>
                    
                    <Text 
                        fontSize="small" 
                        color="gray.300"
                    >
                        sair
                    </Text>
                </Box>
            )}
            <Avatar
                mr="4" 
                size="md" 
                name="Ricaro Machado" 
                src="https://github.com/ricardmachado.png" 
            />
        </Flex>
    );
}