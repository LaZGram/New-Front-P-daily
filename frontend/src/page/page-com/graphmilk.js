import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './graph.css';
import milkData from './milkData'

const processedData = milkData.map(user => ({
  ...user,
  sumweight: user.sumweight !== 0 ? user.sumweight : null,
  predicter: user.predicter !== 0 ? user.predicter : null
}));

export default function Graphmilk() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1></h1>
        <div style={{ fontFamily: 'Athiti, sans-serif', fontWeight: 'bold', fontSize: '36px' , marginLeft: '8px' }}>กราฟแสดงจำนวนน้ำนมต่อวัน</div>
        <h2></h2>
      </div>
      <div className="section col-md-6">
        <div className="section-title">ปริมาณนม (ลิตร)</div>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={processedData} margin={{ top: 15, right: 15, bottom: 15, left: 0 }}>
              <Tooltip contentStyle={{ fontSize: '16px' }} />
              <XAxis dataKey="label" fontSize={11} angle={-40} textAnchor="end" />
              <YAxis fontSize={12} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend
                verticalAlign="top"
                iconSize={12}
                formatter={(value) => <span style={{ fontSize: '20px' }}>{value}</span>}
              />
              {/* Line for sumweight */}
              <Line
                type="basis"
                dataKey="sumweight"
                stroke="#237bba"
                strokeWidth={2}
                dot={false}
                name="จริง"
              />
              {/* Line for predicter */}
              <Line
                type="basis"
                dataKey="predicter"
                stroke="#808080"
                strokeWidth={2}
                dot={false}
                name="อนาคต"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}