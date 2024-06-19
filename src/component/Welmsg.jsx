import { useContext } from "react";
import styles from "./Welmsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const Welmsg = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default Welmsg;