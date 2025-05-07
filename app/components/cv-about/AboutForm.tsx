"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface FormValues {
  about: string;
}

const validationSchema = Yup.object({
  About: Yup.string()
    .required("About me is required")
    .min(20, "At least 20 characters"),
});

interface AboutFormProps {
  onDeactiveEditMode: () => void;
}
export default function AboutForm({ onDeactiveEditMode }: AboutFormProps) {
  return (
    <Formik<FormValues>
      initialValues={{
        about: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-start items-stretch"
        >
          <div className="mb-2 w-full px-2">
            <label className="font-semibold block mb-1">About me:</label>
            <Field
              as="textarea"
              id="about"
              name="about"
              className="bg-slate-100 w-full rounded-lg px-2 outline-none resize-none"
              rows={5}
            />
            <ErrorMessage
              name="about"
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
