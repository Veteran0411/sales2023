import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import Order from "./Order";

const FormComponent = () => {
    const [value, setValue] = React.useState(2);
    const [EnquiryStatus,setEnquiryStatus]=useState("")
    const [scheduleValue,setScheduleValue]=useState(true)
    const EnquiryStatusUpdate=(e)=>{
        setEnquiryStatus(e.target.value);
    }

    const scheduleUpdate=(e)=>{
        const newValue = e.target.value === "true";
        setScheduleValue(newValue);
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Customer Name" variant="filled"/>
                <TextField id="filled-basic" label="Phone number" variant="filled" type="number" />
                <TextField id="filled-basic" label="email" variant="filled" type="email" />
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(event.target.value);
                    }}
                />

                {/* enquiry status logic */}
                <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    
                >
                    <FormControlLabel value="HOT" control={<Radio />} label="HOT" onChange={EnquiryStatusUpdate}/>
                    <FormControlLabel value="WARM" control={<Radio />} label="WARM" onChange={EnquiryStatusUpdate}/>
                    <FormControlLabel value="COLD" control={<Radio />} label="COLD" onChange={EnquiryStatusUpdate}/>
                </RadioGroup>
                
                {/* schedule value logic */}
                "schedule"
                <RadioGroup
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    
                >
                    <FormControlLabel value={true} control={<Radio />} label="Open" onChange={scheduleUpdate}/>
                    <FormControlLabel value={false} control={<Radio />} label="closed" onChange={scheduleUpdate}/>
                </RadioGroup>

                {scheduleValue?"":<Order/>}
            </Box>
        </>
    )
}

export default FormComponent;