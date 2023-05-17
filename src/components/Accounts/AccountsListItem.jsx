import { Avatar, List } from "antd";
import '../../styles.css';
import { EditOutlined } from '@ant-design/icons';

const AccountsListItem = ({ item, index, onPress, type }) => {

	const subDetails = [
		{
			key: 'phone',
			label: 'Phone',
		}, {
			key: 'website',
			label: 'Website',
		}, {
			key: 'industry',
			label: 'Industry',
		}, {
			key: 'accountType',
			label: 'Account Type',
		}, {
			key: 'billingCity',
			label: 'Billing City',
		}, {
			key: 'billingCountry',
			label: 'Billing Country',
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
					<div className="listItemName">{item.accountName}</div>
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

export default AccountsListItem;