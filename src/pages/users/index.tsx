import React from 'react';
import {
	Box,
	Button,
	Checkbox,
	Flex,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import Pagination from '../../components/Pagination';
import EditButton from '../../components/EditButton';
import Heading from '../../components/Heading';
import Link from 'next/link';

const UserList = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" height="100%" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading title="Usuarios" />
						<Link href="/users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} />}
							>
								Criar Novo
							</Button>
						</Link>
					</Flex>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Usuarios</Th>
								{isWideVersion && <Th>Data de cadastro</Th>}
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Claudio Ferreira</Text>
										<Text fontSize="small" color="gray.300">
											claudio@email.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril de 2021</Td>}
								<Td>
									<EditButton />
								</Td>
							</Tr>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Claudio Ferreira</Text>
										<Text fontSize="small" color="gray.300">
											claudio@email.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril de 2021</Td>}
								<Td>
									<EditButton />
								</Td>
							</Tr>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Claudio Ferreira</Text>
										<Text fontSize="small" color="gray.300">
											claudio@email.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril de 2021</Td>}
								<Td>
									<EditButton />
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
