import React, { useContext } from "react";
import { selfEmployedSchema, initialValueSelfEmployed } from "../../schemas";
import { useHandleValidation } from "../../hooks/useHandleValidation";
import { UserContext } from "../../contextAPI/UserContext";
import { Icons } from "../../icons/Icons";

function SelfEmployed(props) {
  const { user, token } = useContext(UserContext);
  const url = "/image-capture";
  const api = "http://localhost:4000/api/v1/createEmployment";

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useHandleValidation(
      initialValueSelfEmployed,
      selfEmployedSchema,
      url,
      api,
      token
    );

  values.uid = user?.signUp?.uid;

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="needs-validation"
      noValidate
    >
      <div className="row justify-content-center g-3 m-3 mb-4">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${
                errors.monthly_income && touched.monthly_income
                  ? "is-invalid"
                  : touched.monthly_income
                  ? "is-valid"
                  : ""
              }`}
              id="monthly_income"
              name="monthly_income"
              placeholder="Monthly Income"
              value={values.monthly_income}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="col-form-label" htmlFor="monthly_income">
              Monthly Income
            </label>
            {errors.monthly_income && touched.monthly_income ? (
              <p className="form-error text-danger">{errors.monthly_income}</p>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className={`form-control ${
                errors.professional_email && touched.professional_email
                  ? "is-invalid"
                  : touched.professional_email
                  ? "is-valid"
                  : ""
              }`}
              id="professional_email"
              name="professional_email"
              placeholder="Professional Email"
              value={values.professional_email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="professional_email" className="col-form-label">
              Professional Email id
            </label>
            {errors.professional_email && touched.professional_email ? (
              <p className="form-error text-danger">
                {errors.professional_email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${
                errors.business_nature && touched.business_nature
                  ? "is-invalid"
                  : touched.business_nature
                  ? "is-valid"
                  : ""
              }`}
              id="business_nature"
              name="business_nature"
              placeholder="Business Nature"
              value={values.business_nature}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="business_nature" className="col-form-label">
              Nature of Business
            </label>
            {errors.business_nature && touched.business_nature ? (
              <p className="form-error text-danger">{errors.business_nature}</p>
            ) : null}
          </div>
        </div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-primary w-100 py-3 btn-primary"
          >
            Next {Icons.next}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SelfEmployed;
