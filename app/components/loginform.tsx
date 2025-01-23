import React from "react";
import { Authbtn } from "./authbut";

export const LoginForm = () => {
  return (
    <div>
      <form>
        <input type="Email" id="Email" name="email" />
        <input type="password" id="password" name="password" />
        <div>
          <Authbtn />
        </div>
      </form>
    </div>
  );
};
