import React, { useState } from "react";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { accountsFormStructure } from "../../data/accountsData";
import { v4 as uuidv4 } from 'uuid';


const CreateAccount = ({addNewItem}) => {

	const navigate = useNavigate();
	const [newAccountDetails, setNewAccountDetails] = useState({});

	const handleOnSave = () => {
		addNewItem({itemType: 'accounts', item: {...newAccountDetails, _id: uuidv4(), createdTime: new Date()}});
		setNewAccountDetails({});
		navigate('/accounts');
	}

	const handleOnCancel = () => {
		setNewAccountDetails({});
		navigate('/accounts');
	}

	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewAccountDetails({...newAccountDetails, ...{[key]: value}});
	}


	return <div>
		<CreateForm 
			title={'Create Account'}
			structure={accountsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}

		/>
	</div>;
}

export default CreateAccount;
