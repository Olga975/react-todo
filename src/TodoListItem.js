import react from "react";

function TodoListItem (props) {
    const { item } = props;
    return (
        <li>{item.title}</li>
    )
}

export default TodoListItem;