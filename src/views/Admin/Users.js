import * as React from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddPopUp from 'views/addpopup/AddPopUp';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import { darken, lighten } from '@mui/material/styles';
import clsx from 'clsx';
import Search from 'views/search/Search';
import UpdatePopUp from 'views/updatepopup/UpdatePopUp';

const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
    event.stopPropagation();
};

const handleRowClick = (param, event) => {
    event.stopPropagation();
};

const getBackgroundColor = (color, mode) => (mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6));

const getHoverBackgroundColor = (color, mode) => (mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5));

const columns = [
    { field: 'id', headerName: 'id', width: 200 },
    { field: 'title', headerName: 'email', width: 200 },
    { field: 'body', headerName: 'status', width: 200 },
    {
        headerName: 'Update/Edit',
        renderCell: (cellValues) => {
            return <UpdatePopUp />;
        }
    }
];

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return <Pagination color="primary" count={pageCount} page={page + 1} onChange={(event, value) => apiRef.current.setPage(value - 1)} />;
}

export default function Users() {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) => setData(data));
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
                        width: 1000,
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

            <Box
                sx={{
                    display: 'inline-flex'
                }}
            >
                <AddPopUp />
                <Search setData={setData} />
            </Box>

            <Box
                sx={{
                    height: 400,
                    width: '100%',
                    '& .super-app-theme--cell': {
                        backgroundColor: 'rgba(224, 183, 60, 0.55)',
                        color: '#1a3e72',
                        fontWeight: '600'
                    },
                    '& .super-app.false': {
                        backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#1a3e72',
                        fontWeight: '600'
                    },
                    '& .super-app.true': {
                        backgroundColor: '#d47483',
                        color: '#1a3e72',
                        fontWeight: '600'
                    }
                }}
            >
                <DataGrid
                    sx={{
                        boxShadow: 'rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px',
                        backgroundColor: 'white',
                        border: 'None',
                        borderRadius: 5,
                        overflowY: 'hidden',
                        fontFamily: 'Inter',
                        padding: 3
                    }}
                    pagination
                    rows={data}
                    columns={columns}
                    pageSize={12}
                    components={{ Toolbar: GridToolbar, Pagination: CustomPagination }}
                    checkboxSelection
                    onCellClick={handleCellClick}
                    onRowClick={handleRowClick}
                    rowsPerPageOptions={[20, 30, 50]}
                    getRowId={(row) => row.id}
                    getRowClassName={(params) => `super-app-theme--${params.row.status}`}
                    filterModel={{
                        items: [{ columnField: 'status', operatorValue: 'isAnyOf', value: 'Active' }]
                    }}
                />
            </Box>
        </>
    );
}
