import { Avatar, Typography, Dropdown, Layout, MenuProps, Space } from "antd";
import styles from "./HeaderMenu.module.css";
import system_logo from "@/assets/react.svg";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const HeaderMenu = () => {
  const userActions: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/">{new Date().toLocaleDateString()}</Link>,
    },
  ];

  return (
    <Header className={styles.header__body}>
      <img
        className={styles.header__logo}
        src={system_logo}
        alt="E-Finance Logo"
      />
      <Dropdown
        className={styles.header__pointer}
        menu={{ items: userActions }}
      >
        <Space>
          <Avatar size="default" icon={<UserOutlined />} />
          <Text className={styles.header__text}>
            {new Date().toLocaleDateString()}
          </Text>
        </Space>
      </Dropdown>
    </Header>
  );
};

export default HeaderMenu;
