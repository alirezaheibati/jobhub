"use client";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import CvBox from "./CvBox";
import SummaryFrom from "./SummaryFrom";
import SummaryInfo from "./SummaryInfo";
import { useState } from "react";

export default function Summary({}) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <CvBox icon={faUserTie} title="User Overview">
        {editMode ? (
          <SummaryFrom />
        ) : (
          <SummaryInfo
            name="Alireza Heibati"
            employmentStatus="unemployed"
            lastJob="dentist"
            currentJob="software engineer"
            degree="bachelors degree"
          />
        )}
      </CvBox>
    </>
  );
}
