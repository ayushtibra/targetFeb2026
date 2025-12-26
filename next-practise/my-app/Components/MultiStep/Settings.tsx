const Settings = ({ data, setData, setActiveTab }) => {
  const { interest } = data;

  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };

  return (
    <>
      <input
        type="radio"
        name="dark"
        checked={data.theme == "dark"}
        onChange={handleDataChange}
      />
      Dark
      <input
        type="radio"
        name="light"
        checked={data.theme == "light"}
        onChange={handleDataChange}
      />
      Light
      <button type="button" onClick={() => setActiveTab("Interest")}>
        Prev
      </button>
      <button type="submit" onClick={() => setActiveTab("Result")}>
        Submit
      </button>
    </>
  );
};

export default Settings;
