"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface FormValues {
  email: string;
  mobile: string;
  province: string;
  address: string;
  gender: string;
  maritalStatus: string;
  birthYear: number;
}

const genderOptions = ["Female", "Male"];
const marrigeOptions = ["Single", "Married"];

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  mobile: Yup.string()
    .required("Mobile is required")
    .matches(/^09[0-9]{9}$/, "Mobile format is wrong "),
  province: Yup.string().required("Province is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Select your gender"),
  maritalStatus: Yup.string().required("Select marital status"),
  birthYear: Yup.number().required("Birth year is required"),
});

interface InfoFormProps {
  onDeactiveEditMode: () => void;
}
export default function InfoForm({ onDeactiveEditMode }: InfoFormProps) {
  return (
    <Formik<FormValues>
      initialValues={{
        email: "",
        mobile: "",
        province: "",
        address: "",
        gender: "",
        maritalStatus: "",
        birthYear: 1991,
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
            <label className="font-semibold block mb-1">Email:</label>
            <Field
              type="email"
              name="email"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Mobile:</label>
            <Field
              type="number"
              name="mobile"
              placeholder="09123456789"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Address:</label>
            <Field
              as="textarea"
              id="address"
              name="address"
              className="bg-slate-100 w-full rounded-lg px-2 outline-none resize-none"
              rows={4}
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block mb-1">Province:</label>
            <Field
              type="text"
              name="province"
              className="bg-slate-100 w-full h-10 rounded-lg px-2 outline-none"
            />
            <ErrorMessage
              name="province"
              component="div"
              className="text-sm text-red-700"
            />
          </div>

          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block">Gender:</label>
            <ul className="flex justify-start items-start gap-2 md:gap-4 py-2 flex-col md:flex-row">
              {genderOptions.map((option) => (
                <li key={option} className="cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
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
              name="gender"
              component="div"
              className="text-sm text-red-700"
            />
          </div>
          <div className="mb-2 w-full md:w-1/2 px-2">
            <label className="font-semibold block">Marital Status:</label>
            <ul className="flex justify-start items-start gap-2 md:gap-4 py-2 flex-col md:flex-row">
              {marrigeOptions.map((option) => (
                <li key={option} className="cursor-pointer">
                  <Field
                    type="radio"
                    name="maritalStatus"
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
              name="maritalStatus"
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
