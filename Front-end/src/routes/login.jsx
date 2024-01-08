import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, redirect } from "react-router-dom";
import globalInstance from "../global";
import { loginLinks, sidebarData } from "../data";

import styles from "../styleSheets/login.module.css";

export const action = async ({ request }) => {
  const form = await request.formData();
  const formEntries = {};
  for (const [key, value] of form.entries()) {
    formEntries[key] = value;
  }
  const loginData = JSON.stringify(formEntries);
  console.log(loginData);
  return redirect("/account");
  // const myInit = {
  //   method: "POST",
  //   headers: new Headers({
  //       "Content-Type": "application/json",
  //       'Accept': 'application/json',
  //   }),
  //   body: loginData,
  // };
  // REQUEST OBJECT FOR FETCH:
  // const myRequest= new Request("http://localhost:5172/login", myInit);
  try {
    /*Using fetch to send data to the API*/
    // const answer = await fetch(myRequest);
    // if(!answer.ok){
    //   throw new Error(`${answer.status} ${answer.statusText}`);
    // }
    // const response = await answer.json();
    // if(response.authentification){
    //   return redirect('/');
    // } else{
    //   return redirect ('/signup')
    // }

    console.log(loginData);
    const response = await globalInstance.post("login", loginData, {
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.data.authentification) {
      return redirect("/");
    } else {
      return redirect("/signup");
    }
  } catch (error) {
    console.error(error);
  }
};
// USING FETCH WITHOUT THE ASYNC/AWAIT
//fetch("http://localhost:5172/login",myInit)
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// };

const LoginPage = () => {
  return (
    <div className={styles["login"]}>
      <div className={styles["login-container"]}>
        <div className={styles["login-title"]}>
          <h2>Log in</h2>
        </div>
        <Form className={styles["login-form"]} method="POST">
          <label htmlFor="mail">Email:</label>
          <input id="mail" type="text" name="email" placeholder="Email" />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" name="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </Form>
          <div className={styles.center}><Link to="#" style={{ color: "blue",textAlign:"center" }}>
            I forgot my password
          </Link></div>
        <div className={styles["login-footer"]}>
          {loginLinks.map((option, index) => {
            const { link, text, icon } = option;
            return (
              <button key={index} className={styles.logbtn}>
                <Link to={link} className={styles.link}>
                  {icon} {text}
                </Link>
              </button>
            );
          })}
        </div>
      </div>
      <h4>You don't have an account? </h4>
      <button className={styles.logbtn} style={{width:"13rem",padding:"0.3rem 0.5rem"}}><Link className={styles.link} to="/signup">Sign up for free</Link></button>
    </div>
  );
};

export default LoginPage;
