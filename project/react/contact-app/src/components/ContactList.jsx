
function ContactList({ contacts, deleteContact, updateContact }) {
  return (
    <div className="container">
      <h2>All Contacts</h2>

      {contacts.length === 0 ? (
        <p className="empty">No contacts available</p>
      ) : (
        contacts.map((c, index) => (
          <div className="card" key={index}>
            <h3>{c.name}</h3>
            <p>{c.email}</p>
            <p>{c.phone}</p>

            <button onClick={() => deleteContact(index)}>
              Delete
            </button>

            <button
              onClick={() => {
                const newName = prompt("Enter name", c.name);
                const newEmail = prompt("Enter email", c.email);
                const newPhone = prompt("Enter phone", c.phone);

                if (newName && newEmail && newPhone) {
                  updateContact(index, {
                    name: newName,
                    email: newEmail,
                    phone: newPhone,
                  });
                }
              }}
            >
               Update
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;