import React from "react";
import { DataGrid } from '@mui/x-data-grid';

import styled from "styled-components";
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  { field: 'image', headerName: 'Image', width: 230 },
  { field: 'name', headerName: 'Name', width: 330 },
  {
    field: 'category',
    headerName: 'Category',
    width: 300,
  },

];

const rows = [
  { id: 1, image: 'Metabollite', name: 'Metabollite', category: 'Amino Acids' },
  { id: 2, image: 'Metabollite', name: 'Metabollite', category: 'Amino Acids' },
  { id: 3, image: 'Metabollite', name: 'Metabollite', category: 'Amino Acids' },
  { id: 4, image: 'Metabollite', name: 'Metabollite', category: 'Amino Acids' },



];
export default function TableComponent() {
  return (
    <TableStyled style={{ height: 440, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </TableStyled>
  );
}



const TableStyled = styled.div`
.MuiDataGrid-columnHeaders {
  background-color: #E2E3E5;
  min-height: 59px !important;
    max-height: 59px !important;
}
.MuiDataGrid-columnHeaderTitle {
  font-size: 20px;
  font-family: "open_sanssemibold";
}
.MuiDataGrid-virtualScrollerRenderZone {
  > div:nth-child(even) {
    background-color: #F8F5F1;
    
  }
}
.MuiDataGrid-cell {
  font-size: 20px;
}
.MuiDataGrid-cell ,.MuiDataGrid-row {
  min-height: 82px !important;
  max-height: 82px !important;
}
.MuiDataGrid-selectedRowCount {
  display: none;
}
.MuiDataGrid-footerContainer {
  justify-content: flex-end;
}
.MuiTablePagination-toolbar  {
  .MuiInputBase-root {
    border: 1px solid #E2E3E5;
    border-radius: 4px;
    color: #404040;
    font-size: 18px;
  }
  .MuiIconButton-root  {
    color: #5F96AC;
}
.MuiIconButton-root {
  .MuiSvgIcon-root {
  width: 1.4em;
    height: 1.4em;
}
}

}
.MuiDataGrid-cell {
  border: none !important;
}
.MuiTablePagination-actions {
  position: absolute;
    right: 0;
    width: 160px;
    display: flex;
    justify-content: center;
    gap: 54px;
    z-index: 2;
}
.MuiDataGrid-root {
  border: none;
}
.MuiTablePagination-displayedRows {
  padding: 0px 42px;
  font-size: 18px;
color: #5F96AC;
}
.MuiDataGrid-footerContainer  {
  border: none;
}

`