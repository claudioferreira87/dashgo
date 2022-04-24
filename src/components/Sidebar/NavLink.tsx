import React, { ElementType, ReactNode } from 'react';
import Link from 'next/link';
import {
	Link as ChakraLink,
	Text,
	LinkProps as ChakraLinkProps,
	Icon,
} from '@chakra-ui/react';
import { Url } from 'url';
import ActiveLink from '../ActiveLink';

interface LinkProps extends ChakraLinkProps {
	icon: ElementType;
	children: ReactNode;
	href?: string;
}

const NavLink = ({ icon, children, href, ...rest }: LinkProps) => {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display="flex" alignContent="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
};

export default NavLink;
