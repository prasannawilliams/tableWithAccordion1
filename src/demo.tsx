import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  visible: boolean,
  parentId: number
) {
  return { id, name, calories, fat, carbs, protein, visible, parentId };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0, true, 0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3, false, 1),
  createData(3, "Eclair", 262, 16.0, 24, 6.0, false, 1),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3, true, 0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9, true, 0),
  createData(6, "Gingerbread2", 356, 16.0, 49, 3.9, true, 0),
  createData(7, "Distribution", 356, 16.0, 49, 3.9, true, 0),
  createData(8, "Gingerbread4", 356, 16.0, 49, 3.9, true, 7),
  createData(9, "Gingerbread5", 356, 16.0, 49, 3.9, true, 7),
  createData(10, "Gingerbread6", 356, 16.0, 49, 3.9, true, 0)
];

export default function BasicTable() {
  const [rowData, setRowData] = React.useState(rows);

  const accordionMet = (rowId) => {
    const newData = rowData.map((rData) => {
      console.log(rData, rData.visible);
      if (rData.parentId === rowId) {
        return {
          ...rData,
          visible: rData.visible === true ? false : true
        };
      } else return rData;
    });
    console.log("newData", newData);
    setRowData(newData);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => {
            return (
              <>
                {row.visible && (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => accordionMet(row.id)}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
