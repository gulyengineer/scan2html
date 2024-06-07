import React from 'react';
import { Column } from '@ant-design/charts'; // Import Column from '@ant-design/charts'

// Sample data; you can modify this based on your `result` data structure
const data = [
  { severity: 'Low', count: 50 },
  { severity: 'Medium', count: 120 },
  { severity: 'High', count: 75 },
  { severity: 'Critical', count: 30 },
];

// Define the type for your props
interface DashboardProps {
  result: NormalizedResultForDataTable[]; // Ensure you have this type defined in your project
}

const Dashboard: React.FC<DashboardProps> = ({ result }) => {
  console.log("Dashboard:", result);

  // Modify the data if needed based on `result`
  const chartData = result.length > 0 ? result : data;

  const config = {
    data: chartData,
    xField: 'severity',
    yField: 'count',
    colorField: 'severity',
    color: ['#5B8FF9', '#61DDAA', '#65789B', '#F6BD16'],
    legend: false
  };

  return <div className="site-layout-content" style={{ marginTop: '20px', display: 'flex' }}>
          <div style={{ flex: 1 }}>
          <Column {...config} />
          </div>
          <div style={{ flex: 1 }}>
          <Column {...config} />
          </div>
          <div style={{ flex: 1 }}>
          <Column {...config} />
          </div>
        </div>
};

export default Dashboard;
