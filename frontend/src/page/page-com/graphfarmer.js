import React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Text } from 'recharts';
import './graph.css';

const data = [
  { label: '09/2023', income: 3081, predicter: null },
  { label: '10/2023', income: null, predicter: 3201 },
  { label: '11/2023', income: null, predicter: 3765 },
  { label: '12/2023', income: null, predicter: 3205 },
  { label: '01/2024', income: null, predicter: 2705 },
  { label: '02/2024', income: null, predicter: 2402 },
  { label: '03/2024', income: null, predicter: 2159 },
  { label: '04/2024', income: null, predicter: 1634 },
  { label: '05/2024', income: null, predicter: 1576 },
  { label: '06/2024', income: null, predicter: 1402 },
];

export default function Graphfarmer() {
  return (
    <div className="row" style={{ marginTop: '16px' }}>
      <div className="col-md-12">
        <div style={{ fontFamily: 'Athiti, sans-serif', fontWeight: 'bold', fontSize: '36px', marginLeft: '8px' }}>กราฟแสดงรายรับต่อเดือน</div>
      </div>
      <div className="section col-md-6">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 15, bottom: 40, left: 40 }}>
              <XAxis
                dataKey="label"
                fontSize={12}
                angle={-45}
                textAnchor="end"
                label={{ value: "เดือน (Month)", position: "insideBottom", offset: -35, fontSize: 16 }}
              />
              <YAxis
                fontSize={12}
                label={{ value: "จำนวนเงิน (Income)", angle: -90, position: "insideLeft", fontSize: 16, offset: 10 }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip contentStyle={{ fontSize: '16px' }} />
              <Legend
                verticalAlign="top"
                iconSize={12}
                formatter={(value) => <span style={{ fontSize: '20px' }}>{value}</span>}
              />
              <Bar dataKey="income" name="รายรับ" fill="#30BE96" />
              <Bar dataKey="predicter" name="อนาคต" fill="#c7c8c9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
