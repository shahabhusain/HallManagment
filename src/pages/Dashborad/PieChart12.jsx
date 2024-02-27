import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChart12 extends PureComponent {
  render() {
    return (
      <div className="w-[400px] h-[250px]">
        <h1 className="text-[20px] font-bold">Paid/Free Users</h1>
        <ResponsiveContainer width="100%" height="100%" className="flex flex-col mt-5 items-center">
        <div className=' flex items-center gap-3'>
        <h1 className=' text-[#0088FE] font-bold'>Hall 40%</h1>
        <h1 className=' text-[#00C49F] font-bold'>Users 30%</h1>
        <h1 className=' text-[#FFBB28] font-bold'>Owners 30%</h1>
         </div>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              
            </Pie>
            
          </PieChart>
       
        </ResponsiveContainer>
      </div>
    );
  }
}

export default PieChart12;
