import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid Email Address";
      }
      if (!values.password) {
        errors.password = "Password required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          values
        );
        console.log(response);
      } catch (error) {
        toast.error("Username or password is invalid");
        console.log(error);
      }
    },
  });
  return (
    <div className=" flex justify-center items-center">
      <form action="">
        <label htmlFor="" className=" text-2xl">Email</label>:
        <br></br>
        <input type="text" placeholder="Email" />
        <label htmlFor="" className=" text-2xl">Password</label>:
        <br></br>
        <input type="text" placeholder="Email" />
      </form>
     
    </div>
  );
};

export default Login;
