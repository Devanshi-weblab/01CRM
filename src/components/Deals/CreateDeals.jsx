import React, { useState } from "react";
import Form from "../Form";
import {dealsData} from "../../data/dealsData";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CreateDeals({ addNewItem }) {
  const navigate = useNavigate();
  const [newDealsDetails, setNewDealsDetails] = useState({});

  const handleOnSave = () => {
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
    console.log(key,value)
    if (key && value)
      setNewDealsDetails({...newDealsDetails, [key]: value  });
      // console.log(newDealsDetails)
  };

  const[dealOwner,newDealOwner] = useState("")
  const[dealName,newDealName] = useState("")
  const[accountName,newAccountName] = useState("")
  const[nextStep,newNextStep] = useState("")
  const[leadSource,newLeadSource] = useState("")
  const[contactName,newcontactName] = useState("")
  const[ammount,newAmmount] = useState("")
  const[closeDate,newCloseDate] = useState("")
  const[stage,newStage] = useState("")
  const[probability,newProbability] = useState("")
  const[expectedRevenue,newExpectedRevenue] = useState("")
  const[campaignSource,newCampaignSource] = useState("")
  const[description,newDescription] = useState("")
  

  let data = {dealOwner,
              dealName,   
              accountName,
              nextStep,
              leadSource,
              contactName,
              ammount,
              closeDate,
              stage,
              probability,
              expectedRevenue,
              campaignSource,
              description}
  fetch("https://647efa36c246f166da8fce52.mockapi.io/dealsData",
  {
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then((result)=>{
    // console.warn("result",result)
    result.json().then((resp)=>{
        console.warn("resp",resp)
    })
  })
   
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
