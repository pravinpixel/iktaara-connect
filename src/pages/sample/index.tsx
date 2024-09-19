// import zustandStore from "@/utils/helpers/zustand";
// import { useStore } from "zustand";

// function MyComponent() {
//   const { token, setToken } = useStore(zustandStore);
//   console.log(token, "jjjj");

//   const handleTokenChange = () => {
//     setToken("xsgsahxusaisa");
//   };

//   return (
//     <div>
//       <p>Current Token: {token}</p>
//       <button onClick={handleTokenChange}>Change Token</button>
//     </div>
//   );
// }

// export default MyComponent;

// import { FormProvider, useForm, useFormContext } from "react-hook-form";
// import { signIn, useSession } from "next-auth/react";
// // import { authLogin } from "@/redux/services/authService";
// // import { useDispatch } from "react-redux";
// import zustandStore from "@/utils/helpers/zustand";
// import { useStore } from "zustand";
// import InputField from "@/components/formfields/TextBox";
// import { Stack } from "@mui/material";
// function LoginForm() {
//   const { data: session } = useSession();
//   console.log(session, "session_signin");
//   const { token, setToken } = useStore(zustandStore);

//   console.log(token, "token_session");
//   const {
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useFormContext();
//   const methods = useForm();
//   // const dispatch = useDispatch();
//   const handlePasswordReset = async (data: LoginNew) => {
//     console.log(data);
//     try {
//       const res = await signIn("sign-in", {
//         redirect: false,
//         email: data.email,
//         password: data.password,
//       });
//       console.log(res, "res");
//       // const res = await dispatch(authLogin(data)).unwrap();
//       const token = session?.user?.authorization?.access_token || null;
//       setToken(token);
//       // if (token) {
//       //   zustandStore.setState({
//       //     token: session?.user?.authorization?.access_token || null,
//       //   });
//       // }
//       return res;
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };

//   return (
//     <FormProvider {...methods}>
//       <Stack
//         display={"flex"}
//         alignItems={"center"}
//         component={"form"}
//         onSubmit={handleSubmit(handlePasswordReset)}
//       >
//         <InputField
//           name="email"
//           label="Email"
//           placeholder="Email"
//           type="email"
//           size="medium"
//           // {...register("email")}
//         />
//         {/* {errors.email && <div>This field is required</div>} */}
//         {/* <label>Password:</label>
//       <input type="password" {...register("password")} />
//       {errors.password && <div>This field is required</div>} */}
//         <button type="submit">Login</button>
//       </Stack>
//     </FormProvider>
//   );
// }

// export default LoginForm;

import { useForm, FormProvider } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import zustandStore from "@/utils/helpers/zustand";
import { useStore } from "zustand";
import { Stack } from "@mui/material";
import InputField from "@/views/components/form-fields/TextField";
import CustomCheckbox from "@/views/components/form-fields/CheckBox";
import SelectField from "@/views/components/form-fields/SelectField";
import CustomButton from "@/views/components/form-fields/CustomButton";
import Radio from "@mui/material/Radio";

function LoginForm() {
  const { data: session } = useSession();
  const { setToken } = useStore(zustandStore);
  const methods = useForm(); // Initialize form methods

  const handlePasswordReset = async (data: any) => {
    try {
      const res = await signIn("sign-in", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      const token = session?.user?.authorization?.access_token || null;
      setToken(token);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <Stack
        display={"flex"}
        alignItems={"center"}
        component={"form"}
        onSubmit={methods.handleSubmit(handlePasswordReset)}
      >
        <InputField
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          InputProps={{ variant: "customInput" }} // Pass custom variant here
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
        />
        <CustomCheckbox name="mark_as_completed" label="Mark as Completed" />
        <SelectField name="priority_id" label="Task priority" />
        <div style={{ marginTop: "60px" }}>
          <CustomButton>Login</CustomButton>
          <CustomButton variant="primary-button">Login</CustomButton>
        </div>
        <Radio />
      </Stack>
    </FormProvider>
  );
}

export default LoginForm;
