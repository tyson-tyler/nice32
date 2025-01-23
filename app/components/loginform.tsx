import React from "react";
import { Authbtn } from "./authbut";
import { loginWithCreds } from "@/actions/auth";

export const LoginForm = () => {
  return (
    <div>
      <form action={loginWithCreds}>
        <input type="Email" id="Email" name="email" />
        <input type="password" id="password" name="password" />
        <div>
          <Authbtn />
        </div>
      </form>
    </div>
  );
};
