import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
interface LoginProps {
  onAuthModeChange: (authstate: "login" | "register") => void;
}

export default function Login({ onAuthModeChange }: LoginProps) {
  const validationSchema = Yup.object({
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
              Login
            </h2>
            <p className="text-center text-grey-200">
              Find your dream job in a day
            </p>
          </div>

          <div className="w-full mb-2">
            <label htmlFor="mobile" className="block text-gray-700 mb-1">
              username:
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
            {isSubmitting ? "processing..." : "login"}
          </button>
          <p className="w-full text-sm text-gray-500 pr-4 py-2">
            Don't have an account?
            <span
              className="font-semibold text-orange-400 cursor-pointer"
              onClick={() => onAuthModeChange("register")}
            >
              {" "}
              Register
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
}
