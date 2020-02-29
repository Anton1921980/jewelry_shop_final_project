import React from "react";
import axios from "axios";

export function AddSubscriber(props) {
  let email = props.email;
  const newSubscriber = {
    email: `${email}`,
    letterSubject: "Test letter (final project)",
    letterHtml:
      "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>"
  };
  // console.log(email);
  if (email !== "") {
    axios
      .post("http://localhost:5000/customers/login", {
        loginOrEmail: "customer@gmail.com",
        password: "1111111"
      })
      .then(response => {
        let token = response.data.token;
        axios
          .post("http://localhost:5000/subscribers", newSubscriber, {
            headers: { Authorization: `${token}` }
          })
          .then(newSubscriber => {
            console.log("success");
            console.log(newSubscriber);
          })
          .catch(err => {
            console.log("error add");
            console.log(err.response.data);
          });
      })
      .catch(err => {
        console.log("error auth");
        console.log(err);
      });
  }
  return <div></div>;
}