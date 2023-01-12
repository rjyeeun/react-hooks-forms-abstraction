import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState ({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    if (event.target.type === "checkbox") {
      value = event.target.checked
    }

    setFormData({...formData, [name]:value,})
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }
  

  return (
    <form>
      <input 
        type="text" 
        name="firstName" 
        onChange={handleChange} 
        value={formData.firstName} />
      <input 
        type="text" 
        name="lastName" 
        onChange={handleChange} 
        value={formData.lastName} />
        <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit" handleSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
