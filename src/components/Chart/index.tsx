import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ChartApex = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

interface ChartProps {
	title: string;
	options: ApexOptions;
	series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

const Chart = ({ title, options, series }: ChartProps) => {
	return (
		<Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
			<Text fontSize="lg" mb="4">
				{title}
			</Text>
			<ChartApex type="area" height={160} options={options} series={series} />
		</Box>
	);
};

export default Chart;
