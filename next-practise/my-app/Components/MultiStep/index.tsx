import { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import Result from "./Result";


const renderTab = {
  'Profile': Profile,
  'Interest': Interest,
  'Settings': Settings,
  'Result': Result
};
const JSONComponent = (props) => {
  const Comp = renderTab[props.activeTab];
  if (Comp) {
    return <Comp {...props} />;
  }

  return null;
};

const TabForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [data, setData] = useState({
    name: "Ayush",
    age: 28,
    email: "ayush.tibra@growisto.com",
    interest: ["netflix", "chess"],
    theme: "dark",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      {Object.keys(renderTab).map((tab) => (
        <button onClick={() => setActiveTab(tab)}>{tab}</button>
      ))}
      <form onSubmit={handleSubmit}>
        <JSONComponent
          data={data}
          setData={setData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </form>
    </div>
  );
};

export default TabForm;
