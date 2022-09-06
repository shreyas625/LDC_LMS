import * as React from 'react';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';

const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'bank', headerName: 'Bank Name', width: 300 },
    { field: 'accountNo', headerName: 'Account No.', width: 600 }
];

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return <Pagination color="primary" count={pageCount} page={page + 1} onChange={(event, value) => apiRef.current.setPage(value - 1)} />;
}

export default function InvestorsBank() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://192.168.10.21:8080/investor/1/bank/')
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    return (
        <>
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
