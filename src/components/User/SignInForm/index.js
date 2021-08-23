//React Imports
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../../../store/actions/authActions";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);

  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(signin(data, history));
  };

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ fontSize: "31px" }} className="text-center mb-5">
          SignIn
        </h1>
        <div className="form-group">
          <input
            className="form-control p-2"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </div>
        <div class="form-group">
          <input
            className="form-control"
            type={password ? "password" : "text"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <div className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={() => setPassword(!password)}
            />
            <label className="form-check-label" for="exampleCheck1">
              Check Password
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-outline-dark w-100 " />
      </form>
    </>
  );
}
