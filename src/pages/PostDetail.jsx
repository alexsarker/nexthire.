import { Divider } from "@mui/material";
import React from "react";
import Buttons from "../components/Buttons";
import ButtonOut from "../components/ButtonOut";

const PostDetail = () => {
  return (
    <div className="my-16">
      <div className="mb-4">
        <h2 className="text-main text-5xl mb-2">Backend Developer</h2>
        <h6 className="text-[#00000099] text-2xl">AtoZ Company</h6>
      </div>
      <Divider />
      <div className="mt-8">
        <p>
          Overview: We are looking for a Backend Developer (Python Django)" who
          has knowledge, passion, and experience in designing and developing web
          applications. You will be responsible for developing backend code that
          efficiently interfaces with frontend code to transact data. You will
          need to collaborate with the front-end developer and designing team
          for the best output. So, being a team player is a must.
        </p>
        <div className="font-medium pt-8">
          <p>
            Job Type: <span className="font-normal">Remote (Full time)</span>
          </p>
          <p>
            Level: <span className="font-normal">Mid-Level</span>
          </p>
          <p>
            Day & Time:{" "}
            <span className="font-normal">Monday-Friday; 10AM to 7PM</span>
          </p>
          <p>
            Salary: <span className="font-normal">Negotiable</span>
          </p>
          <p>
            Office Location:{" "}
            <span className="font-normal">Los Angels, USA</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-main font-medium text-2xl">Application Deadline</h4>
        <h2 className="text-4xl mt-2">15.04.2025</h2>
      </div>
      <div className="flex gap-4 justify-end mt-8">
        <ButtonOut text="EDIT" />
        <ButtonOut text="DELETE" />
        <Buttons text="APPLY NOW" />
      </div>
    </div>
  );
};

export default PostDetail;
