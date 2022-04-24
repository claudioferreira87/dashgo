import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import { RiPencilLine } from 'react-icons/ri';

const EditButton = () => {
	return (
		<Button as="a" size="sm" fontSize="sm" colorScheme="facebook">
			<Icon as={RiPencilLine} />
		</Button>
	);
};

export default EditButton;
