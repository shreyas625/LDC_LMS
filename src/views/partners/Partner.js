import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddPopUp from 'views/addpopup/AddPopUp';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

export default function CustomizedTables() {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [activateRowOnFocus, setActivateRowOnFocus] = React.useState(true);

    React.useEffect(() => {
        fetch('http://192.168.10.21:8080/partner/1')
            .then((res) => res.json())
            .then((res) => setData([...data, res]));
    }, []);

    return (
        <>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        p: 4
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        more information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        below you can view your other details.
                    </Typography>
                </Box>
            </Modal>
            <AddPopUp />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Gender</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="right">More Info</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((partner) => (
                            <StyledTableRow key={partner.uniqueId}>
                                <StyledTableCell>{partner.id}</StyledTableCell>
                                <StyledTableCell>{partner.firstName}</StyledTableCell>
                                <StyledTableCell>{partner.gender}</StyledTableCell>
                                <StyledTableCell>{partner.status}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button
                                        onClick={handleOpen}
                                        sx={{
                                            backgroundColor: '#e3f2fd',
                                            color: '#616161',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                color: '#ffffff',
                                                boxShadow: 'none'
                                            }
                                        }}
                                        align="right"
                                        variant="contained"
                                    >
                                        more info.
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
