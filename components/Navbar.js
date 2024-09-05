"use client"
import React from "react";
import { Protest_Guerrilla } from "@next/font/google";
import { Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const roboto = Protest_Guerrilla({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="relative w-[100%] h-[100px] flex justify-between items-center px-7">
      <h1
        className={roboto.className}
        style={{ fontSize: "30px", color: "white" }}
      >
        Lohith
      </h1>
      <div>
        {/* Button to open the navbar slider */}
        <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} className="bg-white text-black fixed right-4">
          
        </Button>

        {/* Drawer component for the navbar */}
        <Drawer
          title="Navigation"
          placement="right"
          onClose={onClose}
          visible={visible}
          width={250}
        >
          {/* Ant Design Menu for the navigation links */}
          <Menu mode="inline">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Services</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
