import React, { useState } from "react";
import Form from "../Form";
import {dealsData} from "../../data/dealsData";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CreateDeals({ addNewItem }) {
  const navigate = useNavigate();
  const [newDealsDetails, setNewDealsDetails] = useState({});
  console.log(newDealsDetails,"newData") 
  const handleOnSave = () => {
    fetch("https://647efa36c246f166da8fce52.mockapi.io/dealsData",
    {
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(newDealsDetails)
    }).then((result)=>{
      result.json().then((resp)=>{
          console.warn("resp",resp)
      })
    })
    console.log(newDealsDetails)
    addNewItem({
      itemType: "deals",
      item: { ...newDealsDetails, _id: uuidv4(), createdTime: new Date() },
    });
    
    setNewDealsDetails({});
    navigate("/deals");
  };

  const handleOnCancel = () => {
    setNewDealsDetails({});
    navigate("/deals");
  };
  const handleOnChange = ({ key, value }) => {
    // console.log(key,value)
    if (key && value)
      setNewDealsDetails({...newDealsDetails, [key]: value  });
  };

          
  return (
    <div>
      <Form
        title={"Create Deals"}
        structure={dealsData}
        onSave={handleOnSave}
        onCancel={handleOnCancel}
        handleOnChange={handleOnChange}
      />
    </div>
  );
}

export default CreateDeals;
