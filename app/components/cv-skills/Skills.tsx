"use client";
import { faUserGear, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CvBox from "../summary/CvBox";
import SkillsFrom from "./SkillsForm";
import SkillsList from "./SkillsList";

export default function Skills({}) {
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
        icon={faUserGear}
        title="Technical Skills"
        editMode={!editMode}
        onActiveEditMode={editModeActivateHandler}
      >
        {editMode ? (
          <SkillsFrom
            onDeactiveEditMode={editModeDeactiveHandler}
            skills="HTML, CSS, JavaScript, TypeScript, Tailwind, Next.js"
          />
        ) : (
          <SkillsList skills="HTML, CSS, JavaScript, TypeScript, Tailwind, Next.js" />
        )}
      </CvBox>
    </>
  );
}
