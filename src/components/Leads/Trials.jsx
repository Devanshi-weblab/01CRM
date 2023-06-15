import React,{useState} from 'react'

function Trials() {
    const [formData, setFormData] = useState({
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: ''
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
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field4"
          value={formData.field4}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field5"
          value={formData.field5}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default Trials;