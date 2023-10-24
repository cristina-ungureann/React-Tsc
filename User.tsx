import React, { ReactNode } from "react";

type UserProps = {
  name: string;
  email: string;
  age: number;
  children?: ReactNode;
};

const User: React.FC<UserProps> = (props) => {
  return (
 <div>
    <h3>{props.name}</h3>
    <h5>{props.email}</h5>
    <p>{props.name} is {props.age} years old.</p>
 </div>
  );
}



 export default User;



