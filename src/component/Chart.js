import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import Notepad from './Notepad';
import './Chart.css';
import Tab from './Tabs';




const Chart=(data)=>{
   

    return(
        <>
        <div className="linechart" >
            <Line
            data={{
               labels:['Admin','teacher','student'],
               datasets:[
                   {
                       label:"admin",
                       data:[12,19,3],
                       backgroundColor:'#F4D03F ',
                       borderColor: '#F4D03F ',
                       borderWidth:2,
                       fill:false,
                   },
                   
                   {
                    label:"Teacher",
                    data:[15,20,11],
                    backgroundColor:'#D1F2EB  ',
                    fill:false,
                    borderColor:'#D1F2EB ',
                     
                    borderWidth:2,
                },
                {
                    label:"Student",
                    data:[25,14,12],
                    backgroundColor:'#FADBD8',
                    fill:false,
                    borderColor:'#FADBD8',
                    borderWidth:2,
                },
                
                
               ],
           }}
           height={200}
           width={200}
           options={{
               maintainAspectRatio:false,
               scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        
                    }
                }]
            }
            }}
           ></Line>
           <Tab/>
        </div>

        <div className="line2" >
        <Notepad/>
        
            <Line
            data={{
               labels:['Admin','teacher','student'],
               datasets:[
                   {
                       label:"admin",
                       data:[12,19,3],
                       backgroundColor:'#F4D03F ',
                       borderColor: '#F4D03F ',
                       borderWidth:2,
                   },
                   
                  
               
                
               ],
           }}
           height={200}
           width={100}
           options={{
               maintainAspectRatio:false,
               scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
            }}
           ></Line>
           
           </div>
            
           
           
        </>
    )
}

export default Chart;