import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Inputfood from './com/Inputfood';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, tag, mor, eve) {
  return { name, tag, mor, eve };
}

export default function Statusfood() {
  const [rows, setRows] = useState([
    createData('Eclair', 262, '', ''),
    createData('Cupcake', 305, '', ''),
    createData('Gingerbread', 356, '', ''),
  ]);

  const handleSaveInputfood = (data) => {
    const updatedRows = rows.map((row) => {
      if (data.cowName === row.name) {
        return {
          ...row,
          mor: data.selectedTime === 'เช้า' ? data.selectedTime : row.mor,
          eve: data.selectedTime === 'เย็น' ? data.selectedTime : row.eve,
        };
      }
      return row;
    });

    setRows(updatedRows);
    console.log('Updated Data in rows:', updatedRows);
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'EDEDED', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '8px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ชื่อ</StyledTableCell>
              <StyledTableCell align="center">แท็ก</StyledTableCell>
              <StyledTableCell align="center">สถานะเช้า</StyledTableCell>
              <StyledTableCell align="center">สถานะเย็น</StyledTableCell>
              <StyledTableCell align="center">อาหาร</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.tag}</StyledTableCell>
                <StyledTableCell align="center">{row.mor === 'เช้า' ? 'กินแล้ว' : 'ยังไม่กิน'}</StyledTableCell>
                <StyledTableCell align="center">{row.eve === 'เย็น' ? 'กินแล้ว' : 'ยังไม่กิน'}</StyledTableCell>
                <StyledTableCell align="center">
                  <Inputfood cowName={row.name} onSave={handleSaveInputfood} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
