import React from "react";

const Comment = ({ comment, addReply,editReply,deleteComment }) => {
  const [showReply, setShowReply] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [text, setText] = React.useState("");

  return (
    <div style={{ marginLeft: "20px", borderLeft: "1px solid #ccc" }}>
      <p>{comment.text}</p>

      <button className="pr-2" onClick={() => setShowReply(!showReply)}>
        Reply
      </button>

       <button className="pr-2" onClick={() => setShowEdit(!showEdit)}>
        Edit
      </button>

       <button className="pr-2" onClick={() => {
        deleteComment(comment.id)
       }}>
        Delete
      </button>

      {showReply && (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={() => {
              addReply(comment.id, text);
              setText("");
              setShowReply(false);
            }}
          >
            Add Reply
          </button>
        </>
      )}

      {showEdit && (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={() => {
              editReply(comment.id, text);
              setText("");
              setShowEdit(false);
            }}
          >
            Add Reply
          </button>
        </>
      )}

      {/* Recursive rendering */}
      {comment.replies.map(reply => (
        <Comment
          key={reply.id}
          comment={reply}
          addReply={addReply}
          editReply={editReply}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}

export default Comment;