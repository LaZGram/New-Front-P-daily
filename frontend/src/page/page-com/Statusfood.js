import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Inputfood from './com/Inputfood';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

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
    createData('Eclair', '005', '', ''),
    createData('Cupcake', '003', '', ''),
    createData('Gingerbread', '002', '', ''),
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

  const renderStatusChip = (status) => {
    if (status === 'เช้า' || status === 'เย็น') {
      return (
        <Chip
          icon={<CheckCircleIcon style={{ color: '#30BE96' }} />}
          label=""
          color="success"
          variant="outlined"
        />
      );
    }
    return (
      <Chip
        icon={<CancelIcon style={{ color: '#f44336' }} />}
        label=""
        color="error"
        variant="outlined"
      />
    );
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#EDEDED', borderRadius: '8px' }}>
      <TableContainer component={Paper} style={{ border: '2px solid #dddddd' }}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
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
                {/* ใช้ Chip สำหรับแสดง Tag */}
                <StyledTableCell align="center">
                  <Chip label={row.tag} color="primary" variant="outlined" style={{ borderRadius: '16px' }} />
                </StyledTableCell>
                {/* ใช้ Chip สำหรับแสดงสถานะเช้า */}
                <StyledTableCell align="center">
                  {renderStatusChip(row.mor)}
                </StyledTableCell>
                {/* ใช้ Chip สำหรับแสดงสถานะเย็น */}
                <StyledTableCell align="center">
                  {renderStatusChip(row.eve)}
                </StyledTableCell>
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
