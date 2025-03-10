import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Divider, Button, Alert } from "@mui/material";
import { AuthContext } from "../providers/AuthProvider";

const PostDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/details/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApply = () => {
    if (!user || !user.email) {
      setAlertMessage("You need to be logged in to apply for a job.");
      setAlertSeverity("error");
    } else {
      setAlertMessage("Application submitted successfully.");
      setAlertSeverity("success");
    }
  };

  const handleDelete = () => {
    if (!user || !user.email) {
      setAlertMessage("You need to be logged in to delete a post.");
      setAlertSeverity("error");
      return;
    }

    if (job.poster !== user.email) {
      setAlertMessage("You are not authorized to delete this post.");
      setAlertSeverity("error");
      return;
    }

    fetch(`http://localhost:5000/jobs/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setAlertMessage("Job post deleted successfully.");
          setAlertSeverity("success");
          setTimeout(() => navigate("/"), 2000);
        } else {
          setAlertMessage("Failed to delete job post.");
          setAlertSeverity("error");
        }
      })
      .catch(() => {
        setAlertMessage("Failed to delete job post.");
        setAlertSeverity("error");
      });
  };

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-16">
      {alertMessage && (
        <Alert severity={alertSeverity} className="mb-4">
          {alertMessage}
        </Alert>
      )}

      <div className="mb-4">
        <h2 className="text-main text-5xl mb-2">{job.jobTitle}</h2>
        <h6 className="text-[#00000099] text-2xl">{job.company}</h6>
      </div>
      <Divider />
      <div className="mt-8">
        <p>{job.jobDescription}</p>
        <div className="font-medium pt-8">
          <p>
            Job Type: <span className="font-normal">{job.jobType}</span>
          </p>
          <p>
            Level: <span className="font-normal">{job.level}</span>
          </p>
          <p>
            Day & Time: <span className="font-normal">{job.dayTime}</span>
          </p>
          <p>
            Salary: <span className="font-normal">{job.salary}</span>
          </p>
          <p>
            Office Location: <span className="font-normal">{job.location}</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-main font-medium text-2xl">Application Deadline</h4>
        <h2 className="text-4xl mt-2">{job.deadline}</h2>
      </div>
      <div className="flex gap-4 justify-end mt-8">
        {user && job.poster && user.email && job.poster === user.email ? (
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
          >
            DELETE
          </Button>
        ) : null}
        <Button variant="contained" color="error" onClick={handleApply}>
          APPLY NOW
        </Button>
      </div>
    </div>
  );
};

export default PostDetail;
