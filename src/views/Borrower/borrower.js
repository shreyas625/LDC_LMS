import * as React from 'react';
import { DataGrid, GridToolbar, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';

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

export default function Borrower() {
    const [tableData, setTableData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
            .then((data) => setTableData(data));
    }, []);

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    pagination
                    rowsPerPageOptions={[5]}
                    rows={tableData}
                    columns={columns}
                    pageSize={10}
                    components={{ Toolbar: GridToolbar, Pagination: CustomPagination }}
                />
            </div>
        </>
    );
}
