import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
	showProfileData: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box>
					<Text textAlign="right" mr="4">
						Claudio Ferreira
					</Text>
					<Text color="gray.300" fontSize="small">
						claudio@email.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Claudio Ferreira"
				src="https://github.com/claudioferreira87.png"
			/>
		</Flex>
	);
};

export default Profile;
