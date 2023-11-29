import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField';
const Order = () => {
    const [orderLost, setOrderLost] = useState(false);
    const orderLostUpdate = (e) => {
        const newValue = e.target.value === "true";
        setOrderLost(newValue);
    }
    return (
        <>
            order lost status
            <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value={true} control={<Radio />} label="Order lost" onChange={orderLostUpdate} />
                <FormControlLabel value={false} control={<Radio />} label="order gained" onChange={orderLostUpdate} />
            </RadioGroup>
            {orderLost ? <TextField id="outlined-basic" 
            label="reason" variant="outlined" 
            multiline
        rows={7} 
            sx={{ width: "200px", height: "150px" }} /> : <div style={{ display: "none" }}></div>}
        </>
    )
}

export default Order;