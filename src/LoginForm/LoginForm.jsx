import { IoCreateOutline } from "react-icons/io5";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styles from "./LoginForm.module.css";
import classNames from "classnames";
import { useState } from "react";

const LOGIN_FORM_REG_EXP = {
  fullname: /^[A-Za-z]+\s[A-Za-z]+$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};
function LoginForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheked, setIsCheked] = useState(false);

  const checkFullName = ({ target: { value } }) => {
    setFullName(value);
  };

  const checkValidEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const checkValidPassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const confirmPasswordValue = ({ target: { value } }) => {
    setConfirmPassword(value);
  };

  const checkBoxCheked = ({ target: { value } }) => {
    setIsCheked(!isCheked);
  };

  const passwordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setFullName("");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const setIntupsClassName = (name, value) => {
    const validValue = LOGIN_FORM_REG_EXP[name].test(value);

    return classNames(styles.formInput, {
      [styles.valid]: validValue,
      [styles.invalid]: !validValue,
    });
  };

  const setConfirmPasswordClassName = (passwordValue, confirmPasswordValue) => {
    const passwordRegExp = LOGIN_FORM_REG_EXP["password"];
    const validPassword = passwordRegExp.test(passwordValue);
    const passwordsMatch = passwordValue === confirmPasswordValue;

    return classNames(styles.formInput, {
      [styles.valid]: validPassword && passwordsMatch,
      [styles.invalid]: !passwordsMatch || !validPassword,
    });
  };

  const passwordIcon = (type, showPassword) =>
    showPassword ? (
      <FaRegEyeSlash
        className={styles.regEyeBtn}
        onClick={() => passwordVisibility(type)}
      />
    ) : (
      <FaRegEye
        className={styles.regEyeBtn}
        onClick={() => passwordVisibility(type)}
      />
    );

  return (
    <article className={styles.loginFormArticle}>
      <div className={styles.createAccountIcon}>
        <IoCreateOutline className={styles.icon} />
      </div>
      <h2 className={styles.loginFormTitle}>Create Your Account</h2>
      <form className={styles.loginFormContainer} onSubmit={formSubmitHandler}>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Full Name</span>
          <input
            className={setIntupsClassName("fullname", fullname)}
            type="text"
            name="name"
            value={fullname}
            required
            autoFocus
            placeholder="John Doe"
            onChange={checkFullName}
          />
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Email addres</span>
          <input
            className={setIntupsClassName("email", email)}
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
            className={setIntupsClassName("password", password)}
            type={showPassword ? "text" : "password"}
            name="password"
            required
            value={password}
            onChange={checkValidPassword}
          />
          {passwordIcon("password", showPassword)}
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Confirm Password</span>
          <input
            className={setConfirmPasswordClassName(password, confirmPassword)}
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={confirmPasswordValue}
            required
          />
          {passwordIcon("confirmPassword", showConfirmPassword)}
        </label>
        <label className={styles.checkbox}>
          I Agree All Statements In Terms Of Service
          <input
            className={styles.chekedIcon}
            name="AgreeCheckBox"
            type="checkbox"
            checked={isCheked}
            onChange={checkBoxCheked}
          />
          <span className={styles.newCheckboxIcon}></span>
        </label>
        <button
          className={`${styles.loginBtn} ${isCheked ? styles.active : ""}`}
          type="submit"
          disabled={!isCheked}
        >
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
