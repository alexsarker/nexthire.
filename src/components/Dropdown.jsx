import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const categories = [
  "Development",
  "Sales & Marketing",
  "Accounts",
  "Engineering",
  "Creative",
  "Digital Marketing",
  "HR & Administration",
];

const Dropdown = () => {
  const [jobs, setJobs] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    categories.forEach((category) => {
      fetch(`http://localhost:5000/jobs/${category}`)
        .then((res) => res.json())
        .then((data) => setJobs((prev) => ({ ...prev, [category]: data })));
    });
  }, []);

  return (
    <div className="mt-12">
      {categories.map((category) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {jobs[category]?.length > 0 ? (
              jobs[category].map((job) => (
                <div
                  key={job._id}
                  className="flex justify-between items-center border-b border-b-neutral-300 py-2"
                >
                  <Typography variant="body2">{job.jobTitle}</Typography>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => navigate(`/post/${job._id}`)}
                  >
                    Apply Now
                  </Button>
                </div>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No jobs available.
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Dropdown;
