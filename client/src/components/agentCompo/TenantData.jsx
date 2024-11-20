import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "Tenant ID", width: 200 },
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "date", headerName: "Date", width: 200 }, 
  {
    field: "age",
    headerName: "Age",
    type: "number",
    date: 11/20/2024,
    width: 200,
  },
];

const rows = [
  { id: "OS/25YE-882358/NG", fullName: "Lukman Adeoti",   date: 11/20/2024, age: 160 },
  
  {
    id: "OS/58TT-882358/NG",
    fullName: "Ogunmakin Sunday",
      date: 11/20/2024,
    age: 42,
  },
  {
    id: "OS/25AT-882358/NG",
    fullName: "Lannister",
      date: 11/20/2024,
    age: 45,
  },
  {
    id: "OS/25TT-882358/NG",
    fullName: "Targaryen",
      date: 11/20/2024,
    age: 100,
  },
  {
    id: "OS/25TT-882358/NG",
    fullName: "Melisandre",
      date: 11/20/2024,
    age: 150,
  },
  {
    id: "OS/25TT-882358/NG",
    fullName: "Clifford",
      date: 11/20/2024,
    age: 44,
  },
  {
    id: "OS/25TT-882358/NG",
    fullName: "Oyeniran Seyi",
    date: 11/20/2024,
    age: 36,
  },

];

const paginationModel = { page: 0, pageSize: 5 };

export default function TenantData() {
  return (
    <>
      <Box p={4}>
        <Typography fontSize={25} fontWeight={700} color={"rgba(0, 0, 0, 0.7)"}>
          Tenant Datas
        </Typography>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Box>
    </>
  );
}
