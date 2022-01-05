import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} max="auto" px="6">
                <Sidebar />

                <Box flex="1" borberRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha" overflowX="scroll">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" disabled />
                                </Th>
                                <Th>Id</Th>
                                <Th>Usuários</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>01254</Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Ricardo Melo Machado</Text>
                                        <Text fontSize="sm" color="gray.300">ricardo.machado10.rm@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>06 de Dezembro, 2021</Td>}
                                {isWideVersion && <Td>
                                    <Box justify="space-between" align="center">
                                        <Button as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="yellow"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                            mr="3"
                                        >
                                            Editar
                                        </Button>
                                        <Button as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="red"
                                            leftIcon={<Icon as={RiDeleteBinLine} fontSize="16" />}>
                                            Excluir
                                        </Button>
                                    </Box>
                                </Td>}
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}