const Interest = ({ data, setData, setActiveTab }) => {
  const { interest } = data;

  const handleDataChange = (e) => {
    setData((prev) => ({
      ...prev,
      interest: e.target.checked
        ? [...prev.interest, e.target.name]
        : prev.interest.filter((item) => item != e.target.name),
    }));
  };

  return (
    <>
      <input
        type="checkbox"
        name="netflix"
        checked={data.interest.includes("netflix")}
        onChange={handleDataChange}
        // value="netflix"
      />
      Netflix
      <input
        type="checkbox"
        name="music"
        checked={data.interest.includes("music")}
        // value="music"
        onChange={handleDataChange}
      />
      Music
      <input
        type="checkbox"
        name="chess"
        checked={data.interest.includes("chess")}
        // value="music"
        onChange={handleDataChange}
      />
      Chess
      <button type="button" onClick={() => setActiveTab("Profile")}>
        Prev
      </button>
      <button type="button" onClick={() => setActiveTab("Settings")}>
        Next
      </button>
    </>
  );
};

export default Interest;
