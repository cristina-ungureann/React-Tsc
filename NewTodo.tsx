import { useRef } from "react";

export const NewToDo = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
 
   const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();

  const enteredText = todoTextInputRef.current!.value;

  if (enteredText.trim().length === 0)
{
    //
    return;
}



   }

    return <form onSubmit={submitHandler}>
        <label htmlFor="txt">ToDo Text</label>
        <input type="text" name="" id="text" ref={todoTextInputRef} />
        <button>Add ToDo</button>
    </form>
}

// look at !!mdn input!!