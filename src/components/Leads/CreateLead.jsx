import React, { useState } from "react";
import { leadsFormStructure } from "../../data/leadsData";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const CreateLead = ({addNewItem}) => {

	const navigate = useNavigate();
	const [newLeadDetails, setNewLeadDetails] = useState({});


	fetch("https://647efa36c246f166da8fce52.mockapi.io/leadsData",{
		method:'POST',
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
	
		body:JSON.stringify(newLeadDetails)
	   }).then((result)=>{
		  result.json().then((resp)=>{
		  console.warn("resp",resp)
	  })
	})


	const handleOnSave = () => {
		addNewItem({itemType: 'leads', item: {...newLeadDetails, _id: uuidv4(), createdTime: new Date()}});
		setNewLeadDetails({});
		navigate('/leads');
	}

	const handleOnCancel = () => {
		setNewLeadDetails({});
		navigate('/leads');
	}


	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewLeadDetails({...newLeadDetails, ...{[key]: value}});
	}


	return <div>
		<CreateForm 
			title={'Create Lead'}
			structure={leadsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}

		/>
	</div>;
}

export default CreateLead;
