import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Delete, Label } from '@mui/icons-material';

export default function Search({ setData }) {
    const [open, setOpen] = React.useState(false);
    const [status, SetStatus] = React.useState();
    const [searchQ, setSearchQ] = React.useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchQ({ ...searchQ, [name]: value });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        var qString = '';

        for (var item in searchQ) {
            if (searchQ[item] != undefined) {
                qString += '?' + item + '=' + searchQ[item] + '&';
            }
        }
        console.log(qString);
        setSearchQ({});
        fetch(`http://192.168.10.21:8080/partner/search${qString}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };

    return (
        <Box sx={{ display: 'inline-flex', marginRight: '20px' }}>
            <Fab
                sx={{ padding: '10px', height: '40px', maxWidth: '40px', borderRadius: '50%' }}
                color="secondary"
                aria-label="search"
                onClick={handleClickOpen}
            >
                <SearchRoundedIcon sx={{ color: 'white', fontSize: '1.3em' }} />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ fontSize: '1.5em', fontFamily: 'Inter', fontWeight: 600 }}>search.</DialogTitle>
                <DialogContentText paddingLeft="26px">you can search entries here.</DialogContentText>
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
                            <TextField
                                sx={{ border: 'None' }}
                                name="id"
                                type="text"
                                onChange={handleChange}
                                required
                                id="outlined"
                                label="ID"
                            />
                            <TextField
                                type="text"
                                defaultValue=""
                                name="uniqueId"
                                onChange={handleChange}
                                required
                                id="outlined"
                                label="Unique Id"
                            />
                            <TextField
                                type="text"
                                defaultValue=""
                                name="firstName"
                                onChange={handleChange}
                                required
                                id="outlined"
                                label="First Name"
                            />
                            <TextField
                                type="text"
                                defaultValue=""
                                name="lastName"
                                onChange={handleChange}
                                required
                                id="outlined"
                                label="Last Name"
                            />
                            <TextField
                                defaultValue=""
                                name="contactNo"
                                onChange={handleChange}
                                required
                                id="outlined"
                                label="Contact No."
                            />
                            <TextField defaultValue="" name="panNo" onChange={handleChange} required id="outlined" label="PAN No." />

                            <Select
                                sx={{ width: '140px', marginLeft: '10px', marginTop: '10px', color: 'black' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                onChange={handleChange}
                                name="status"
                            >
                                <MenuItem default hidden selected disabled>
                                    Status
                                </MenuItem>
                                <MenuItem value={'Active'}>Active</MenuItem>
                                <MenuItem value={'Inactive'}>Inactive</MenuItem>
                            </Select>
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Search</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
