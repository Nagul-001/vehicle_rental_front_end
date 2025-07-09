import { useEffect, useState } from "react";
import { CustomerModel } from "../../models/customer";
import { deleteCustomer, getCustomer, updateCustomer } from "../../service/customer";
import { useNavigate } from "react-router-dom";
import "./user.css";


const MyProfile: React.FC = () => {
  const [user, setUser] = useState<CustomerModel.CustomerContactDto>({
    fullName: "",
    licenseNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const userId = Number(localStorage.getItem("userId"));

  useEffect(() => {
    if (userId) {
      getCustomer(userId).then((data) => setUser(data));
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await updateCustomer(userId, user);
    setMessage(res);
    setIsEditMode(false);
  };

  

const handleDelete = async () => {
  if (window.confirm("Are you sure you want to delete your account?")) {
    const res = await deleteCustomer(userId);
    alert(res);
    localStorage.removeItem("userId");
    navigate("/")
  }
};


  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      {!isEditMode ? (
        <div className="card">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>License Number:</strong> {user.licenseNumber}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button className="update-btn" onClick={() => setIsEditMode(true)}>Update</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <label>
            Name:
            <input name="fullName" value={user.fullName} onChange={handleChange}  />
          </label>
          <label>
            License Number:
            <input name="licenseNumber" value={user.licenseNumber} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input name="phoneNumber" value={user.phoneNumber} onChange={handleChange}  />
          </label>
          <label>
            Email:
            <input name="email" type="email" value={user.email} onChange={handleChange}  />
          </label>
          <label>
            Address:
            <input name="address" value={user.address} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input name="password" type="password" value={user.password} onChange={handleChange}  />
          </label>
          <button type="submit" className="update-btn">Save</button>
          <button type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
        </form>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MyProfile;