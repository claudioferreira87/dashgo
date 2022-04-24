import React from 'react';
import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Form/Input';
import Heading from '../../components/Heading';
import Link from 'next/link';

const CreateUser = () => {
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" height="100%" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius={8} bgColor="gray.800" p={['6', '8']}>
					<Heading title="Criar Usuario" />
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input name="name" label="Nome completo" />
							<Input name="email" label="E-mail" />
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input name="password" type="password" label="Password" />
							<Input
								name="password_confirmation"
								type="password"
								label="Confirm Password"
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Button as="a" colorScheme="pink">
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default CreateUser;