import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "./loading";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteDoctorHandler = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;

    try {
      await axios.delete(
        `http://localhost:4000/api/v1/user/doctor/delete/${id}`,
        { withCredentials: true }
      );
      toast.success("Doctor deleted successfully!");

      // ✅ Immediately update UI
      setDoctors((prev) => prev.filter((doc) => doc._id !== id));

      // Optional: Fetch again to ensure data consistency from server
      // fetchDoctors();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (loading) return <Loading />;
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <section className="page doctors">
      <h1>Doctors</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element, index) => (
            <div
              className="card"
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={element.doctrAvatar && element.doctrAvatar.url}
                alt="Doctor Avatar"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <h4 style={{ marginBottom: "10px" }}>
                {`${element.firstName} ${element.lastName}`}
              </h4>
              <div className="details" style={{ marginBottom: "10px" }}>
                <p>Email: <span>{element.email}</span></p>
                <p>Phone: <span>{element.phone}</span></p>
                <p>DoB: <span>{element.dob.substring(0, 10)}</span></p>
                <p>Department: <span>{element.doctrDptmnt}</span></p>
                <p>Aadhar: <span>{element.aadhar}</span></p>
                <p>Gender: <span>{element.gender}</span></p>
              </div>
              <div className="actions" style={{ textAlign: "center" }}>
                <button
                  onClick={() => deleteDoctorHandler(element._id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
