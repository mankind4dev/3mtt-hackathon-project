import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "OS/86TT-800058/NG",
        amount: 90000,
      },
      {
        date: "2024-10-20",
        customerId: "OS/26TT-910058/NG",
        amount: 70500,
        hostel: "A room self-con"
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tanant ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Initial Amount</TableCell>
                    <TableCell align="right">Total Amount paid (#)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 1) / 1}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Ogunmakin Sunday", "OS/25TT-882358/NG", 159, 6.0, 24, 4.0, 3.99),
  createData("Lukman Adeoti", "OS/25TT-882359/NG", 237, 9.0, 37, 4.3, 4.99),
  createData("Bamidele Oluwanifemi", "OS/25TT-882360/NG", 262, 16.0, 24, 6.0, 3.79),
  createData("Adebanke Ojufun", "OS/25TT-882361/NG", 305, 3.7, 67, 4.3, 2.5),
  createData("Oladele Taiwo", "OS/25TT-882362/NG", 356, 16.0, 49, 3.9, 1.5),
  createData("Oluwadare Daniel", "OS/25TT-882363/NG", 356, 16.0, 49, 3.9, 1.5),
];

export default function AgentTable() {
  return (
    <>
      <Box p={4}>
        <Typography fontSize={25} fontWeight={700} color={"rgba(0, 0, 0, 0.7)"}>
          Agents Data
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Agent Name</TableCell>
                <TableCell align="right">Apartments</TableCell>
                <TableCell align="right">Agent ID</TableCell>
                <TableCell align="right">Tenants</TableCell>
                <TableCell align="right">Hostel</TableCell>
                <TableCell align="right">Hall</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
