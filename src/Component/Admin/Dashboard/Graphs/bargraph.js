import React from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from 'react-router-dom';
import './bargraph.css'

class bargraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "100%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: {
                    enabled: window.innerWidth > 576, // Hide data labels for small devices
                    style: {
                        fontSize: "12px",
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontWeight: "bold",
                        colors: ["#ffffff"],
                    },
                    offsetY: -5,
                    formatter: function (val, { seriesIndex }) {
                        if (window.innerWidth > 576) {
                            return val;
                        } else {
                            return `${val} (${this.series[seriesIndex].name})`;
                        }
                    },
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                },
                xaxis: {
                    categories: ["Mar"],
                },
                yaxis: {
                    title: {
                        text: "Number of Candidates/Companies",
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
                legend: {
                    position: 'top' // or 'bottom'
                }
            },
            series: [
                {
                    name: "Candidates",
                    data: [10000],

                    // data: [10000, 7, 4, 6, 9, 7, 3],
                },
                {
                    name: "Companies",
                    data: [3000, 4, 5, 6, 7, 8],

                    // data: [3000, 5, 6, 7, 3, 5, 6, 7],
                },
            ],
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Total Income</h4>
                    <div className="heading-elements">
                        <ul className="list-inline mb-0">
                            <li>
                                <Link data-action="collapse">
                                    <i className="ft-minus"></i>
                                </Link>
                            </li>
                            <li>
                                <Link data-action="reload">
                                    <i className="ft-rotate-cw"></i>
                                </Link>
                            </li>
                            <li>
                                <Link data-action="expand">
                                    <i className="ft-maximize"></i>
                                </Link>
                            </li>
                            <li>
                                <Link data-action="close">
                                    <i className="ft-x"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-content collapse show">
                    <div className="card-body dashboard-branch-target scroll-bar">
                        <div className="chart-wrapper">
                            <ReactApexChart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                height={290}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default bargraph;
