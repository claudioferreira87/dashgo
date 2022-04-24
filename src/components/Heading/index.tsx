import React from 'react';
import {
	Heading as ChackraHeading,
	HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react';

interface HeadingProps extends ChakraHeadingProps {
	title: string;
}

const Heading = ({ title, ...rest }: HeadingProps) => {
	return (
		<ChackraHeading size="lg" fontWeight="normal" {...rest}>
			{title}
		</ChackraHeading>
	);
};

export default Heading;
