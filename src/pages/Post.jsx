import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Alert,
} from "@mui/material";
import Buttons from "../components/Buttons";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Post = () => {
  const { user } = useContext(AuthContext);
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const jobData = {
      jobTitle: form.get("jobTitle"),
      jobDescription: form.get("jobDescription"),
      company: form.get("company"),
      category: form.get("category"),
      jobType: form.get("jobType"),
      level: form.get("level"),
      dayTime: form.get("dayTime"),
      salary: Number(form.get("salary")),
      location: form.get("location"),
      deadline: form.get("deadline"),
      poster: user.email,
    };

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAlert({ type: "success", message: "Job posted successfully!" });
          e.target.reset();
        } else {
          throw new Error("Failed to post the job.");
        }
      })
      .catch((error) => {
        setAlert({ type: "error", message: error.message });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-12 gap-8">
      <h5 className="text-main text-3xl text-center">Post a Job</h5>

      {alert && <Alert severity={alert.type}>{alert.message}</Alert>}

      <Input size="md" name="jobTitle" placeholder="Job Title" required />
      <TextField
        id="standard-multiline-flexible"
        label="Job Description"
        name="jobDescription"
        multiline
        maxRows={4}
        variant="standard"
        required
      />
      <Input size="md" name="company" placeholder="Company Name" required />
      <FormControl variant="standard">
        <InputLabel>Job Category</InputLabel>
        <Select name="category" defaultValue="" required>
          <MenuItem value="Development">Development</MenuItem>
          <MenuItem value="Sales & Marketing">Sales & Marketing</MenuItem>
          <MenuItem value="Accounts">Accounts</MenuItem>
          <MenuItem value="Creative">Creative</MenuItem>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
          <MenuItem value="HR & Administration">HR & Administration</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Job Type</InputLabel>
        <Select name="jobType" defaultValue="" required>
          <MenuItem value="Onsite (Part Time)">Onsite (Part Time)</MenuItem>
          <MenuItem value="Onsite (Full Time)">Onsite (Full Time)</MenuItem>
          <MenuItem value="Remote (Part Time)">Remote (Part Time)</MenuItem>
          <MenuItem value="Remote (Full Time)">Remote (Full Time)</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Level</InputLabel>
        <Select name="level" defaultValue="" required>
          <MenuItem value="Beginner-Level">Beginner-Level</MenuItem>
          <MenuItem value="Mid-Level">Mid-Level</MenuItem>
          <MenuItem value="Senior-Level">Senior-Level</MenuItem>
        </Select>
      </FormControl>
      <Input
        size="md"
        name="dayTime"
        type="text"
        placeholder="Day & Time"
        required
      />
      <Input
        size="md"
        name="salary"
        type="number"
        placeholder="Salary Range"
        required
      />
      <Input
        size="md"
        name="location"
        type="text"
        placeholder="Office Location"
        required
      />
      <Input
        size="md"
        name="deadline"
        placeholder="Application Deadline"
        required
      />
      <Buttons text="Submit" type="submit" />
    </form>
  );
};

export default Post;
