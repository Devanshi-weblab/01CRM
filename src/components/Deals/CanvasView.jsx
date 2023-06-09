import React, { useState, useEffect } from "react";
import { Button, List, Result, Select } from "antd";

function CanvasView() {
  const [data, setData] = useState([]);

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

  return (
    
    <List
      dataSource={data}
      pagination={{ position: "bottom", align: "center", pageSize: 10 }}
      className="list"
      renderItem={(item,index) => (
        <List.Item>

          <div>
        
          <div><h5>Contact Owner:{item.contactOwner}</h5></div>
          <div>Account Name: {item.accountName}</div>
          <div>Ammount: ${item.ammount} </div>
          <div>Expected Revenue:${item.expectedRevenue} </div>
          <div>Deal Name:{item.dealName} </div>
          <div>Next Step:{item.nextStep} </div>
          <div>Contact Name:{item.contactName} </div>
          <div>Close Date:{item.closeDate} </div>
          <div>Probability:{item.probability} </div>
          <div>Campaign Source:{item.campaignSource} </div>
          <div>Lead Source:{item.leadSource} </div>
          <div>Description:{item.description} </div>
          </div>
        </List.Item>
      )}
    />
  );
}

export default CanvasView;
