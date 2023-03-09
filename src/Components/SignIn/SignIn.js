import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "./SignIn.css";
import { useEffect } from "react";
import auth from "../firebasez";
const SignIn = () => {
  const [showhelp, setShowHelp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emaillogin, setEmailLogin] = useState("");
  const [passwordlogin, setPasswordLogin] = useState("");
  const [userdata, setUserData] = useState("");
  // const [userid, setUserId] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setEmail(currentUser?.email);
      console.log(currentUser);
    });
  }, []);

  const signUp = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(createdUser);
      setEmail(createdUser.user.auth.currentUser.email);
      // window.location.href = '/'

      navigate("/");
    } catch (error) {
      throw new Error("Error Through Insertion");
      // window.location.href = '/error'
    }
  };
  const signIn = async () => {
    try {
      const checkUser = await signInWithEmailAndPassword(
        auth,
        emaillogin,
        passwordlogin
      );
      console.log(checkUser);
    } catch (error) {
      throw new Error("Error Through Login");
      // window.location.href = '/error'
    }
  };
  const logOut = async () => {
    await signOut(auth);
  };

  const showHideNeedHelp = (e) => {
    setShowHelp(!showhelp);
    e.preventDefault();
  };
  // console.log(window.location.href)
  if (window.location.href == "http://localhost:3000/signin") {
    let headerSelector = document.querySelector(".header");
    //    console.log(headerSelector)
    // headerSelector.style.display = "none"
  }

  return (
    <div className="signin__area">
      <div className="signin__wrapper">
        <div className="signin__wrap">
          <div className="signin__logo"></div>
          <div className="signin__content">
            <div className="sigin__title">
              <span className="signin__word">Sign in {userdata}</span>
            </div>
            <div className="signin__input_email">
              <label htmlFor="email" className="signin__email_label">
                Email or mobile phone number
              </label>
              <input
                // onChange={(event) => setEmail(event.target.value)}
                // type="text"
                // id="email"
                onChange={(event) => setEmailLogin(event.target.value)}
                type="text"
                id="email"
              />
            </div>
            <div className="signin__input_password">
              <label htmlFor="password" className="signin__password_label">
                Password
              </label>
              <input
                // onChange={(event) => setPassword(event.target.value)}
                // type="password"
                // id="password"
                onChange={(event) => setPasswordLogin(event.target.value)}
                type="password"
                id="password"
              />
            </div>
            <div className="signin__btn_area">
              <button onClick={signIn} className="signin_submit">
                Sign in
              </button>
            </div>

            <div className="signin__conditions">
              <span className="signin__cond_link">
                By continuing, you agree to Amazon's{" "}
                <a href="" style={{ textDecoration: "none", color: "blue" }}>
                  {" "}
                  Conditions of <br /> Use{" "}
                </a>{" "}
                and Privacy Notice.
              </span>
            </div>

            <div className="signin__needhelp">
              <i className="fa ma-needhelp"></i>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "14px",
                }}
                onClick={showHideNeedHelp}
              >
                Need help?
              </a>
            </div>

            {showhelp ? (
              <div className="showhide__class">
                <a href="" className="forgot">
                  Forgot your password?
                </a>
                <a href="" className="other__issues">
                  Other issues with Sign-In
                </a>
              </div>
            ) : null}
          </div>

          {/* <div className="signin__newtoamazon"> */}
          <span className="signin__newtoamazon">New to Amazon?</span>
          <div className="signup__btn_area">
            <button onClick={signUp} className="signup_submit">
              Sign up
            </button>
          </div>
          <div className="signup__btn_area">
            <button onClick={logOut} className="signup_submit">
              Sign Out
            </button>
          </div>
        </div>
      </div>
      <div className="singin__footer">{/* <h1>welcome</h1> */}</div>
    </div>
  );
};

export default SignIn;