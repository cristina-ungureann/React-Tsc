import React, { ReactNode } from "react";
import { ToDoItem } from "../classes/ToDoItem";
import ListItem from "./ListItem";

type ToDosProps = {
  items: ToDoItem[];
  children?: ReactNode;
};

const ToDos: React.FC<ToDosProps> = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
          <ListItem id={item.id} text={item.text} />
        ))}
    </ul>
  );
}



 export default ToDos;



