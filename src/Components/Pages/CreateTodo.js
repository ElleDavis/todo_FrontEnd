import { useState } from "react";

const CreateTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  return (
    <form>
      <label className="form-label" htmlFor="title">
        Title
      </label>
      <input
        className="form-control"
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <div className="mb-3">
        <label className="form-label" htmlFor="details">
          Details
        </label>
        <input
          className="form-control"
          type="text"
          id="details"
          name="details"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>

      <input type="submit" className="btn btn-success" />
    </form>
  );
};

export default CreateTodo;