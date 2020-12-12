import React,{useState} from 'react';
import {Tabs,Typography,Tab,Paper,Box} from '@material-ui/core';
import './Tabs.css';
const Tabslist=()=>{
   const [values,setvalue]=useState(0);
    const handleTabs=(e,val)=>{
        console.log(val);
        setvalue(val)
    }
    return(
        <div className="tabs">
            
            {/* <AppBar className="appbar"   position="static" > */}
                <Tabs className="tabs1" value={values} onChange={handleTabs}>
                    <Tab label="Notification"/>
                    <Tab label="Events"/>
                </Tabs>
            {/* </AppBar> */}
            
            
            <Tabpanel value={values} index={0}>
                <Paper className="paper">   
            <Box p={1} className="box " style={{backgroundColor:'#F4D03F'}}>
                <Typography className="ty" variant="h6">
                    Admin<p>Please Present Tommorow</p>  </Typography></Box></Paper></Tabpanel>
                
                
                
            
            
            <Tabpanel value={values} index={0}><Paper className="paper">   
            <Box p={1} className="box"  style={{backgroundColor:'#D1F2EB'}}>
                <Typography className="ty" variant="h6">
                    Teacher <p> Independence Days</p> </Typography></Box></Paper></Tabpanel>
            <Tabpanel value={values} index={0}><Paper className="paper">   
            <Box p={1} className="box" style={{backgroundColor:'#D1F2EB'}}>
                <Typography className="ty" variant="h6">
                    Teacher <p>WE are present</p>  </Typography></Box></Paper></Tabpanel>

            <Tabpanel value={values} index={1}><Paper className="paper">   
            <Box p={1} className="box" style={{backgroundColor:'#D1F2EB'}}>
                <Typography className="ty" variant="h6">
                    Teacher <p>Events on Tommorow</p> </Typography>
                    
                    </Box></Paper></Tabpanel>
            
        </div>
    );
}

const Tabpanel=(props)=>{
    const {children,index,value}=props
    return(
        <div>
           {
               value===index && (
                   <h1>{children}</h1>
               )
           }
           </div>
        
    )
}
export default Tabslist;