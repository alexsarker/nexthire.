import { Input } from "@mui/material";
import Buttons from "../components/Buttons";
const Post = () => {
  return (
    <div className="flex flex-col mt-12 gap-8">
      <h5 className="text-main text-3xl text-center">Post a Job</h5>
      <Input size="md" placeholder="Job Title" />
      <Input size="md" placeholder="Job Category" />
      <Input size="md" placeholder="Job Category" />
      <Input size="md" placeholder="Onsite/ Remote" />
      <Input size="md" placeholder="Job Type" />
      <Input size="md" placeholder="Level" />
      <Input size="md" placeholder="Shift" />
      <Input size="md" placeholder="Salary Range" />
      <Input size="md" placeholder="Office Location" />
      <Buttons text="Submit" />
    </div>
  );
};

export default Post;
