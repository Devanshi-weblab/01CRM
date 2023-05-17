import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import CreatePageHeader from "./CreatePageHeader";

const CreateForm = ({ structure, title, onSave, onCancel, handleOnChange }) => {

	return (
		<div>
			<CreatePageHeader title={title} onSave={onSave} onCancel={onCancel} />
			<div className="formContainer">
				{structure.map((item, index) => {
					return (
						<div key={index} className="formSubHeading">
							<h4>{item.title}</h4>
							<div className="formSubHeadingContent">
								{item.fields.map((field, index) => {
									return (
										<div key={index} className="formField">
											{(field.type === 'input') &&
												<div className="formFieldInput">
													<label>{field.label}</label>
													<input type={field.inputType} required={field.required} onChange={e => handleOnChange({key: field.key, value: e.target.value})} />
												</div>
											}
											{(field.type === 'select') &&
												<div className="formFieldSelect">
													<label>{field.label}</label>
													<Select
														placeholder={field.placeholder}
														options={field.options}
														onChange={(value) => handleOnChange({key: field.key, value: value})}
													/>
												</div>
											}
											{(field.type === 'textarea') &&
												<div className="formFieldTextarea">
													<label>{field.label}</label>
													<TextArea
														onChange={e => handleOnChange({key: field.key, value: e.target.value})} 
														required={field.required}
													/>
												</div>
											}
											{(field.type === 'checkbox') &&
												<div className="formFieldCheckbox">
													<label>{field.label}</label>
													<input type="checkbox" required={field.required} onChange={e => handleOnChange({key: field.key, value: e.target.value})} />
												</div>
											}
										</div>
									);
								})}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default CreateForm;