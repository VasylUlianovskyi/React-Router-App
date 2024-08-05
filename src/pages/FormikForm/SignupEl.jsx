import { ErrorMessage, Field, Form, Formik } from "formik";
import { SIGN_UP_VALIDATION_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./SingupEl.module.sass";
import classNames from "classnames";

function SignupEl() {
  const initialValues = {
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
    term: false,
  };

  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <div className={styles.signupContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      >
        {(formikProps) => {
          const userNameClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.firstName && formikProps.touched.firstName,
            [styles.invalid]:
              formikProps.errors.firstName && formikProps.touched.firstName,
          });

          const lastNameClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.lastName && formikProps.touched.lastName,
            [styles.invalid]:
              formikProps.errors.lastName && formikProps.touched.lastName,
          });

          const nickNameClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.nickName && formikProps.touched.nickName,
            [styles.invalid]:
              formikProps.errors.nickName && formikProps.touched.nickName,
          });

          const emailClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.email && formikProps.touched.email,
            [styles.invalid]:
              formikProps.errors.email && formikProps.touched.email,
          });

          const passwordClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.password && formikProps.touched.password,
            [styles.invalid]:
              formikProps.errors.password && formikProps.touched.password,
          });

          const confirmPasswordClassname = classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors.confirmPassword &&
              formikProps.touched.confirmPassword,
            [styles.invalid]:
              formikProps.errors.confirmPassword &&
              formikProps.touched.confirmPassword,
          });

          return (
            <>
              <h2>CREATE AN ACCOUNT</h2>
              <p>We always keep your name and email address private</p>
              <Form className={styles.form}>
                <Field
                  className={userNameClassname}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  autoFocus
                />
                <Field
                  className={lastNameClassname}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                <Field
                  className={nickNameClassname}
                  type="text"
                  name="nickName"
                  placeholder="nickname"
                />
                <Field
                  className={emailClassname}
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.emailError}
                />
                <Field
                  className={passwordClassname}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={styles.passwordError}
                />
                <Field
                  className={confirmPasswordClassname}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="span"
                  className={styles.confirmPasswrdError}
                />

                <label className={styles.radioGroup}>
                  <Field type="radio" name="type" value="buyer" />
                  <span className={styles.radioElDescript}>
                    Join As a Buyer
                  </span>
                  <span>
                    I am looking for a Name, Logo or Tragline for my business,
                    brand or product.
                  </span>
                </label>
                <label className={styles.radioGroup}>
                  <Field type="radio" name="type" value="creative" />
                  <span className={styles.radioElDescript}>
                    Join As a Creative
                  </span>
                  <span>
                    I plan to submit name ideas, Logo desing or sell names in
                    Domain Marketplace.
                  </span>
                </label>

                <label className={styles.checkboxGroup}>
                  <Field type="checkbox" name="term" />
                  By clicking this checkbox, you agree to our{"  "}
                  <a href="#">Terms of Service.</a>
                </label>

                <button type="submit" className={styles.submitButton}>
                  Create Account
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default SignupEl;
