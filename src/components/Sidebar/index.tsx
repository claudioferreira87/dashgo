import React from 'react';
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useBreakpointValue,
} from '@chakra-ui/react';
import SidebarNav from './SidebarNav';
import { useSideBarDrawer } from '../../contexts/SideBarDrawer';

const Sidebar = () => {
	const { isOpen, onClose } = useSideBarDrawer();

	const isDrawerSideBar = useBreakpointValue({
		base: true,
		lg: false,
	});

	if (isDrawerSideBar) {
		return (
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg="gray.800" p="4">
						<DrawerCloseButton mt="6" />
						<DrawerHeader>Navegaçao</DrawerHeader>
						<DrawerBody>
							<SidebarNav />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return (
		<Box as="aside" w="64" mr="8">
			<SidebarNav />
		</Box>
	);
};

export default Sidebar;
