"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SkillItem from "./SkillItem";
interface FormValues {
  skill: string;
}

const validationSchema = Yup.object({
  skill: Yup.string().required("Skill title is required"),
});

interface SkillsFromProps {
  onDeactiveEditMode: () => void;
  skills: string;
}
export default function SkillsFrom({
  onDeactiveEditMode,
  skills,
}: SkillsFromProps) {
  return (
    <>
      <div className="flex justify-start gap-2 items-center flex-wrap mb-4">
        {skills.split(", ").map((skill, idx) => (
          <SkillItem key={idx} title={skill} removeable />
        ))}
      </div>
      <Formik<FormValues>
        initialValues={{
          skill: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-start items-stretch"
          >
            <div className="mb-2 w-full">
              <label className="font-semibold block mb-1">Skill title:</label>
              <Field
                type="text"
                name="skill"
                className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
              />
              <ErrorMessage
                name="skill"
                component="div"
                className="text-sm text-red-700"
              />
            </div>

            <div className="flex gap-2 md:gap-4 justify-start items-center flex-wrap">
              <button
                type="submit"
                className="bg-primary h-10 w-32 rounded-lg text-slate-50"
              >
                Add
              </button>
              <button
                onClick={onDeactiveEditMode}
                type="button"
                className="bg-red-400 h-10 w-32 rounded-lg text-slate-50"
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
