import React, { ReactNode } from "react";

type Item = {
  id: string;
  text: string;
};

const ListItem: React.FC<Item> = (props) => {
  return (
   <div>
            <li key={props.id}>{props.text}</li>
     </div>
  );
}



 export default ListItem;



