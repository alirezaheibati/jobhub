"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface FormValues {
  name: string;
  currentJob: string;
  lastJob: string;
  lastDegree: string;
  employmentStatus: string;
}

const employmentOptions = ["Employed", "Looking for better job", "Unemployed"];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  currentJob: Yup.string().required("Current job is required"),
  lastJob: Yup.string().required("Last job is required"),
  lastDegree: Yup.string().required("Last degree is required"),
  employmentStatus: Yup.string().required("Select employment status"),
});

interface SummaryFromProps {
  onDeactiveEditMode: () => void;
}
export default function SummaryFrom({ onDeactiveEditMode }: SummaryFromProps) {
  return (
    <Formik<FormValues>
      initialValues={{
        name: "",
        currentJob: "",
        lastJob: "",
        lastDegree: "",
        employmentStatus: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-start items-stretch"
        >
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Name:</label>
            <Field
              type="text"
              name="name"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Current Job:</label>
            <Field
              type="text"
              name="currentJob"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="currentJob"
              component="div"
              className="text-sm text-red-700"
            />
          </div>

          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Last Job:</label>
            <Field
              type="text"
              name="lastJob"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="lastJob"
              component="div"
              className="text-sm text-red-700"
            />
          </div>

          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Last Degree:</label>
            <Field
              type="text"
              name="lastDegree"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="lastDegree"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full px-2">
            <label className="font-semibold block mb-1">
              Employment Status:
            </label>
            <ul className="flex justify-start items-start gap-2 md:gap-4 py-2 flex-col md:flex-row">
              {employmentOptions.map((option) => (
                <li key={option} className="cursor-pointer">
                  <Field
                    type="radio"
                    name="employmentStatus"
                    value={option}
                    id={option}
                  />
                  <label htmlFor={option} className="ml-1">
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            <ErrorMessage
              name="employmentStatus"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="flex gap-2 md:gap-4 justify-start items-center flex-wrap">
            <button
              type="submit"
              className="bg-primary h-10 w-32 rounded-lg text-slate-50"
            >
              Save
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
  );
}
