import Data from "./data/Data";
import Form from "./form/Form";

import './assets/css/App.css'
import { useState } from "react";

function App() {
  const [data, setData] = useState({})

  const [registrationData, setRegistrationData] = useState([])

  function handleSubmit(newData) {
    setData(newData)

    // console.log(newData)
    setRegistrationData(() => {
      // registrationData.push(newData)
      return [
        ...registrationData,
        newData
      ]
    })
  }

  return (
    <div className="container">
      <Form data={data} handleSubmit={handleSubmit} />
      <Data registrationData={registrationData} />
    </div>
  );
}

export default App;
