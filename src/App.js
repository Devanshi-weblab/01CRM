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
import Deals from './components/Deals/Deals'
import KanbanView from './components/Deals/KanbanView';
import ListView from './components/Deals/ListView';
import CanvasView from './components/Deals/CanvasView';
import CreateDeals from './components/Deals/CreateDeals';
import ViewLead from './components/Leads/ViewLead';
import ViewDeal from './components/Deals/ViewDeal';

function App() {

	const addNewItem = ({itemType, item}) => {
		console.log(itemType,item)
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
				<Route path='leads/:id' element={<ViewLead />} />
				<Route path='leads/create' element={<CreateLead addNewItem={addNewItem}/>} />
				<Route path="contacts" element={<Contacts />} />
				<Route path='contacts/create' element={<CreateContact addNewItem={addNewItem}/>} />
				<Route path="accounts" element={<Accounts />} />
				<Route path='accounts/create' element={<CreateAccount addNewItem={addNewItem} />} />	
				<Route path="deals" element={<Deals />} />
				<Route path="deals/:id" element={<ViewDeal />} />
				<Route path="deals/create" element={<CreateDeals addNewItem={addNewItem}/>} />
				<Route path="deals/list" element={<Deals />} />
				<Route path="KanbanView" element={<KanbanView />} />
				<Route path="ListView" element={<ListView />} />
				<Route path="CanvasView" element={<CanvasView />} />
			</Route>
		</Routes>
	);
};

export default App;


/* */

// fetch("https://6479b82ca455e257fa639f56.mockapi.io/:endpoint").then((res)=>{
// 	return res.json()
// })
// .then((res)=>{
// 	console.log(res)
// })

// const fetchData = async ()=>{
// 	const res = await fetch("https://6479b82ca455e257fa639f56.mockapi.io/:endpoint")
// 	const data = await res.json()
//     console.log(data)
// }