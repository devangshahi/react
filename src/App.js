

import React from "react";
// import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // const {register, handleSubmit, formState: { errors } } = useForm();

  
  
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" >
        <input type="text"  />
        <input type="email"  />
        
    
        <input type="password"  />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default App;
