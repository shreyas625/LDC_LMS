import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import AddPopUp from 'views/addpopup/AddPopUp';
import Search from 'views/search/Search';
import { Box } from '@mui/system';

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

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 }
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
        fetch('http://192.168.10.21:8080/investor/1')
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
                    rowsPerPageOptions={[5]}
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    components={{ Toolbar: GridToolbar, Pagination: CustomPagination }}
                />
            </div>
        </>
    );
}
