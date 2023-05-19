import React from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from 'react-router-dom';

class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: "donut",
                },
                series: [44, 55, 13, 33],
                labels: ["Companies", "Professionsals", "Freelances", "Candidates"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: 'top',
                            },
                        },
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Subscribers</h4>
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
                                series={this.state.options.series}
                                type="donut"
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PieChart;
