
// function App(){
//     const handleClick = () => {
//         alert("button clicked");
//     };


//     return (
//         <button onClick={handleClick}>
//         Click me
//         </button>
//     );


// }

// export default App;



// // import { useState } from 'react';
// // function App(){
// //     const [name,setName] = useState('');
// //     const handleChange = (e) =>{
// //         setName(e.target.value);
// //     };


// //     return (
// //         <input type = "text" value = {name}
// //         onChange = {handleChange} placeholder="Enter Name"></input>

// //     );


// // }

// // export default App;



// import { useState } from 'react';
// function App() {
//   const [formState, setformData] = useState({name: '', email: ''});
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setformData((prevformData) => ({
//     ...prevformData,
//     [name]: value
// }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${formState.name}, Email: ${formState.email}`);
//   };

//   return(
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Name" />
//       <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Email" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// } 

// export default App;




import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted successfully!");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;