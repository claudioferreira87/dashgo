import { Stack } from '@chakra-ui/react';
import React from 'react';
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

const SidebarNav = () => {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="GERAL">
				<NavLink href="/dashboard" icon={RiDashboardLine}>
					Dashboard
				</NavLink>
				<NavLink href="/users" icon={RiContactsLine}>
					Usuarios
				</NavLink>
			</NavSection>

			<NavSection title="AUTOMAÇÃO">
				<NavLink href="/forms" icon={RiInputMethodLine}>
					Formularios
				</NavLink>
				<NavLink href="/automation" icon={RiGitMergeLine}>
					Automaçao
				</NavLink>
			</NavSection>
		</Stack>
	);
};

export default SidebarNav;
