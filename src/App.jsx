import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form :", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>

          <input
            className={errors.firstName ? "error" : ""}
            {...register("firstName", {
              required: "The name is required",
              maxLength: {
                value: 10,
                message: "The name should be less than 10 characters",
              },
              minLength: {
                value: 3,
                message: "The name should be greater than 3 characters",
              },
            })}
          />

          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>

        <br />

        <div>
          <label>Middle Name:</label>
          <input {...register("middleName")} />
        </div>

        <br />

        <div>
          <label>Last Name:</label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "The name should contain only letters",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>

        <br />

        <input type="submit" disabled={isSubmitting} />
      </form>
    </div>
  );
}

export default App;
