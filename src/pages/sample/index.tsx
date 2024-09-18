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

import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
// import { authLogin } from "@/redux/services/authService";
// import { useDispatch } from "react-redux";
import zustandStore from "@/utils/helpers/zustand";
import { useStore } from "zustand";
function LoginForm() {
  const { data: session } = useSession();
  console.log(session, "session_signin");
  const { token, setToken } = useStore(zustandStore);

  console.log(token, "token_session");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const dispatch = useDispatch();
  const onSubmit = async (data: LoginNew) => {
    console.log(data);
    try {
      const res = await signIn("sign-in", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log(res, "res");
      // const res = await dispatch(authLogin(data)).unwrap();
      const token = session?.user?.authorization?.access_token || null;
      setToken(token);
      // if (token) {
      //   zustandStore.setState({
      //     token: session?.user?.authorization?.access_token || null,
      //   });
      // }
      return res;
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username:</label>
      <input type="email" {...register("email")} />
      {errors.email && <div>This field is required</div>}

      <label>Password:</label>
      <input type="password" {...register("password")} />
      {errors.password && <div>This field is required</div>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
