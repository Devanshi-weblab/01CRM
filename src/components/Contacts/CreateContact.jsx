import React, { useState } from "react";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { contactsFormStructure } from "../../data/contactsData";
import { v4 as uuidv4 } from 'uuid';

const CreateContact = ({addNewItem}) => {

	const navigate = useNavigate();
	const [newContactDetails, setNewContactDetails] = useState({});

	const handleOnSave = () => {
		addNewItem({itemType: 'contacts', item: {...newContactDetails, _id: uuidv4(), createdTime: new Date()}});
		setNewContactDetails({});
		navigate('/contacts');
	}

	const handleOnCancel = () => {
		setNewContactDetails({});
		navigate('/contacts');
	}

	const handleOnChange = ({ key, value }) => {
		if (key && value)
			setNewContactDetails({...newContactDetails, ...{[key]: value}});
	}

	return <div>
		<CreateForm 
			title={'Create Contact'}
			structure={contactsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}
			handleOnChange={handleOnChange}
		/>
	</div>;
}

export default CreateContact;
