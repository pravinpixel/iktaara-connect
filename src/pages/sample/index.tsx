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
import { signIn } from "next-auth/react";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: LoginNew) => {
    console.log(data);
    try {
      const res = await signIn("sign-in", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      console.log(res, "res");
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
