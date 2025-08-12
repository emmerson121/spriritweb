import React from "react";
import './admin.css';
import PropTypes from 'prop-types';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Piedata from './Piedata.tsx';

const overviewData = [
  {dataCode: 'TX1001', dataType: 'Airtime', dataNetwork: 'MTN', dataName: 'Chinedu Okafor', dataNumber: '08131234567', dataAmount: '500', dataStatus: 'Success', dataDate: '2025-06-27'},
  {dataCode: 'TX1002', dataType: 'Data', dataNetwork: 'Airtel', dataName: 'Grace Johnson', dataNumber: '08053456789', dataAmount: '1,000', dataStatus: 'Pending', dataDate: '2025-06-26'},
  {dataCode: 'TX1003', dataType: 'DSTV', dataNetwork: 'Movies', dataName: 'Kingsley U.', dataNumber: '1023456789', dataAmount: '7,500', dataStatus: 'Failed', dataDate: '2025-06-25'},
  {dataCode: 'TX1004', dataType: 'GOTV', dataNetwork: 'Comics', dataName: 'Blessing A.', dataNumber: '1045678912', dataAmount: '2,500', dataStatus: 'Success', dataDate: '2025-06-24'},
  {dataCode: 'TX1005', dataType: 'Startimes', dataNetwork: 'Football', dataName: 'Isaiah C.', dataNumber: '3009876543', dataAmount: '3,000', dataStatus: 'Pending', dataDate: '2025-06-23'}
  
]

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 600, pv: 2600, amt: 2600},
  {name: 'Page C', uv: 400, pv: 2800, amt: 2800},
  {name: 'Page D', uv: 1000, pv: 3000, amt: 3000},
  {name: 'Page E', uv: 900, pv: 2000, amt: 2000}
];



// type TooltipPayload = ReadonlyArray<any>;

// type Coordinate = {
//   x: number;
//   y: number;
// };

// type PieSectorData = {
//   percent?: number;
//   name?: string | number;
//   midAngle?: number;
//   middleRadius?: number;
//   tooltipPosition?: Coordinate;
//   value?: number;
//   paddingAngle?: number;
//   dataKey?: string;
//   payload?: any;
//   tooltipPayload?: ReadonlyArray<TooltipPayload>;
// };

// type GeometrySector = {
//   cx: number;
//   cy: number;
//   innerRadius: number;
//   outerRadius: number;
//   startAngle: number;
//   endAngle: number;
// };

// type PieLabelProps = PieSectorData & GeometrySector & {
//     tooltipPayload?: any;
//   };


const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Optional: wrap label function in a component to apply PropTypes
const CustomizedLabel = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  } = props;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const angle = midAngle ?? 0;
  const x = cx + radius * Math.cos(-angle * RADIAN);
  const y = cy + radius * Math.sin(-angle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

CustomizedLabel.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  midAngle: PropTypes.number,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  percent: PropTypes.number,
};

const AdminOverview = () =>{

    const adminOver = [
    {adminType: 'Total Revenue', adminValue: '#1,200,000'},
    {adminType: 'Total Profits', adminValue: '8,450'},
    {adminType: 'Total Users', adminValue: '2,139'},
    {adminType: 'Active Users', adminValue: '1,200'},
    {adminType: 'Airtime Sales', adminValue: '#20,000'},
    {adminType: 'Total F.N.P', adminValue: '400'},
    {adminType: 'Total Freebies D', adminValue: '2,150'},
    {adminType: 'Data Sales', adminValue: '5,000'}
]



// const renderCustomAxisTick = ({ x, y, payload }) => {
//   let path = '';

//   switch (payload.value) {
//     case 'Page A':
//       path = 'M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6';
//       break;
//     case 'Page B':
//       path = 'M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z';
//       break;
//     default:
//       path = '';
//   }
// }
    
    return(
        <div className="over3">
            <div className="heading">Overview</div>

            <div className='wall'>
            {adminOver.map((app, id) =>(
                <div className='wall1' key={id}>
                    <div className='wallet2'>
                        
                    <div>
                            <div className='total'>{app.adminType}</div>
                            <div className='ref1'>{app.adminValue}</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="">
              <div className="chartDetails">
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="My data series name" />
    <XAxis dataKey="name" />
    <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
    <Legend align="right" />
    <Tooltip />
  </LineChart>
              </div>

              <div>
                <Piedata />
              </div>
            </div>

            {/* <div>
              <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data2}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={<CustomizedLabel />}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data2.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
            </div> */}

            <div className="mainproduct">
                  <div className="sales">Product Sales</div>
                  <div className="sales1">See all</div>
                </div>

            <div className='scroll1'>
            <div className='scroll2'>
            <div className="firsttable">
              <div className="secondtable">
                <div className="size1">Product ID</div>
                <div className="size1">Product Name</div>
                <div className="size1">Product Descript.</div>
                <div className="size1">Product User</div>
                <div className="size1">Phone</div>
                <div className="size1">Amount</div>
                <div className="size1">Status</div>
                <div className="size1">Date</div>
              </div>
              <div>
                
              {overviewData.map((app,id) =>(
                <div className="thirdtable" key={id}>
                  <div className="tranx">{app.dataCode}</div>
                  <div className="proD">{app.dataType}</div>
                  <div className="net">{app.dataNetwork}</div>
                  <div className="title">{app.dataName}</div>
                  <div className="reach">{app.dataNumber}</div>
                  <div className="value">{app.dataAmount}</div>
                  <div className="sit" style={{color: app.dataStatus === 'Success' ? 'green' : app.dataStatus === 'Pending' ? 'brown' : app.dataStatus === 'Failed' ? 'red' : 'green'}}>{app.dataStatus}</div>
                  <div className="duration">{app.dataDate}</div>
                </div>
               ))} 
              </div>
            </div>
            </div>
            </div>
        </div>
    )
};

export default AdminOverview;