import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./HomePage.module.sass";

function LoginEl() {
  const initialValues = { login: "", password: "" };
  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <div className={styles.loginFormWrapper}>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LOGIN_SCHEMA}
      >
        <Form className={styles.inputContainer}>
          <Field
            type="text"
            name="login"
            className={styles.input}
            placeholder="your@login"
          />
          <ErrorMessage
            name="login"
            component="span"
            className={styles.errorMessageLogin}
          />
          <Field type="password" name="password" className={styles.input} />
          <ErrorMessage
            name="password"
            component="span"
            className={styles.errorMessage}
          />
          <button type="submit" className={styles.loginBtn}>
            LOGIN
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginEl;
