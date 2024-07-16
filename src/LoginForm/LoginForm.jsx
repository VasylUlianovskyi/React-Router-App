import { IoCreateOutline } from "react-icons/io5";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styles from "./LoginForm.module.css";
import classNames from "classnames";
import { useState } from "react";

const LOGIN_FORM_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkValidEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const checkValidPassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const confirmPasswordValue = ({ target: { value } }) => {
    setConfirmPassword(value);
  };

  const passwordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "confirmPassword") {
      setConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <article className={styles.loginFormArticle}>
      <div className={styles.createAccountIcon}>
        <IoCreateOutline className={styles.icon} />
      </div>
      <h2 className={styles.loginFormTitle}>Create Your Account</h2>
      <form className={styles.loginFormContainer}>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Full Name</span>
          <input
            type="text"
            name="name"
            required
            autoFocus
            placeholder="John Doe"
          />
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Email addres</span>
          <input
            // className={checkedValidInputs}
            type="email"
            name="email"
            value={email}
            required
            placeholder="johndoe@gmail.com"
            onChange={checkValidEmail}
          />
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Password</span>
          <input
            // className={checkedValidInputs}
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={checkValidPassword}
          />
          {showPassword ? (
            <FaRegEyeSlash
              className={styles.regEyeBtn}
              onClick={() => passwordVisibility("password")}
            />
          ) : (
            <FaRegEye
              className={styles.regEyeBtn}
              onClick={() => passwordVisibility("password")}
            />
          )}
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Confirm Password</span>
          <input
            // className={checkedValidInputs}
            type="password"
            name="password"
            value={confirmPassword}
            onChange={confirmPasswordValue}
            required
          />
        </label>
        <label className={styles.checkbox}>
          I Agree All Statements In Terms Of Service
          <input
            className={styles.chekedIcon}
            name="AgreeCheckBox"
            type="checkbox"
            // onChange
          />
          <span className={styles.newCheckboxIcon}></span>
        </label>
        <button className={styles.loginBtn} type="submit" disabled>
          Sing Up
        </button>
      </form>
      <p className={styles.link}>
        I'm already a member{" "}
        <span>
          <a className={styles.singInLink} href="#">
            Sing in
          </a>
        </span>
      </p>
    </article>
  );
}

export default LoginForm;
