import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, MenuItem, Select } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { background } from '@chakra-ui/react';
import { Box } from '@mui/system';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function AddPopUp() {
    const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [gender, SetGender] = React.useState();
    const [user, setUser] = React.useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserSubmit = () => {
        console.log(user);
        fetch('http://192.168.10.21:8080/partner', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'content-type': 'application/json' }
        })
            .then(alert('User Data Inserted'))
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    return (
        <div>
            <Button
                sx={{
                    padding: '10px',
                    height: '40px',
                    minWidth: '40px',
                    borderRadius: '50%',
                    background: '#673ab7',
                    boxShadow: 'rgba(103, 58, 183, 0.3) 0px 19px 38px, rgba(103, 58, 183, 0.22) 0px 15px 12px',
                    marginBottom: 1,
                    '&:hover': { backgroundColor: 'black' }
                }}
                variant="filled"
                onClick={handleClickOpen}
            >
                <AddCircleIcon sx={{ color: 'white', fontSize: '1.3em' }} />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: '1.5em', fontFamily: 'Inter', fontWeight: 600 }}>Add New Entry</DialogTitle>
                <DialogContentText paddingLeft="26px">you can add new entries here.</DialogContentText>
                <DialogContent
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingLeft: '60px'
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField name="firstName" onChange={handleChange} required id="outlined" label="First Name" />
                            <TextField name="middleName" onChange={handleChange} required id="outlined" label="Middle Name" />
                            <TextField name="lastName" onChange={handleChange} required id="outlined" label="Last Name" />
                            <TextField name="address" onChange={handleChange} required id="outlined" label="Address" />
                            <TextField name="panNo" onChange={handleChange} required id="outlined" label="PAN No." />
                            <TextField name="aadharNo" onChange={handleChange} required type="" id="outlined" label="Aadhar No." />
                            <TextField name="occupation" onChange={handleChange} required type="text" id="outlined" label="Occupation" />
                            <TextField name="phone" onChange={handleChange} required type="number" id="outlined" label="Contact No." />
                            <TextField name="email" onChange={handleChange} required type="email" id="outlined" label="Email" />
                            <TextField name="dateOfBirth" onChange={handleChange} required type="date" id="outlined" />
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                sx={{ width: '140px' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                                name="gender"
                            >
                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </Select>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(handleClose, () => handleUserSubmit())}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
