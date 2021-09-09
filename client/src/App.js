import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [selectedTask, setSelectedTask] = useState("");
  const [editedItem, setEditedItem] = useState("");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    "Cuci Baju",
    "Masak Nasi"
  ]);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } else {
      alert('Isi task terlebih dahulu!');
    }
  }

  const deleteTask = (indexDelete) => {
    setTasks(tasks.filter((val, indexItem) => indexDelete !== indexItem));
  }

  const editTask = (index) => {
    setSelectedTask(index);
    setEditedItem(tasks[index])
    console.log(index);
  }

  const confirmEdit = (indexEdit) => {
    if (editedItem) {
      setTasks(tasks.map((val, indexItem) => indexItem === indexEdit ? editedItem : val));
      setSelectedTask("");
    } else {
      alert('Isi task terlebih dahulu!');
    }

  }

  const cancelEdit = () => {
    setSelectedTask("");
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...tasks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  }

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Pekerjaan rumah" />
      <button onClick={addTask} className="buttonTambah">Tambah</button>
      <TodoList tasks={tasks} editTask={editTask} deleteTask={deleteTask} selectedTask={selectedTask} cancelEdit={cancelEdit} confirmEdit={confirmEdit} editedItem={editedItem} setEditedItem={setEditedItem} handleOnDragEnd={handleOnDragEnd} />
    </div>
  );
}

export default App;