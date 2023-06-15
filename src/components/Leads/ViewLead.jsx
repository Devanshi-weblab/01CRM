import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Space, Button, Modal, Checkbox,Form} from "antd";
// import '../../styles.css';
import Trials from "./Trials";
import ConvertForm from "./ConvertForm";

const ViewLead = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked,setIsChecked] = useState(false);

  const cardStyle = {
    borderRadius: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    width: "1450px",
    marginLeft: "2%",
    marginRight:"2%",
    marginBottom:"2%"
  }

  const buttonStyle = {
    backgroundColor: '#1677ff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    marginTop:"2%",
    marginLeft:"2%",
    width:"100px",
    alignItems:"center"
  };

  const handleOnChange = (e) => {
    setIsChecked(!isChecked)
    console.log(`checked = ${e.target.checked}`);
  };


  useEffect(() => {
    fetch(`https://647efa36c246f166da8fce52.mockapi.io/leadsData/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  return (
    <div className="flex-container">
      <Space direction="vertical" size={16}>
        <Button className="flex-item flex-item1" type="primary" style={buttonStyle} onClick={() => setModalOpen(true)}>
          Convert
        </Button>
        
        <Modal
        title="Convert Lead"

        open={modalOpen}
        
        onOk={() => setModalOpen(false)
        
        

        }
        onCancel={() => setModalOpen(false)}
      >
        <p>Create new Account:  {data.company}</p>
        <p>Create new Contact:  {data.leadName}</p>

        <Checkbox onChange={handleOnChange}>Create a new deal for this account</Checkbox><br/><br/>
        
        {isChecked &&(
          <ConvertForm/>
          // <Trials/>

        )}
        <div>
        <span>Owner of the new records:</span><br/><br/>
        <span>{data.leadOwner}</span>
        </div>
      </Modal>

        <div className="flex-item flex-item2">
        <Card
          title="Overview"
          style={cardStyle}
        >
          <p>Lead Owner:{data.leadOwner}</p>
          <p>Email:{data.email}</p>
          <p>Mobile:{data.mobile}</p>
          <p>Lead Status:{data.leadStatus}</p>
        </Card>
        <Card
          size="small"
          title="Details"
          
          style={cardStyle}
        >
          <p>Country : {data.Country}</p>
          <p>Annual Revenue : {data.annualRevenue}</p>
          <p>City: {data.city}</p>
          <p>Description: {data.company}</p>
          <p>Employee No. : {data.employeeNo}</p>
          <p>First Name : {data.firstName}</p>
          <p>Id: {data.id} </p>
          <p>Industry: {data.industry}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Lead Source:{data.leadSource}</p>
          <p>Phone:{data.Phone}</p>
          <p>Skype Id:{data.skypeId}</p>
          <p>State:{data.state}</p>
          <p>Street:{data.street}</p>
          <p>Title:{data.title}</p>
        </Card>
        </div>
      </Space>
    </div>
  );
};

export default ViewLead;
