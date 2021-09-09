import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TodoList({ tasks, editTask, deleteTask, selectedTask, cancelEdit, confirmEdit, editedItem, setEditedItem, handleOnDragEnd }) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <ul className="todoList" {...provided.droppableProps} ref={provided.innerRef}>
            {
              tasks.map((task, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {index !== selectedTask ? 
                        (
                          <>
                            {task} 
                            <div>
                              <button className="buttonEdit" onClick={() => editTask(index)}>Edit</button>
                              <button className="buttonRed" onClick={() => deleteTask(index)}>Hapus</button>
                            </div>
                          </> 
                        )
                        : (
                          <>
                            <input value={editedItem} onChange={e => setEditedItem(e.target.value)} placeholder="" />
                            <div>
                              <button className="buttonConfirm" onClick={() => confirmEdit(index)}>Edit</button>
                              <button className="buttonRed" onClick={cancelEdit}>Cancel</button>
                            </div>
                          </>
                        )
                      }
                    </li>
                  )}
                </Draggable>
              ))
            }
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}