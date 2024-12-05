import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaStar } from "react-icons/fa";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.black,
    fontWeight: 'bold',
    fontSize: 16,
    borderBottom: '2px solid #dddddd',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const divStylein = {
  marginLeft: '8px',
  marginTop: '12px',
  color: '#ffffff',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word',
  padding: '8px',
};

const divStyleLine = {
  borderBottom: '2px solid #dddddd',
};

function createData(name, tag, milkVolume, date) {
  return { name, tag, milkVolume, date };
}

const rows = [
  createData('วัวพันธุ์อี', 'Tag005', '19 ลิตร', '28-10-2024'),
  createData('วัวพันธุ์ดี', 'Tag004', '22 ลิตร', '01-11-2024'),
  createData('วัวพันธุ์ซี', 'Tag003', '18 ลิตร', '05-11-2024'),
  createData('วัวพันธุ์บี', 'Tag002', '25 ลิตร', '10-11-2024'),
  createData('วัวพันธุ์เอ', 'Tag001', '20 ลิตร', '12-11-2024'),
];

export default function Suggestcow() {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#0c3888', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <div style={{...divStylein}}>
        แนะนำวัวพันธุ์ดี <FaStar style={{ color: '#FFC700' }} />
      </div>
      {/* <div style={divStyleLine}></div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ชื่อ</StyledTableCell>
              <StyledTableCell align="center">แท็ก</StyledTableCell>
              <StyledTableCell align="center">ปริมาณนม (ลิตร)</StyledTableCell>
              <StyledTableCell align="center">วัน-เดือน-ปี</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.tag}</StyledTableCell>
                <StyledTableCell align="center">{row.milkVolume}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
