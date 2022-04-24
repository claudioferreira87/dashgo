import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination = () => {
	return (
		<Stack
			spacing="6"
			direction={['column', 'row']}
			mt="8"
			justify="space-between"
			align="center"
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>
			<Stack direction="row" spacing="2">
				<PaginationItem numberPage={1} isCurrent />
				<PaginationItem numberPage={2} />
				<PaginationItem numberPage={3} />
				<PaginationItem numberPage={4} />
			</Stack>
		</Stack>
	);
};

export default Pagination;
