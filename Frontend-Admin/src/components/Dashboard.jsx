import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Loading from "./loading";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import "./dashboard.css";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
        console.log("Some Error Occurred While Fetching Appointments", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const updateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="/doc.png" alt="Admin" />
          <div className="content">
            <div>
              <p>Hello,</p>
              <h5>{user && `${user.firstName} ${user.lastName}`}</h5>
            </div>
            <p className="desc">
              The NutriFit Administration Panel enables admins to manage
              nutrition experts, add new team members, and oversee client
              appointments and dietary program schedules.
            </p>
          </div>
        </div>

        <div className="infoBox secondBox">
          <p>Total Appointments</p>
          <h3>{appointments.length}</h3>
        </div>

        <div className="infoBox thirdBox">
          <p>Departments</p>
          <ul className="departments">
            <li>Clinical Nutritionist</li>
            <li>Sports Dietitian</li>
            <li>Wellness Coach</li>
            <li>Nutrition Therapist</li>
            <li>Pediatric Dietician</li>
            <li>Geriatric Dietician</li>
            <li>Vegan Dietician</li>
            <li>Renal Dietician</li>
            <li>Diabetes Educator</li>
          </ul>
        </div>
      </div>

      <div className="appointments-container">
        <h5>Appointments</h5>
        {appointments && appointments.length > 0 ? (
          <div className="appointments-grid">
            {appointments.map((appointment) => (
              <div className="appointment-card" key={appointment._id}>
                <div className="appointment-header">
                  <h4>{`${appointment.firstName} ${appointment.lastName}`}</h4>
                  <span
                    className={`status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>
                </div>
                <p>
                  <strong>Date:</strong> {appointment.appointment_date}
                </p>
                <p>
                  <strong>Doctor:</strong>{" "}
                  {`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}
                </p>
                <p>
                  <strong>Department:</strong> {appointment.department}
                </p>

                <div className="appointment-actions">
                  <select
                    value={appointment.status}
                    onChange={(e) =>
                      updateStatus(appointment._id, e.target.value)
                    }
                    className={`dropdown ${appointment.status.toLowerCase()}`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  {appointment.hasVisited ? (
                    <GoCheckCircleFill
                      style={{ color: "#28a745", fontSize: "24px" }}
                      title="Visited"
                    />
                  ) : (
                    <AiFillCloseCircle
                      style={{ color: "#dc3545", fontSize: "24px" }}
                      title="Not Visited"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>No Appointments</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
