import { useState } from "react";
import Comment from "./Comment";

// Tree structure
// const commentData = [
//     {
//         id: 1,
//         text: 'hi',
//         like: 0,
//         replies: [{
//             id: 2,
//             text: 'ayush',
//             like: 0,
//             replies: [{
//                 id: 3,
//                 text: 'tibra',
//                 like: 0,
//                 replies: []
//             }]
//         }, {
//             id: 5,
//             text: 'newAyush',
//             like: 0,
//             replies: []
//         }],
//     }, 
//     {
//         id: 4,
//         text: 'bye',
//         like: 0,
//         replies: []
//     }
// ]

const Comments = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [comments, setComments] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComments((prev) => [...prev, {
            id: Date.now(),
            text: inputValue,
            like: 0,
            replies: [] // always initialize
        }])
        setInputValue('');
    }

    const addReply = (commentId, replyText) => {
        const updateTree = (comments) =>
            comments.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            {
                                id: Date.now(),
                                text: replyText,
                                like: 0,
                                replies: []
                            }
                        ]
                    };
                }

                return {
                    ...comment,
                    replies: updateTree(comment.replies)
                };
            });

        setComments(prev => updateTree(prev));
    };

    const deleteComment = (commentID) => {
        const updateTree = (comments = []) => {
            return comments
                .filter(comment => comment.id !== commentID)
                .map(comment => ({
                    ...comment,
                    replies: updateTree(comment.replies || [])
                }));
        };

        setComments(prev => updateTree(prev));
    };

    const editReply = (commentID, replyText) => {
        const updateTree = (comments) => {
            return comments.map(comment => {
                if(comment.id == commentID){
                    return {
                        ...comment,
                        text: replyText
                    }
                }

                return {
                    ...comment,
                    replies: updateTree(comment.replies)
                }
            })
        }   

        setComments(prev => updateTree(prev));
    }

    const addLike = (commentID) => {
        const updateTree = (comments) => {
            return comments.map(comment => {
                if(comment.id == commentID){
                    return {
                        ...comment,
                        like: comment.like + 1
                    }
                }

                return {
                    ...comment,
                    replies: updateTree(comment.replies)
                }
            })
        }
        setComments(prev => updateTree(prev))
    }

    console.log(comments)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Write a comment..." onChange={handleChange} value={inputValue} />
                <button type="submit">Submit</button>
            </form>

            {comments.length > 0 && (
                <div>
                    <h3>Comments ayush:</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <Comment
                                key={index}
                                comment={comment}
                                addReply={addReply}
                                editReply={editReply}
                                addLike={addLike}
                                deleteComment={deleteComment}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Comments;