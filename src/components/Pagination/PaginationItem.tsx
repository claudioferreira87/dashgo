import { Button } from '@chakra-ui/react';
import React from 'react';

interface PaginationItemProps {
	numberPage: number;
	isCurrent?: boolean;
}

const PaginationItem = ({
	isCurrent = false,
	numberPage,
}: PaginationItemProps) => {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				w="4"
				colorScheme="pink"
				disabled
				_disabled={{ bgColor: 'pink.500', cursor: 'default' }}
			>
				{numberPage}
			</Button>
		);
	}
	return (
		<Button
			size="sm"
			fontSize="xs"
			w="4"
			bgColor="gray.700"
			_hover={{ bgColor: 'gray.500' }}
		>
			{numberPage}
		</Button>
	);
};

export default PaginationItem;
