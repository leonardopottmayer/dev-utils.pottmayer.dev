import { Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import styles from "./SiderMenu.module.css";
import { Link } from "react-router-dom";
import { HomeFilled, KeyOutlined, LockOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SiderMenu = () => {
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(true);

  const onCollapse = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  const sidebarSubMenus: MenuProps["items"] = [
    {
      key: "item-home-page",
      label: <Link to="/">Home</Link>,
      icon: <HomeFilled />,
    },
    {
      key: "sider-menu-item-passwords",
      label: <span>Passwords</span>,
      icon: <LockOutlined />,
      children: [
        {
          key: "sider-menu-subitem-password-generator",
          label: (
            <Link to="/passwords/password-generator">
              PSW001 - Password generator
            </Link>
          ),
          icon: <KeyOutlined />,
        },
      ],
    },
  ];

  return (
    <Sider
      theme="light"
      width={250}
      collapsible
      collapsed={siderCollapsed}
      onCollapse={onCollapse}
      className={styles.sider}
    >
      <div className={styles.sider__body}>
        <div className={styles.sider__content}>
          <Menu mode="inline" items={sidebarSubMenus} />
        </div>
      </div>
    </Sider>
  );
};

export default SiderMenu;
