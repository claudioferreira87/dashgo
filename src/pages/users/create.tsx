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
import { Input } from '../../components/Form/Input';
import Heading from '../../components/Heading';
import Link from 'next/link';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { equal } from 'assert';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateUserFormProps {
	name: string;
	email: string;
	password: string;
	passwod_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(6),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'the passwords must be the same'),
});

const CreateUser = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const { errors, isSubmitting } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormProps> = async values => {
		await new Promise(resolved => setTimeout(resolved, 2000));
		console.log(values);
	};

	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" height="100%" maxWidth={1480} mx="auto" px="6">
				<Sidebar />
				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bgColor="gray.800"
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading title="Criar Usuario" />
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="name"
								type="text"
								label="Nome completo"
								{...register('name')}
								error={errors.name}
							/>
							<Input
								name="email"
								label="E-mail"
								type="email"
								{...register('email')}
								error={errors.email}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="password"
								type="password"
								label="Password"
								{...register('password')}
								error={errors.password}
							/>
							<Input
								name="password_confirmation"
								type="password"
								label="Confirm Password"
								{...register('password_confirmation')}
								error={errors.password_confirmation}
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
							<Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
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
