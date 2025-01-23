import React from "react";
import { useFormStatus } from "react-dom";

export const Authbtn = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button disabled={pending}>{pending ? "loading" : "sigIn"}</button>
    </div>
  );
};
