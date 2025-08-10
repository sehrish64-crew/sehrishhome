'use client';

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ChartTimeline = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<ApexCharts | null>(null);

    useEffect(() => {
        const options = {
            colors: ['#144A6C'],
            series: [
                {
                    data: [
                        [1327359600000, 30.95],
                        [1327446000000, 31.34],
                        [1327532400000, 31.18],
                        [1327618800000, 31.05],
                        // 🔻 Truncated for brevity — insert full dataset here
                        [1361919600000, 39.60],
                    ],
                },
            ],
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true,
                },
            },
            annotations: {
                yaxis: [
                    {
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: '#fff',
                                background: '#144A6C',
                            },
                        },
                    },
                ],
                stroke: {
                    curve: 'smooth',
                },
                xaxis: [
                    {
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: '#fff',
                                background: '#144A6C',
                            },
                        },
                    },
                ],
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100],
                },
            },
        };

        if (chartRef.current) {
            chartInstance.current = new ApexCharts(chartRef.current, options);
            chartInstance.current.render();
        }

        return () => {
            chartInstance.current?.destroy();
        };
    }, []);

    const zoomChart = (start: string, end: string) => {
        chartInstance.current?.zoomX(
            new Date(start).getTime(),
            new Date(end).getTime()
        );
    };

    const handleZoom = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('active'));
        target.classList.add('active');
    };

    return (
        <div>
            <div className="mb-4 space-x-2">
                <button
                    className="text-[#144A6C]"
                    id="one_month"
                    onClick={(e) => {
                        handleZoom(e);
                        zoomChart('28 Jan 2013', '27 Feb 2013');
                    }}
                >
                    Total Patients
                </button>
                
            </div>

            <div id="chart-timeline" ref={chartRef} />
        </div>
    );
};

export default ChartTimeline;
