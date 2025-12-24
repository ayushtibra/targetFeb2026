import { useState } from "react";
import Tasks from "./Tasks";

const ListComponent = ({ list, addTaskInList, editListName, editTaskInList, handleTaskDelete, setDraggedTask, draggedTask, moveTask }) => {
    const [taskText, setTaskText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [listName, setListName] = useState(list.listName);

    const handleSave = () => {
        editListName(list.listId, listName);
        setIsEditing(false);
    };

    return (
        <div className="p-4 bg-black text-white mt-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
                if (!draggedTask) return;

                moveTask(
                    draggedTask.taskId,
                    draggedTask.sourceListId,
                    list.listId
                );
            }}
        >
            <div className="flex justify-between">
                {isEditing ? (
                    <>
                        <input
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            className="text-white"
                        />
                        <button onClick={handleSave}>Save</button>
                    </>
                ) : (
                    <>
                        <h3 className="border-b-1 border-white">
                            {list.listName}
                        </h3>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    </>
                )}
            </div>

            <ul className="pt-2">
                {list.listTasks?.map((task, index) => (
                    <Tasks
                        key={index}
                        task={task}
                        listId={list.listId}
                        editTaskInList={editTaskInList}
                        handleTaskDelete={handleTaskDelete}
                        setDraggedTask={setDraggedTask}
                    />
                ))}
                <input required type="text" placeholder="Add List Name" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <button onClick={() => {
                    addTaskInList(list.listId, taskText);
                    setTaskText('');
                }}>Add</button>
            </ul>
        </div>
    )
}

export default ListComponent;