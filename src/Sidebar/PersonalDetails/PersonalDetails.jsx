import "./PersonalDetails.css";

function PersonalDetails({ personalDetails, setPersonalDetails }) {
  const handleOnChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="PersonalDetails">
      <h1>Personal Details</h1>
      <div className="input-group">
        <label htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalDetails.name}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <span className="recommended-text"> recommended</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={personalDetails.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">
          <span className="label-text">Phone Number</span>
          <span className="recommended-text"> recommended</span>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={personalDetails.phone}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
          <span className="recommended-text"> recommended</span>
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={personalDetails.address}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
