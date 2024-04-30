import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import "./TaskCard.css";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
