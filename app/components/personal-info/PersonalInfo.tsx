"use client";
import CvBox from "../summary/CvBox";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InfoForm from "./InfoForm";
import InfoDetails from "./InfoDetails";

export default function PersonalInfo() {
  const [editMode, setEditMode] = useState(false);
  function editModeActivateHandler() {
    setEditMode(true);
  }
  function editModeDeactiveHandler() {
    setEditMode(false);
  }
  return (
    <CvBox
      title="Personal Information"
      icon={faUser}
      editMode={!editMode}
      onActiveEditMode={editModeActivateHandler}
    >
      {editMode ? (
        <InfoForm onDeactiveEditMode={editModeDeactiveHandler} />
      ) : (
        <InfoDetails
          email="Alirezaheibati91@gmail.com"
          mobile="09120431012"
          province="Zanjan"
          address="Azadi square, keshavarz street, Sadr Allay, number 47"
          birthYear={1991}
          maritalStatus="Single"
          gender="Male"
        />
      )}
    </CvBox>
  );
}
