import React from 'reactn'
import ReactDOM from 'react-dom'
import "@carbon/charts/styles.css";
import "@carbon/grid/scss/grid";
import "@carbon/themes/scss/themes";

import { InlineLoading, ToastNotification } from 'carbon-components-react'

import { DonutChart, LineChart } from "@carbon/charts";
import global_data from '../../global'
import { PostAdminResourceusageRequest } from '../../api/src/index'
import Wait from '../../modals/wait'
import FreeScrollBar from 'react-free-scrollbar'

export default (props) => {	

    let [resourceUsageData, setResourceUsageData] 	= React.useState(null)


    const nf      = (bytes) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        
    }

    const perc_nf = (perc) => {
        return "% "+perc;
    }

    const empty_f = (val) => { return 0 }
    const colors = [
    {
        "Used Diskspace": "#00A68F"
    }
    ]
    // [
    //     "#00A68F","#DFE3E6"
    // ]

    const options = {
        "resizable": true,
        "donut": {
            "center": {
                "label": "Total",
                "numberFormatter": nf
            }
        },
        "color": {
            "scale": {
                "Used Diskspace":  "#00A68F",
                "Free Diskspace" : "#DFE3E6"
            }
        },
        "legend": {
            "enabled": false
        },
        "tooltip": {
            "valueFormatter": nf
        },
        "height": "200px",
    };


    const getFill = args => {
        console.log("arguments: ", args);
      };

    React.useEffect(() => {

        let req_nsr 		= new PostAdminResourceusageRequest();
        req_nsr.header 		= global_data.request_header;


        // Get System Information
        global_data.admin_api.postAdminResourceusage({
            'postAdminResourceusageRequest': req_nsr
        }, (error,postAdminResourceusageResponse, response) => {


            if (error) {
                //render_error("Could not connect to server. Please try again.");
            } else {

                setResourceUsageData(postAdminResourceusageResponse);

                const diskdata = [
                    {
                        "group": "Free Diskspace",
                        "value": (Number(postAdminResourceusageResponse.totalDiskspace)-Number(postAdminResourceusageResponse.usedDiskspace))
                    },
                    {
                        "group": "Used Diskspace",
                        "value": Number(postAdminResourceusageResponse.usedDiskspace)
                    }
                ];

                new DonutChart(document.getElementById("chart_disk_data"), {data: diskdata,
                    options: { "resizable": true,
                    "toolbar": {
                        "enabled": false
                    },
                    "donut": {
                        "center": {
                            "label": "Total",
                            "numberFormatter": nf
                        }
                    },
                    "color": {
                        "scale": {
                            "Used Diskspace":  "#00A68F",
                            "Free Diskspace" : "#DFE3E6"
                        }
                    },
                    "legend": {
                        "enabled": false
                    },
                    "tooltip": {
                        "valueFormatter": nf
                    },
                    "height": "200px"}
                });

                const memorydata = [
                    {
                        "group": "Free Memory",
                        "value": (Number(postAdminResourceusageResponse.totalMemory)-Number(postAdminResourceusageResponse.usedMemory))
                    },
                    {
                        "group": "Used Memory",
                        "value": Number(postAdminResourceusageResponse.usedMemory)
                    }
                ]


                new DonutChart(document.getElementById("chart_memory_data"), {data: memorydata,
                    options: { "resizable": true,
                    "toolbar": {
                        "enabled": false
                    },
                    "donut": {
                        "center": {
                            "label": "Total",
                            "numberFormatter": nf
                        }
                    },
                    "color": {
                        "scale": {
                            "Used Memory":  "#473793",
                            "Free Memory" : "#DFE3E6"
                        }
                    },
                    "legend": {
                        "enabled": false
                    },
                    "tooltip": {
                        "valueFormatter": nf
                    },
                    "height": "200px"}
                });

                const cpudata = [
                    {
                        "group": "Free",
                        "value": (100-Number(postAdminResourceusageResponse.cpuUsagePercentage))
                    },
                    {
                        "group": "Active",
                        "value": Number(postAdminResourceusageResponse.cpuUsagePercentage)
                    }
                ]

                new DonutChart(document.getElementById("chart_cpu_data_current"), {data: cpudata,
                    options: { "resizable": true,
                    "toolbar": {
                        "enabled": false
                    },
                    "donut": {
                        "center": {
                            "numberFontSize": empty_f,
                            "titleFontSize": empty_f
                        }
                    },
                    "color": {
                        "scale": {
                            "Active":  "#3D70B2",
                            "Free" : "#DFE3E6"
                        }
                    },
                    "legend": {
                        "enabled": false
                    },
                    "tooltip": {
                        "valueFormatter": perc_nf
                    },
                    "height": "200px"}
                });
                
                let cpu_per_hour_data = []

                let last_24_average = 0.0
                let tot             = 0

                
                if (postAdminResourceusageResponse.cpuUsageByHour != null) 
                {
                    postAdminResourceusageResponse.cpuUsageByHour.forEach((cpuUsageOfHour) => {

                            tot += 1;
                            last_24_average += cpuUsageOfHour.percentage;
                            cpu_per_hour_data.push({
                                "group": "Cpu Usage",
                                "date":   cpuUsageOfHour.hour,
                                "value":  cpuUsageOfHour.percentage
                            });
                    });

                    last_24_average =  last_24_average/tot;
                    last_24_average = Math.round(last_24_average * 100) / 100;

                    const cpudata_24hours = [
                        {
                            "group": "Free",
                            "value": (100-last_24_average)
                        },
                        {
                            "group": "Active",
                            "value": last_24_average
                        }
                    ]

                    new DonutChart(document.getElementById("chart_cpu_data_24hours"), {data: cpudata_24hours,
                        options: { "resizable": true,
                        "toolbar": {
                            "enabled": false
                        },
                        "donut": {
                            "center": {
                                "numberFontSize": empty_f,
                                "titleFontSize": empty_f
                            }
                        },
                        "color": {
                            "scale": {
                                "Active":  "#5A6872",
                                "Free" : "#DFE3E6"
                            }
                        },
                        "legend": {
                            "enabled": false
                        },
                        "tooltip": {
                            "valueFormatter": perc_nf
                        },
                        "height": "200px"}
                    });

                    

                
                    new LineChart(document.getElementById("chart_cpu_data_by_hour"), {data:cpu_per_hour_data , options: 
                        {
                            
                            "axes": {
                            "bottom": {
                                "mapsTo": "date",
                                "scaleType": "time"
                            },
                            "left": {
                                "mapsTo": "value",                           
                                "scaleType": "linear",
                                "ticks": {
                                    "max": 100,
                                    "min": 0,
                                    "number": 5,
                                    "formatter": perc_nf
                                }
                            }
                            },
                            "legend": {
                                "enabled": false
                            },
                            "color": {
                                "scale": {
                                    "Cpu Usage":  "#00A68F",
                                    
                                }
                            },
                            "grid": {
                                "strokeColor": "#fff",
                                "x": {
                                    "numberOfTicks": 0
                                },
                                "y": {
                                    "numberOfTicks": 5
                                }
                            },
                        
                            "tooltip": {
                                "valueFormatter": perc_nf,
                                
                            },
                            "curve": "curveMonotoneX",
                            "height": "400px"
                        }
                    });
                }


                if (postAdminResourceusageResponse.cpuUsageByDay != null) {
                    let cpu_per_day_data = []

                    postAdminResourceusageResponse.cpuUsageByDay.forEach((cpuUsageOfDay) => {

                        cpu_per_day_data.push({
                                "group": "Cpu Usage",
                                "date":   cpuUsageOfDay.day,
                                "value":  cpuUsageOfDay.percentage
                            });
                    });
                


                    new LineChart(document.getElementById("chart_cpu_data_by_day"), {data:cpu_per_day_data , options: 
                        {
                            
                            "axes": {
                            "bottom": {
                                "mapsTo": "date",
                                "scaleType": "time"
                            },
                            "left": {
                                "mapsTo": "value",                           
                                "scaleType": "linear",
                                "ticks": {
                                    "max": 100,
                                    "min": 0,
                                    "number": 5,
                                    "formatter": perc_nf
                                }
                            }
                            },
                            "legend": {
                                "enabled": false
                            },
                            "color": {
                                "scale": {
                                    "Cpu Usage":  "#3D70B2",
                                    
                                }
                            },
                            "grid": {
                                "strokeColor": "#fff",
                                "x": {
                                    "numberOfTicks": 0
                                },
                                "y": {
                                    "numberOfTicks": 5
                                }
                            },
                        
                            "tooltip": {
                                "valueFormatter": perc_nf,
                                
                            },
                            "curve": "curveMonotoneX",
                            "height": "400px"
                        }
                    });



                }
            }
        }); 
    }, [setResourceUsageData]);


   
    //{resourceUsageData.totalDiskspace}


    return(
        <div style={{width: '100%', height: '100%'}}  id="resource_usage">
            {!resourceUsageData &&
            <Wait description='Fetching resource usage info...' />
           
            }
            {resourceUsageData &&
                <div className="bx--grid">
                    <div className="bx--row">
                            <div className="bx--col">
                                <div className="resource-usage-chart-title">
                                    DISK SPACE
                                </div>                
                                <div id="chart_disk_data" className="resource-usage-chart" >
                                </div>   
                            </div>                         
                            <div className="bx--col">
                                <div className="resource-usage-chart-title">
                                    REAL MEMORY
                                </div>                
                                <div id="chart_memory_data" className="resource-usage-chart" >
                                </div>
                            </div>
                            <div className="bx--col">
                                <div className="resource-usage-chart-title">
                                    CPU LOAD (Current)
                                </div>                
                                <div id="chart_cpu_data_current" className="resource-usage-chart" >
                                </div>
                            </div>
                            <div className="bx--col">
                                <div className="resource-usage-chart-title">
                                    CPU LOAD (24 Hours)
                                </div>                
                                <div id="chart_cpu_data_24hours" className="resource-usage-chart" >
                                {resourceUsageData.cpuUsageByHour == null &&
                                <>
                                NO DATA
                                </>
                                }
                                </div>
                            </div>
                    </div>
                    <div className="bx--row" style={{margin: '40px 0px 40px 0px'}}>
                        <div className="bx--col">
                            <div className="resource-usage-chart-title">
                                        CPU Usages for last 24 hours
                            </div>       
                            <div id="chart_cpu_data_by_hour" className="resource-usage-chart" >
                                        {resourceUsageData.cpuUsageByHour == null &&
                                        <>
                                        NO DATA
                                        </>
                                        }
                            </div>
                        </div>
                        <div className="bx--col">
                        <div className="resource-usage-chart-title">
                                    CPU Usages for last 7 days
                                </div>       
                            <div id="chart_cpu_data_by_day" className="resource-usage-chart" >
                                    </div>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col">
                                <div className="system-information-title">
                                    Total Users
                                </div>                
                                <div className="system-information-description" >
                                {resourceUsageData.totalUsers}
                                </div>
                        </div>
                        <div className="bx--col">
                                <div className="system-information-title">
                                    Total Records on Database
                                </div>                
                                <div className="system-information-description" >
                                {resourceUsageData.databaseSize}
                                </div>
                        </div>
                        <div className="bx--col">
                                <div className="system-information-title">
                                    Server Ping Time
                                </div>                
                                <div className="system-information-description" >
                                {resourceUsageData.serverPingTime} ms
                                </div>
                        </div>
                        <div className="bx--col">
                                <div className="system-information-title">
                                    Average Password Generation Time
                                </div>                
                                <div className="system-information-description" >
                                
                                </div>
                        </div>                                                                       
                    </div>
                </div>
                
            }
        </div>
    

    );

// const data = [
// 	{
// 		"group": "Active",
// 		"value": 75
// 	},
// 	{
// 		"group": "Free",
// 		"value": 25
// 	}
// ];

//     const options = {
//         "title": "CPU",
//         "resizable": true,
//         "donut": {
//             "center": {
//                 "label": "Usage"
//             }
//         },
//         "height": "400px"
//     };

//     React.useEffect(() => {
//     // Grab chart holder HTML element and initialize the chart
//     const chartHolder = document.getElementById("cholder");
//     new DonutChart(chartHolder, {
//         data,
//         options
//     });
//     });


//     return( 
//         <div id="cholder"></div>
    

//     );
}