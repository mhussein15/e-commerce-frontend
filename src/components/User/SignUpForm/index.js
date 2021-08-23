import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledValidationText } from "./styles";
import { signup } from "../../../store/actions/authActions";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    const user_info = {
      username: data["username"],
      password: data["password"],
      email: data["email"],
      first_name: data["first_name"],
      last_name: data["last_name"],
      user_address: {
        address: data["address"],
        city: data["city"],
        country: data["country"],
        postal_code: data["postal_code"],
      },
    };
    dispatch(signup(user_info, history));
  };

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{ fontSize: "31px" }} className="text-center mb-5">
          Create an Account
        </h1>
        <div className="form-row">
          <div className="form-group col-6">
            {" "}
            <input
              className="form-control p-2"
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <StyledValidationText>
              {errors.username && "Username is required"}
            </StyledValidationText>
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <StyledValidationText>
            {errors.email && <span>{errors.email.message}</span>}
          </StyledValidationText>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          <StyledValidationText>
            {errors.address && "Address is required"}
          </StyledValidationText>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <input
              className="form-control"
              type="text"
              placeholder="First name"
              {...register("first_name", { required: true, maxLength: 80 })}
            />
            <StyledValidationText>
              {errors.first_name && "First Name is required"}
            </StyledValidationText>
          </div>
          <div className="form-group col-6">
            <input
              className="form-control"
              type="text"
              placeholder="Last name"
              {...register("last_name", { required: true, maxLength: 100 })}
            />
            <StyledValidationText>
              {errors.last_name && "Last Name is required"}
            </StyledValidationText>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-4">
            <input
              className="form-control"
              type="text"
              placeholder="City"
              {...register("city", { required: true, maxLength: 80 })}
            />
            <StyledValidationText>
              {errors.city && "City is required"}
            </StyledValidationText>
          </div>
          <div className="form-group col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Country"
              {...register("country", { required: true, maxLength: 100 })}
            />
            <StyledValidationText>
              {errors.country && "Country is required"}
            </StyledValidationText>
          </div>
          <div className="form-group col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Postal Code"
              {...register("postal_code", { required: true, maxLength: 100 })}
            />
            <StyledValidationText>
              {errors.postal_code && "Postal Code is required"}
            </StyledValidationText>
          </div>
        </div>
        <input type="submit" className="btn btn-outline-dark w-100 " />
      </form>
    </>
  );
}
