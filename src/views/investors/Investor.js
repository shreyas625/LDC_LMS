import * as React from 'react';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import AddPopUp from 'views/addpopup/AddPopUp';
import Search from 'views/search/Search';
import { Box } from '@mui/system';
import UpdatePopUp from 'views/updatepopup/UpdatePopUp';

const columns = [
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'occupation', headerName: 'Occupation', width: 300 },
    { field: 'status', headerName: 'Status', width: 100 },
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

export default function Investor() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://192.168.10.21:8080/investor/2')
            .then((res) => res.json())
            .then((res) => setData([...data, res]));
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'inline-flex'
                }}
            >
                <AddPopUp />
                <Search />
            </Box>

            <div style={{ height: 400, width: '100%' }}>
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
                    rowsPerPageOptions={[20, 30, 50]}
                />
            </div>
        </>
    );
}
