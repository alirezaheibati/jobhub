"use client";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CvBox from "../summary/CvBox";
import AboutForm from "./AboutForm";
import AboutDetails from "./AboutDetails";

export default function AboutMe({}) {
  const [editMode, setEditMode] = useState(false);

  function editModeActivateHandler() {
    setEditMode(true);
  }
  function editModeDeactiveHandler() {
    setEditMode(false);
  }

  return (
    <>
      <CvBox
        icon={faUserPen}
        title="About Me"
        editMode={!editMode}
        onActiveEditMode={editModeActivateHandler}
      >
        {editMode ? (
          <AboutForm onDeactiveEditMode={editModeDeactiveHandler} />
        ) : (
          <AboutDetails
            about={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatibus blanditiis, aliquid, iure eligendi adipisci voluptas aperiam delectus quod praesentium minima nobis aliquam pariatur? Tempore dicta dignissimos modi nihil quidem?"
            }
          />
        )}
      </CvBox>
    </>
  );
}
