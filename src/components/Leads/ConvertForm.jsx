import { Button, Form, Input, Select } from "antd";
import {useState} from "react";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ConvertForm = () => {

const[formData,setFormData]=useState({
   Amount:'',
   closingDate:'',
   dealName:'',
   contactRole:''
});

const handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};


const handleSubmit = (event) => {
  event.preventDefault();

  fetch('your-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
     
    })
    .catch((error) => {
     
    });
};



// const handleOnChange=(e)=>{
//    setFormData({ })

// }


  const [form] = Form.useForm();
  const onStageChange = (value) => {
    switch (value) {
      case "Qualification":
        form.setFieldsValue;
        break;

      case "Need Analysis":
        form.setFieldsValue;
        break;

      case "Value Proposition":
        form.setFieldsValue;

      case "Identify Decision Makers":
        form.setFieldsValue;

      case "Proposal/Price Quote":
        form.setFieldsValue;

      case "Negotiation/Review":
        form.setFieldsValue;

      case "Closed Won":
        form.setFieldsValue;

      case "Closed Lost":
        form.setFieldsValue;

      case "Closed-Lost To Competition":
        form.setFieldsValue;

        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = (values) => {
    console.log(values);
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <Form onSubmit={handleSubmit}
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
      maxWidth: 600,
      }}
    >

      <Form.Item name="Amount" label="Amount" value={formData.Amount} onChange={handleChange}>
        <Input />
      </Form.Item>


      <Form.Item name="dealName" label="Deal Name" rules={[{ required: true, },] } value={formData.dealName} onChange={handleChange}>
        <Input />
      </Form.Item>


      <Form.Item name="closingDate" label="Closing Date" rules={[{ required: true, },]} value={formData.closingDate} onChange={handleChange}>
        <Input />
      </Form.Item>

      <Form.Item
        name="Stage"
        label="Stage"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select the deal Stage"
          onChange={onStageChange}
          allowClear
        >
          <Option value="Qualification">Qualification</Option>
          <Option value="Need Analysis">Need Analysis</Option>
          <Option value="Value Proposition">Value Proposition</Option>
          <Option value="Identify Decision Makers">Identify Decision Makers</Option>
          <Option value="Proposal/Price Quote">Proposal/Price Quote</Option>
          <Option value="Negotiation/Review">Negotiation/Review</Option>
          <Option value="Closed Won">Closed Won</Option>
          <Option value="Closed Lost">Closed Lost</Option>
          <Option value="Closed-Lost To Competition">Closed-Lost To Competition</Option>
        </Select>
      </Form.Item>

      
      <Form.Item name="contactRole" label="Contact Role" value={formData.contactRole} onChange={handleChange}>
        <Input />
      </Form.Item>

  

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      
      </Form.Item>
        <Button htmlType="button" onClick={onReset}>
          Convert
        </Button> <br/><br/>
    </Form>
  );
};

export default ConvertForm;
