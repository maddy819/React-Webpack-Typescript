import React from "react";
import UserInterface from "../../interfaces/UserInterface";
import "./UserComponent.scss";

const defaultProps: UserInterface = {
  name: "Shubham Agrawal",
  age: 34,
  address: "87 Summer St, Boston, MA 02110",
  dob: new Date(),
};

const UserComponent: React.FC<UserInterface> = ({
  name,
  age,
  address,
  dob,
}) => {
  return (
    <div>
      <h2>User Component</h2>
      Hello, <b>{name}</b>
      <br />
      You are <b>{age} years old</b>
      <br />
      You live at: <b>{address}</b>
      <br />
      You were born: <b>{dob.toDateString()}</b>
    </div>
  );
};

export default UserComponent;
