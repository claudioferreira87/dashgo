import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { theme } from '../styles/theme';
import { ApexOptions } from 'apexcharts';
import Chart from '../components/Chart';

const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			'01 Jan',
			'02 Jan',
			'03 Jan',
			'04 Jan',
			'05 Jan',
			'06 Jan',
			'07 Jan',
			'08 Jan',
		],
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
};
const series = [{ name: 'series1', data: [98, 45, 10, 60, 120, 40, 30, 150] }];

const Dashboard = () => {
	return (
		<Flex direction="column" height="100vh">
			<Header />

			<Flex w="100%" my="6" height="100%" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Chart
						title="Inscritos da semana"
						options={options}
						series={series}
					/>
					<Chart title="Taxa de abertura" options={options} series={series} />
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};

export default Dashboard;
