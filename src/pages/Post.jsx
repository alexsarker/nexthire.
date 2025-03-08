import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Buttons from "../components/Buttons";
import { useState } from "react";

const Post = () => {
  const [age, setAge] = useState("");
  const [jobType, setJobType] = useState("");
  const [level, setLevel] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setJobType(event.target.value);
    setLevel(event.target.value);
  };

  return (
    <div className="flex flex-col mt-12 gap-8">
      <h5 className="text-main text-3xl text-center">Post a Job</h5>
      <Input size="md" placeholder="Job Title" />
      <TextField
        id="standard-multiline-flexible"
        label="Job Description"
        multiline
        maxRows={4}
        variant="standard"
      />
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">
          Job Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>Development</MenuItem>
          <MenuItem value={20}>Sales & Marketing</MenuItem>
          <MenuItem value={30}>Accounts</MenuItem>
          <MenuItem value={40}>Creative</MenuItem>
          <MenuItem value={50}>Engineering</MenuItem>
          <MenuItem value={60}>Creative</MenuItem>
          <MenuItem value={70}>Digital Marketing</MenuItem>
          <MenuItem value={80}>HR & Administration</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Job Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={jobType}
          onChange={handleChange}
          label="JobType"
        >
          <MenuItem value={10}>Onsite (Part Time)</MenuItem>
          <MenuItem value={10}>Onsite (Full Time)</MenuItem>
          <MenuItem value={10}>Remote (Part Time)</MenuItem>
          <MenuItem value={10}>Remote (Full Time)</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={level}
          onChange={handleChange}
          label="Level"
        >
          <MenuItem value={10}>Beginner-Level</MenuItem>
          <MenuItem value={20}>Mid-Level</MenuItem>
          <MenuItem value={30}>Senior-Level</MenuItem>
        </Select>
      </FormControl>
      <Input size="md" placeholder="Day & Time" />
      <Input size="md" placeholder="Salary Range" />
      <Input size="md" placeholder="Office Location" />
      <Buttons text="Submit" />
    </div>
  );
};

export default Post;
