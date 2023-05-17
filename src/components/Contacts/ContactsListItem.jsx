import { Avatar, List } from "antd";
import '../../styles.css';
import { EditOutlined } from '@ant-design/icons';

const ContactsListItem = ({ item, index, onPress, type }) => {

	const subDetails = [
		{
			key: 'phone',
			label: 'Phone',
		}, {
			key: 'email',
			label: 'Email',
		}, {
			key: 'mobile',
			label: 'Mobile',
		}, {
			key: 'accountName',
			label: 'Account Name',
		}, {
			key: 'title',
			label: 'Title',
		}, {
			key: 'leadSource',
			label: 'Lead Source',
		}
	]

	return <List.Item className="listItem">
		<div style={{display: 'flex'}}>
			<div className="editIconContainer" onClick={() => alert('hii')}>
				<EditOutlined className="editIcon"/>
			</div>
			<div className="listItemDetailsContainer">
                <div className="listItemAvatarContainer"></div>
				<div className="detailsContainer">
					<div className="listItemName">{item.firstName} {item.lastName}</div>
					<div className="listItemSubDetailsContainer">
						{subDetails.map((detail, index) => {
							return item[detail.key] && <div className="subDetail">
								<div className="subDetailLabel">{detail.label}: </div>
								<div className="subDetailValue">{item[detail.key]}</div>
								{index < subDetails.length - 1 && <span> |</span>}
							</div>;
						})}
					</div>
				</div>
			</div>
		</div>
	</List.Item>;
};

export default ContactsListItem;