import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Leads from './components/Leads/Leads';
import Contacts from './components/Contacts/Contacts';
import Accounts from './components/Accounts/Accounts';
import './index.css';
import CreateLead from './components/Leads/CreateLead';
import CreateAccount from './components/Accounts/CreateAccount';
import CreateContact from './components/Contacts/CreateContact';

function App() {

	const addNewItem = ({itemType, item}) => {
		const localStorageData = JSON.parse(localStorage.getItem(itemType));
		if (!localStorageData || localStorageData.length === 0) {
			localStorage.setItem(itemType, JSON.stringify([item]));
		} else {
			localStorageData.push(item);
			localStorage.setItem(itemType, JSON.stringify(localStorageData));
		}
	}

	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Leads />} />
				<Route path='leads' element={<Leads />} />
				<Route path='leads/create' element={<CreateLead addNewItem={addNewItem}/>} />
				<Route path="contacts" element={<Contacts />} />
				<Route path='contacts/create' element={<CreateContact addNewItem={addNewItem}/>} />
				<Route path="accounts" element={<Accounts />} />
				<Route path='accounts/create' element={<CreateAccount addNewItem={addNewItem} />} />
			</Route>
		</Routes>
	);
};

export default App;
