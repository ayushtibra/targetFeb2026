import { useState } from "react";
import ListComponent from "./ListComponent";

const todosList1 = [
    {
        listName: 'Todo',
        listId: 1,
        listTasks: [
            {
                taskName: 'Find Job',
                taskId: 1
            },
            {
                taskName: 'Apply Job',
                taskId: 2
            }
        ]
    },
    {
        listName: 'In-Progress',
        listId: 2,
        listTasks: []
    },
    {
        listName: 'Completed',
        listId: 3,
        listTasks: [
            {
                taskName: 'Resigned',
                taskId: 3
            }
        ]
    }
]

const TrelloTodos = () => {
    const [todosList, setTodosList] = useState(todosList1);
    const [addListInput, setAddListInput] = useState(false);
    const [text, setText] = useState('');
    const [draggedTask, setDraggedTask] = useState(null);

    const handleAddList = () => {
        setTodosList(prev => [...prev, {
            listName: text,
            listId: Date.now(),
            listTasks: []
        }]);
        setText('');
        setAddListInput(false);
    }

    const addTaskInList = (listId, taskName) => {
        const updateList = (lists) => {
            return lists.map(list => {
                if (list.listId == listId) {
                    return {
                        ...list,
                        listTasks: [...(list.listTasks || []), {
                            taskName: taskName,
                            taskId: Date.now()
                        }]
                    }
                }

                return list
            })
        }
        setTodosList(prev => updateList(prev));
    }

    const editTaskInList = (listId, taskId, updateTaskName) => {
        const updateList = (lists) => {
            return lists.map(list => {
                if (list.listId == listId) {
                    return {
                        ...list,
                        listTasks: list.listTasks.map(task => {
                            if (task.taskId == taskId) {
                                return {
                                    ...task,
                                    taskName: updateTaskName
                                }
                            }

                            return task;
                        })
                    }
                }

                return list
            })
        }
        setTodosList(prev => updateList(prev));
    }

    const handleTaskDelete = (listId, taskId) => {
        const updateList = (lists) => {
            return lists.map(list => {
                if (list.listId == listId) {
                    return {
                        ...list,
                        listTasks: list.listTasks.filter(task => task.taskId != taskId)
                    }
                }

                return list
            })
        }
        setTodosList(prev => updateList(prev));
    }

    const editListName = (listId, listName) => {
        const updateList = (lists) => {
            return lists.map(list => {
                if (list.listId == listId) {
                    return {
                        ...list,
                        listName: listName
                    }
                }

                return list
            })
        }
        setTodosList(prev => updateList(prev));
    }

    const moveTask = (taskId, sourceListId, targetListId) => {
        if (sourceListId === targetListId) return; // if drag and drop are same then nothing happens

        const updateList = (lists) => {
             return lists.map(list => {
                // remove from source
                if (list.listId === sourceListId) {
                    return {
                        ...list,
                        listTasks: list.listTasks.filter(t => t.taskId !== taskId)
                    };
                }

                // add to target
                if (list.listId === targetListId) {
                    const movedTask = lists
                        .find(l => l.listId === sourceListId)
                        .listTasks.find(t => t.taskId === taskId);

                    return {
                        ...list,
                        listTasks: [...list.listTasks, movedTask]
                    };
                }

                return list;
            })
        }

        setTodosList(prev => updateList(prev));
    };

    console.log(todosList)

    return (
        todosList.length > 0 && (
            <div className="flex justify-center gap-8">
                {todosList.map((list, index) => (
                    <ListComponent
                        key={index}
                        list={list}
                        addTaskInList={addTaskInList}
                        editListName={editListName}
                        editTaskInList={editTaskInList}
                        handleTaskDelete={handleTaskDelete}
                        setDraggedTask={setDraggedTask}
                        moveTask={moveTask}
                        draggedTask={draggedTask}
                    />
                ))}
                <div className="p-4 bg-black text-white mt-2 cursor-pointer">
                    {addListInput ? (
                        <>
                            <input type="text" placeholder="Add List Name" onChange={(e) => setText(e.target.value)} value={text} />
                            <button onClick={handleAddList}>Add</button>
                        </>
                    ) : <button onClick={() => setAddListInput(true)}>+ Add List</button>}
                </div>
            </div>

        )
    )
}

export default TrelloTodos;