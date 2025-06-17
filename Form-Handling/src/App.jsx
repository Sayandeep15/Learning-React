import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);

  //Form dependencies
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmiting },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="card">
        <h1>Form</h1>
        {isSubmiting && <div>Loading...</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 16, message: "Min length is 16" },
            })}
            type="text"
          />
          {/* Display errors */}
          {errors.username && (
            <div className="error">{errors.username.message}</div>
          )}

          <input
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Min length is 8" },
            })}
            type="password"
          />
          {/* Display errors */}
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}

          <input disabled={isSubmiting} type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
