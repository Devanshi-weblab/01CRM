import { v4 as uuidv4 } from 'uuid';

export const data = [
	{
	  title: 'Ant Design Title 1',
	},
	{
	  title: 'Ant Design Title 2',
	},
	{
	  title: 'Ant Design Title 3',
	},
	{
	  title: 'Ant Design Title 4',
	},
];

export const leadsSortBy = [
	{
	  key: 'none',
	  label: (
		<div>None</div>
	  ),
	  value: 'None',
	},
	{
		key: 'firstName',
		label: (
			<div>First name</div>
		),
		value: 'First name',
	},
	{
		key: 'createdTime',
		label: (
			<div>Created time</div>
		),
		value: 'Created time',
	},
	{
		key: 'lastName',
		label: (
		  <div>Last name</div>
		),
		value: 'Last name',
	},
	{
		key: 'firstName',
		label: (
		  <div>Lead name</div>
		),
		value: 'Lead name',
	},
];

const leadSourceOptions = [
	{
		key: 'none',
		label: (
			<div>None</div>
		),
		value: 'None',
	},

	{
		key: 'advertisement',
		label: (
			<div>Advertisement</div>
		),
		value: 'Advertisement',
	},
	{
		key: 'coldCall',
		label: (
			<div>Cold Call</div>
		),
		value: 'Cold Call',
	},
	{
		key: 'employeeReferral',
		label: (
			<div>Employee Referral</div>
		),
		value: 'Employee Referral',
	},
	{
		key: 'externalReferral',
		label: (
			<div>External Referral</div>
		),
		value: 'External Referral',
	},
	{
		key: 'onlineStore',
		label: (
			<div>Online Store</div>
		),
		value: 'Online Store',
	},
	{
		key: 'partner',
		label: (
			<div>Partner</div>
		),
		value: 'Partner',
	},
	{
		key: 'publicRelations',
		label: (
			<div>Public Relations</div>
		),
		value: 'Public Relations',
	},
	{
		key: 'salesMailAlias',
		label: (

			<div>Sales Mail Alias</div>
		),
		value: 'Sales Mail Alias',
	},
	{
		key: 'seminarPartner',
		label: (
			<div>Seminar Partner</div>
		),
		value: 'Seminar Partner',
	},
	{
		key: 'internalSeminar',
		label: (
			<div>Internal Seminar</div>
		),

		value: 'Internal Seminar',
	},
	{
		key: 'tradeShow',
		label: (
			<div>Trade Show</div>
		),
		value: 'Trade Show',
	},
	{
		key: 'webDownload',
		label: (
			<div>Web Download</div>
		),
		value: 'Web Download',
	},
	{
		key: 'webResearch',
		label: (
			<div>Web Research</div>
		),
		value: 'Web Research',
	},
	{
		key: 'chat',
		label: (
			<div>Chat</div>
		),
		value: 'Chat',
	},
	{
		key: 'facebook',
		label: (
			<div>Facebook</div>
		),
		value: 'Facebook',
	},
	{
		key: 'twitter',
		label: (
			<div>Twitter</div>
		),
		value: 'Twitter',
	},
	{
		key: 'other',
		label: (
			<div>Other</div>
		),
		value: 'Other',
	},

];

const leadStatusOptions = [
	{
		key: 'none',
		label: (
			<div>None</div>
		),
		value: 'None',
	},
	{
		key: 'attemptedToContact',
		label: (
			<div>Attempted to Contact</div>
		),
		value: 'Attempted to Contact',
	},
	{
		key: 'contactInFuture',
		label: (
			<div>Contact in Future</div>
		),
		value: 'Contact in Future',
	},
	{
		key: 'contacted',
		label: (
			<div>Contacted</div>
		),
		value: 'Contacted',
	},
	{
		key: 'junkLead',
		label: (
			<div>Junk Lead</div>
		),

			
		value: 'Junk Lead',
	},
	{
		key: 'lostLead',
		label: (
			<div>Lost Lead</div>
		),
		value: 'Lost Lead',
	},
	{
		key: 'notContacted',
		label: (

			<div>Not Contacted</div>
		),
		value: 'Not Contacted',
	},

	{
		key: 'preQualified',
		label: (
			<div>Pre Qualified</div>
		),
		value: 'Pre Qualified',
	},
	{
		key: 'qualified',

		label: (
			<div>Qualified</div>
		),
		value: 'Qualified',
	},
	{

		key: 'notQualified',
		label: (
			<div>Not Qualified</div>
		),
		value: 'Not Qualified',
	},
];


export const leadsFormStructure = [
	{
		title: 'Lead Information',
		fields: [
			{ label: 'Lead Owner', type: 'input', key: 'leadOwner'},
			{ label: 'Company', type: 'input', required: true, key: 'company'},
			{ label: 'First Name', type: 'input', required: true, key: 'firstName'},
			{ label: 'Last Name', type: 'input', required: true, key: 'lastName'},
			{ label: 'Title', type: 'input', required: true, key: 'title'},
			{ label: 'Lead Source', type: 'select', options: leadSourceOptions, key: 'leadSource'},
			{ label: 'Lead Status', type: 'select', options: leadStatusOptions, key: 'leadStatus'},
			{ label: 'Industry', type: 'input', key: 'industry'},
			{ label: 'Annual Revenue', type: 'input', key: 'annualRevenue'},
			{ label: 'No. of Employees', type: 'input', key: 'numberOfEmployees'},
			{ label: 'Skype ID', type: 'input', key: 'skypeId'},
			{ label: 'Email', type: 'input', key: 'email'},
			{ label: 'Phone', type: 'input', key: 'phone'},
			{ label: 'Mobile', type: 'input', key: 'mobile'},
		]
	}, {
		title: 'Address Information',
		fields: [
			{ label: 'Street', type: 'input', key: 'street'},
			{ label: 'City', type: 'input', key: 'city'},
			{ label: 'State', type: 'input', key: 'state'},
			{ label: 'Zip Code', type: 'input', key: 'zipCode'},
			{ label: 'Country', type: 'input', key: 'country'},
		]
	}, {
		title: 'Description Information',
		fields: [
			{ label: 'Description', type: 'textarea', key: 'description'},
		]
	}
];



export const leadsData = [
	{
		id: uuidv4(),
		firstName: 'John',
		lastName: 'Doe',
		company: 'Google',
		createdTime: '2020-10-10',
		phone: '123456789',
		email: 'johndoe@gmail.com',
		title: 'CEO',
		leadSource: 'Google',
		leadStatus: 'Open',
		industry: 'Technology',
		annualRevenue: '1000000',
		numberOfEmployees: '100',
		address: {
			street: '123 Main St',
			city: 'San Francisco',
			state: 'CA',
			zipCode: '94105',
			country: 'USA',
		},
		mobile: '123456789',
	},
	{
		id: uuidv4(),
		firstName: 'Jane',
		lastName: 'Doe',
		company: 'Facebook',
		createdTime: '2020-10-10',
		phone: '123456789',
		email: 'janedoe@gmail.com',
		title: 'CEO',
		leadSource: 'Facebook',
		leadStatus: 'Open',
		industry: 'Technology',
		annualRevenue: '1000000',
		numberOfEmployees: '100',
		address: {
			street: '123 Main St',
			city: 'San Francisco',
			state: 'CA',
			zipCode: '94105',
			country: 'USA',
		},
		mobile: '123456789',
	},
];