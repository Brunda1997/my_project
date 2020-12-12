import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";


export const Sidebar=[
    {
        title:"Dashboard",
        path:'/',
        icons:<MdIcons.MdDashboard/>,
        cName:'nav-text'
    },
    {
        title:"Lorem",
        path:'/loreum',
        icons:<IoIcons.IoIosApps/>,
        cName:'nav-text'
    },
    {
        title:"Ipsum",
        path:'/setting',
        icons:<AiIcons.AiFillSetting/>,
        cName:'nav-text'
    },
]