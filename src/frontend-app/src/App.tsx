import { useEffect, useState } from "react";
import { Button, notification, Row, Col, Card, Menu, Switch, MenuTheme, Layout } from "antd";
import { DashboardOutlined, UploadOutlined, ContainerOutlined, SettingOutlined, AlertOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BugOutlined } from "@ant-design/icons";
import { Column, Line, Pie, Radar } from '@ant-design/plots'; // Changed from @ant-design/charts to @ant-design/plots
import "./App.css";

const { Header, Sider, Content, Footer } = Layout; // Add Sider from Layout

const columnData = [
  { type: 'Product A', sales: 38 },
  { type: 'Product B', sales: 52 },
  { type: 'Product C', sales: 61 },
  { type: 'Product D', sales: 145 },
];

const lineData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 50 },
];

const pieData = [
  { type: 'Category A', value: 27 },
  { type: 'Category B', value: 25 },
  { type: 'Category C', value: 18 },
  { type: 'Category D', value: 15 },
  { type: 'Category E', value: 10 },
  { type: 'Others', value: 5 },
];

const radarData = [
  { item: 'Design', a: 70 },
  { item: 'Development', a: 60 },
  { item: 'Marketing', a: 50 },
  { item: 'Sales', a: 40 },
  { item: 'Support', a: 60 },
  { item: 'Administration', a: 70 },
];

type MenuItem = {
  key: string;
  icon: any;
  label: string;
};

function App() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<MenuTheme>('light');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    colorField: 'type',
  };

  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'value',
  };

  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
  };

  const radarConfig = {
    data: radarData,
    xField: 'item',
    yField: 'a',
    seriesField: 'item',
    area: {},
    point: {},
  };

  const onThemeChanged = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onToggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenuSelected: MenuProps['onClick'] = (e) => {
    setSelectedMenu(e.key);
  };

  useEffect(() => {
    setMenuItems([
      { key: "dashboard", icon: <DashboardOutlined />, label: `Dashboard` },
      { key: "vulnerabilities", icon: <BugOutlined />, label: `Vulnerabilities` },
      { key: "secrets", icon: <BugOutlined />, label: `Secrets` },
      { key: "misconfigurationSummary", icon: <SettingOutlined />, label: `Misconfiguration Summary` },
      { key: "misconfigurations", icon: <SettingOutlined />, label: `Misconfigurations` },
      { key: "k8sClusterSummary", icon: <AlertOutlined />, label: `K8s Cluster Summary` },
      { key: "supplyChainSBOM", icon: <ContainerOutlined />, label: `Supply Chain SBOM` },
      { key: "loadAReport", icon: <UploadOutlined />, label: "Load a report" }
    ]);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onToggleCollapsed} style={{ background: '#fff' }}>    
        <Menu theme={theme} defaultSelectedKeys={[selectedMenu]} mode="inline" items={menuItems} onClick={onMenuSelected} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff', textAlign: 'center' }}>
          Trivy
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-content" style={{ marginTop: '20px' }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card title="Core Metrics">
                  <Row justify="space-between">
                    <Col span={4}>
                      <h2>79</h2>
                      <p>Today's UV</p>
                    </Col>
                    <Col span={4}>
                      <h2>3,286</h2>
                      <p>Yesterday's UV</p>
                    </Col>
                    <Col span={4}>
                      <h2>35</h2>
                      <p>New Users</p>
                    </Col>
                    <Col span={4}>
                      <h2>366</h2>
                      <p>Last 7 Days' UV</p>
                    </Col>
                    <Col span={4}>
                      <h2>1,372</h2>
                      <p>Last 30 Days' UV</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
      
            <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
              <Col span={8}>
                <Card title="User Source">
                  <Column {...columnConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Product Usage">
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="User Profile">
                  <Radar {...radarConfig} />
                </Card>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
              <Col span={8}>
                <Card title="User Source">
                  <Column {...columnConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Product Usage">
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="User Profile">
                  <Radar {...radarConfig} />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by scan2html ©2024</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
