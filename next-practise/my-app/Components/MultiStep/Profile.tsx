const Profile = ({ data, setData, setActiveTab }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (!name || !age || !email) {
      alert("Please fill all fields");
      return;
    }

    if (age <= 18) {
      alert("Age must be grater than 18");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    setActiveTab("Interest");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => handleDataChange(e, "name")}
        required
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => handleDataChange(e, "age")}
        required
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => handleDataChange(e, "email")}
        required
      />
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Profile;
