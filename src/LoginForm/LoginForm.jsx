import { IoCreateOutline } from "react-icons/io5";
import styles from "./LoginForm.module.css";

const LOGIN_FORM_REG_EXP = {
  fullname: /^[A-Z][a-z]{1, 31}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};
function LoginForm() {
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
            // className={checkedValidInputs}
            type="text"
            name="name"
            // value={fullname}
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
            // value={email}
            required
            placeholder="johndoe@gmail.com"
          />
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Password</span>
          <input
            // className={checkedValidInputs}
            type="password"
            name="password"
            // value={password}
          />
        </label>
        <label className={styles.loginForm}>
          <span className={styles.inputCaption}>Confirm Password</span>
          <input
            // className={checkedValidInputs}
            type="password"
            name="password"
            // value={password}
            required
          />
        </label>
        <label className={styles.checkbox}>
          I Agree All Statements In Terms Of Service
          <input
            className={styles.chekedIcon}
            name="AgreeCheckBox"
            type="checkbox"
            // checked
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
