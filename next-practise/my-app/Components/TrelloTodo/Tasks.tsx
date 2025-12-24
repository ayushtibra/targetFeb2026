import { useState } from "react";

const Tasks = ({ task, listId, editTaskInList, handleTaskDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listName, setListName] = useState(task.taskName);

    const handleSave = () => {
        editTaskInList(listId, task.taskId, listName)
        setIsEditing(false);
    }

    return (
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
                <li className="list-disc ml-2">{task.taskName}</li>
            )}
            <div>
                {!isEditing && <button className="cursor-pointer pr-2" onClick={() => setIsEditing(true)}>Edit</button>}
                <button className="cursor-pointer" onClick={() => handleTaskDelete(listId, task.taskId)}>Delete</button>
            </div>
        </div>
    )
}

export default Tasks;