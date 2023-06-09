import React from "react";
import { Card } from "antd";
import "./DealsStyles.css";

const KanbanView = () => {
  return (
    <div class="cardContainer">
      <div class="cardItem cardItem1">
        <Card title="Qualification " bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <div class="cardItem cardItem2">
        <Card title="Needs Analysis " bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <div class="cardItem cardItem3">
        <Card title="Value Proposition" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <div class="cardItem cardItem4">
        <Card
          title="Identify Decision Makers"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div class="cardItem cardItem5">
        <Card
          title="Proposal/Price Quote"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div class="cardItem cardItem6">
        <Card
          title="Negotiation/Review"  
          bordered={false}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div class="cardItem cardItem7">
        <Card title="Closed Won" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div class="cardItem cardItem8">
        <Card title="Closed Lost" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div class="cardItem cardItem9">
        <Card
          title="Closed-Lost to Competition"
          bordered={false}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};

export default KanbanView;
