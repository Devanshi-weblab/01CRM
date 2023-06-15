import { Avatar, Button, Dropdown, List, Select, Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../page-styles.css";
import LeadsListItem from "./LeadsListItem";
import { leadsData, leadsSortBy } from "../../data/leadsData";

const Leads = () => {

  const navigate = useNavigate()

  const [sortByKey, setSortByKey] = useState("none");
  const [sortOrder, setSortOrder] = useState("ascend");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch("https://647efa36c246f166da8fce52.mockapi.io/leadsData").then(
      (result) => {
        result.json().then((resp) => {
          console.log(resp);
          setNewData(resp);
        });
      }
    );
  }, []);

  const handleOnChange = (e) => {
    setSortByKey(e.key);
  };

  const [position, setPosition] = useState("bottom");
  const [align, setAlign] = useState("center");

  const addedLeads = JSON.parse(localStorage.getItem("leads"));

  if (!addedLeads) {
    localStorage.setItem("leads", JSON.stringify([]));
  }

  const data = [...addedLeads];

  const sortedData = data.sort((a, b) => {
    if (sortByKey === "none") return 0;
    if (sortByKey === "createdTime") {
      if (sortOrder === "ascend") {
        return new Date(a[sortByKey]) - new Date(b[sortByKey]);
      } else {
        return new Date(b[sortByKey]) - new Date(a[sortByKey]);
      }
    }

    if (sortOrder === "ascend") {
      return a[sortByKey]
        ?.toLowerCase()
        .localeCompare(b[sortByKey]?.toLowerCase());
    } else {
      return b[sortByKey]
        ?.toLowerCase()
        .localeCompare(a[sortByKey]?.toLowerCase());
    }
  });

  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "LeadOwner",
      dataIndex: "leadOwner",
      key: "leadOwner",
    },
  ];

  return (
    <>
      <div className="subHeader">
        <Button>
          <Link to={"/leads/create"}>Create lead</Link>
        </Button>
      </div>
      <hr />
      <div className="sortHeader">
        <span style={{ marginRight: "6px" }}>Sort by: </span>
        <Select
          placeholder="Sort by"
          style={{ width: 120 }}
          options={leadsSortBy}
          onChange={(_, obj) => handleOnChange(obj)}
        />
        {sortByKey !== "none" && (
          <Select
            className="sortOrder"
            options={[
              { label: "Asc", value: "ascend" },
              { label: "Desc", value: "descend" },
            ]}
            defaultValue={sortOrder}
            onChange={(val) => {
              setSortOrder(val);
            }}
          >
            {sortOrder === "ascend" ? "Desc" : "Asc"}
          </Select>
        )}
      </div>
      <hr style={{ marginBottom: "0" }} />
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record,rowIndex)
              navigate(`/leads/${record.id}`)
            }, 
            style: { cursor: 'pointer' },
          };
        }}
        columns={columns}
        dataSource={newData}
      />
    </>
  );
};

export default Leads;
