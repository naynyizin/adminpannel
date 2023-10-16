import React from "react";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

const User = () => {
  //Fetch data and send to Single Component
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
