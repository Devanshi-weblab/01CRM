import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Card, List} from "antd";
import "./DealsStyles.css";
import KanbanView from "./KanbanView";
import CanvasView from "./CanvasView";
import ListView from "./ListView";
import { Link } from "react-router-dom";
import DealListItem from "./DealListItem";

function Deals() {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      label: "List View",
      key: "1",
      icon: (
        <Link to = "ListView">

       <UserOutlined />
       </Link>)
    },
    {
      label: "Kanban View",
      key: "2",

      icon: (
        <Link to="/KanbanView">
          
          <UserOutlined />
        </Link>
      )
    },
    {
      label: "Canvas View",
      key: "3",
      icon:( 
        <Link to='/CanvasView'>

        <UserOutlined />
        </Link>
        ) 
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleActionClick = (e) => {
    console.log("click", e);
  };
  const actions = [
    {
      label: "Mass Delete",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Mass Update",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "Manage Tags",
      key: "4",
      icon: <UserOutlined />,
    },
    {
      label: "Drafts",
      key: "5",
      icon: <UserOutlined />,
    },
    {
      label: "Email",
      key: "6",
      icon: <UserOutlined />,
    },
  ];
  const actionProps = {
    items: actions,
    onClick: handleActionClick,
  };

  return (
    <React.Fragment>
      <div class="subHeader dealHeader">
        <div class="subItem subItem1">
          <Dropdown menu={menuProps}> 
            <Button>
              Button <DownOutlined />{" "}
            </Button>
          </Dropdown>
        </div>

        <div class="subItem subItem2">
          <Button>
            <Link to={'/deals/create'}>Create Deal</Link>
          </Button>
        </div>

        <div class="subItem subItem3">
          <Dropdown menu={actionProps}>
            <Button>
              Action <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>    
      <hr />
   
      <CanvasView></CanvasView>
      {/* <KanbanView/> */}
      
      </React.Fragment>
  );
}

export default Deals;
