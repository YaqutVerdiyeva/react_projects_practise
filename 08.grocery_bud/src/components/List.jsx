import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, removeItem, editItem }) => {
  return (
    <div className="list">
      {list.map((el) => {
        const { id, title } = el;
        return (
          <div className="listItem">
            <p>{title}</p>
            <div className="btns">
              <button className="edit" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button className="remove" onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
