import React from 'react'

function DealListItem() {
    const Details=[
        {
            Ammount: 'Ammount',
		    label: 'Ammount'
        },

        {
            key: 'Closing Date',
		    label: 'Closing Date'
        },

        {
            key: 'Stage',
		    label: 'Stage'
        },

        {
            key: 'Contact Name',
		    label: 'Contact Name'
        },

        {
            key: 'Account Name',
		    label: 'Account Name'
        },
       
        {
            key: 'Last Activity Time',
		    label: 'Last Activity Time'
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
                {Details.map((detail, index) => {
                    return item[detail.key] && <div className="subDetail">
                        <div className="subDetailLabel">{detail.label}: </div>
                        <div className="subDetailValue">{item[detail.key]}</div>
                        {index <Details.length - 1 && <span> |</span>}
                    </div>;
                })}
            </div>
        </div>
    </div>
</div>
</List.Item>;
};

export default DealListItem