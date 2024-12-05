import React, { useState } from 'react';
import Graphfarmer from "./page-com/graphfarmer";
import Graphmilk from './page-com/graphmilk';

// Function to create mockup data
function createData(name, date, time, value) {
  return { name, date, time, value };
}

// Mockup data
const milkData = [
  createData('วัวพันธุ์อี', '23-11-2023', '11:45', '+80.00 L'),
  createData('วัวพันธุ์ดี', '23-11-2023', '10:22', '+65.00 L'),
  createData('วัวพันธุ์ซี', '22-11-2023', '14:55', '+15.00 L'),
  createData('วัวพันธุ์บี', '21-11-2023', '09:30', '+50.00 L'),
  createData('วัวพันธุ์เอ', '21-11-2023', '13:15', '+70.00 L'),
];

const moneyData = [
  createData('วัวพันธุ์อี', '23-11-2023', '11:45', '+80.00 บ.'),
  createData('วัวพันธุ์ดี', '23-11-2023', '10:22', '+65.00 บ.'),
  createData('วัวพันธุ์ซี', '22-11-2023', '14:55', '+15.00 บ.'),
  createData('วัวพันธุ์บี', '21-11-2023', '09:30', '+50.00 บ.'),
  createData('วัวพันธุ์เอ', '21-11-2023', '13:15', '+70.00 บ.'),
];

const Milk = () => {
  const [isMilkView, setIsMilkView] = useState(true); // State to toggle between milk and money views

  // Styles
  const divStyle = {
    color: '#082459',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    wordWrap: 'break-word',
  };

  const divStylein = {
    padding: '12px',
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    wordWrap: 'break-word',
  };

  const entryStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    padding: '8px 12px',
    marginBottom: '8px',
    borderRadius: '8px',
  };

  const dateStyle = {
    margin: '12px',
    color: '#082459',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 700,
  };

  const nameStyle = {
    color: '#082459',
    fontSize: '18px',
    fontWeight: 700,
  };

  const amountStyle = {
    color: '#30be96',
    fontSize: '18px',
    fontWeight: 700,
  };

  const timestampStyle = {
    color: '#555',
    fontSize: '14px',
  };

  const divStyleLine = {
    borderBottom: '2px solid #dddddd',
  };

  // Function to render grouped data by date
  const renderEntriesByDate = (data) => {
    const uniqueDates = [...new Set(data.map((row) => row.date))];
    return uniqueDates.map((date, index) => (
      <div key={index}>
        <div style={dateStyle}>{date}</div>
        {data
          .filter((row) => row.date === date)
          .map((row, index) => (
            <div key={index} style={entryStyle}>
              <div>
                <p style={nameStyle}>{row.name}</p>
                <p style={timestampStyle}>{row.time}</p>
              </div>
              <p style={amountStyle}>{row.value}</p>
            </div>
          ))}
      </div>
    ));
  };

  return (
    <div style={{ margin: '16px' }}>
      {/* Toggle Switch */}
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <button
          onClick={() => setIsMilkView(true)}
          style={{
            backgroundColor: isMilkView ? '#0C3888' : '#EDEDED',
            color: isMilkView ? '#fff' : '#000',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            marginRight: '8px',
          }}
        >
          น้ำนม
        </button>
        <button
          onClick={() => setIsMilkView(false)}
          style={{
            backgroundColor: !isMilkView ? '#30BE96' : '#EDEDED',
            color: !isMilkView ? '#fff' : '#000',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
          }}
        >
          รายรับ
        </button>
      </div>

      {/* Graph Section */}
      <div style={{ marginTop: '12px' }}>
        {isMilkView ? <Graphmilk /> : <Graphfarmer />}
      </div>

      {/* Dynamic Data Section */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          marginTop: '12px',
        }}
      >
        <div style={{ backgroundColor: '#0C3888', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
          <div style={divStylein}>{isMilkView ? 'รายการน้ำนมล่าสุด' : 'รายการรายรับล่าสุด'}</div>
        </div>
        <div style={divStyleLine}></div>
        {isMilkView ? renderEntriesByDate(milkData) : renderEntriesByDate(moneyData)}
      </div>
    </div>
  );
};

export default Milk;
