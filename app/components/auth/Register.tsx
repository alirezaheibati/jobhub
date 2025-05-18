import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface RegisterProps {
  onAuthModeChange: (authstate: "login" | "register") => void;
}

export default function Register({ onAuthModeChange }: RegisterProps) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Please enter your full name")
      .min(5, "Name must be more than 5 characters."),
    mobile: Yup.string()
      .required("Please enter your phone number.")
      .matches(/^09[0-9]{9}$/, "Phone number format is not correct."),
    password: Yup.string()
      .required("Please enter your password.")
      .min(8, "Password length must be more than 8 characters."),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        mobile: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {}}
    >
      {({ isSubmitting }) => (
        <Form className="w-full px-4 flex flex-col justify-center items-center">
          <div className="mb-6">
            <h2 className="text-center font-bold text-3xl text-orange-400">
              Register{" "}
            </h2>
            <p className="text-center text-grey-200">
              Create an account for free
            </p>
          </div>

          <div className="w-full mb-2">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              full name:
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="bg-white h-10 w-full rounded-lg px-2 outline-none border mb-1"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500 pr-2"
            />
          </div>

          <div className="w-full mb-2">
            <label htmlFor="mobile" className="block text-gray-700 mb-1">
              phone number:
            </label>
            <Field
              id="mobile"
              name="mobile"
              type="text"
              placeholder="09123456789"
              className="bg-white h-10 w-full rounded-lg px-2 outline-none border mb-1"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-sm text-red-500 pr-2 "
            />
          </div>

          <div className="w-full mb-2">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              password:
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="bg-white h-10 w-full rounded-lg px-2 outline-none border mb-1"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-500 pr-2 "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 cursor-pointer text-white py-2 rounded-md font-semibold hover:bg-orange-500 mt-2"
          >
            {isSubmitting ? "Processing" : "Register"}
          </button>
          <p className="w-full text-sm text-gray-500 pr-4 py-2">
            Registerd already?
            <span
              className="font-semibold text-orange-400 cursor-pointer"
              onClick={() => onAuthModeChange("login")}
            >
              {" "}
              Login
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
}
