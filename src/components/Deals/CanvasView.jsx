import React, { useState, useEffect } from "react";
import { Button, List, Result, Select, Table } from "antd";   
import { useNavigate } from "react-router-dom";   

function CanvasView() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://647efa36c246f166da8fce52.mockapi.io/dealsData").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }, []);

  console.warn(data);
  const columns = [
  {
    title: 'Deal Name',
    dataIndex: 'dealName',
    key: 'dealName',
  },
  {
    title: 'Amount',
    dataIndex: 'ammount',
    key: 'ammount',
  },
  {
    title: 'Stage',
    dataIndex: 'stage',
    key:'stage'
  },
  {
    title: 'Closing Date',
    dataIndex: 'closeDate',
    key:'closeDate'
  },
  {
    title: 'accountName',
    dataIndex: 'accountName',
    key:'accountName'
  },
  {
    title: 'Contact Name',
    dataIndex: 'contactName',
    key:'contactName'
  },
  {
    title: 'Deal Owner',
    dataIndex: 'dealOwner',
    key:'dealOwner'
  },
];

  return (
    <Table
        onRow={(record,rowIndex)=>{
          return{
            onClick: (event) =>{
              console.log(record,rowIndex)
              navigate(`/deals/${record.id}`)
            },
            style:{cursor: 'pointer'},
          };
        }}
        columns={columns}
        dataSource={data}
       />








    // <List
    //   dataSource={data}
    //   pagination={{ position: "bottom", align: "center", pageSize: 10 }}
    //   className="list"
    //   renderItem={(item,index) => (
    //     <List.Item>

    //       <div className="dealContainer">
    //       <div>Contact Owner:{item.contactOwner}</div>
    //       <div>Deal Owner:{item.dealOwner}</div>
    //       <div>Account Name: {item.accountName}</div>
    //       <div>Ammount: ${item.ammount} </div>
    //       <div>Expected Revenue:${item.expectedRevenue} </div>
    //       <div>Deal Name:{item.dealName} </div>
    //       <div>Next Step:{item.nextStep} </div>
    //       <div>Contact Name:{item.contactName} </div>
    //       <div>Close Date:{item.closeDate} </div>
    //       <div>Probability:{item.probability} </div>
    //       <div>Campaign Source:{item.campaignSource} </div>
    //       <div>Lead Source:{item.leadSource} </div>
    //       <div>Description:{item.description} </div>
    //       </div>
    //      </List.Item>
    //   )}
    // />
  );
}

export default CanvasView;
