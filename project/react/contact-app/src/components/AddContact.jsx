import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact({ name, email, phone });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add Contact</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Save Contact</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;