"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface FormValues {
  jobTitle: string;
  companyName: string;
  description: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  stillWorking: boolean;
}

const MonthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Job title is required"),
  companyName: Yup.string().required("Company name is required"),
  startMonth: Yup.string().required("Please select starting month"),
  startYear: Yup.string().required("Please select starting year"),
  endYear: Yup.string().required("Please select end year"),
  endMonth: Yup.string().required("Please select end month"),
});

interface JobRecordsFormProps {
  onDeactiveEditMode: () => void;
}
export default function JobRecordsForm({
  onDeactiveEditMode,
}: JobRecordsFormProps) {
  const [isStillWorking, setIsStillWorking] = useState(true);
  function changeIsStillWorkingHandler() {
    setIsStillWorking((prev) => !prev);
  }
  return (
    <Formik<FormValues>
      initialValues={{
        jobTitle: "",
        companyName: "",
        description: "",
        startMonth: "January",
        startYear: "",
        endMonth: "January",
        endYear: "",
        stillWorking: isStillWorking,
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
            <label className="font-semibold block mb-1">Job title:</label>
            <Field
              type="text"
              name="job"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="job"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Company name:</label>
            <Field
              type="text"
              name="company"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="company"
              component="div"
              className="text-sm text-red-700"
            />
          </div>

          <div className="mb-2 w-full">
            <label className="font-semibold block mb-1 pl-2">
              Starting Date:
            </label>
            <div className="flex justify-start items-stretch">
              <div className="w-1/2 px-2">
                <Field
                  as="select"
                  name="startMonth"
                  value="month"
                  id="month"
                  className="bg-slate-100 h-10 w-full rounded-lg px-2 outline-none"
                >
                  {MonthOptions.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="startMonth"
                  component="div"
                  className="text-sm text-red-700"
                />
              </div>
              <div className="w-1/2 px-2">
                <Field
                  type="number"
                  name="startYear"
                  className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
                />
                <ErrorMessage
                  name="startYear"
                  component="div"
                  className="text-sm text-red-700"
                />
              </div>
            </div>
          </div>
          <div className="mb-2 w-full">
            <label className="font-semibold mb-1 block pl-2">
              Finish Date:
            </label>
            <div className="pl-2 mb-1">
              <Field
                type="checkbox"
                id="stillWorking"
                name="stillWorking"
                onClick={changeIsStillWorkingHandler}
              />
              <label htmlFor="stillWorking" className="font-medium ml-2">
                Still Working?
              </label>
            </div>
            <div className="flex justify-start items-stretch">
              <div className="w-1/2 px-2">
                <Field
                  as="select"
                  name="endMonth"
                  value="month"
                  id="month"
                  disabled={isStillWorking}
                  className="bg-slate-100 h-10 w-full rounded-lg px-2 outline-none disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {MonthOptions.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </Field>
                {!isStillWorking && (
                  <ErrorMessage
                    name="endMonth"
                    component="div"
                    className="text-sm text-red-700"
                  />
                )}
              </div>
              <div className="w-1/2 px-2">
                <Field
                  type="number"
                  name="endYear"
                  placeholder="select end year"
                  className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={isStillWorking}
                />
                {!isStillWorking && (
                  <ErrorMessage
                    name="endYear"
                    component="div"
                    className="text-sm text-red-700"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-2 w-full px-2">
            <label className="font-semibold block mb-1">
              Description: <span className="text-xs">(optional)</span>
            </label>
            <Field
              as="textarea"
              id="job-record-description"
              name="job-record-description"
              className="bg-slate-100 w-full rounded-lg px-2 outline-none resize-none"
              rows={4}
            />
          </div>
          <div className="flex gap-2 md:gap-4 justify-start items-center flex-wrap px-2">
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
