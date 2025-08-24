
import { useState } from "react";
import axios from "axios";

const PlantForm = ({ onPlantAdded }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categories: "",
    availability: true,
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.categories) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/plants", {
        name: form.name,
        price: Number(form.price),
        categories: form.categories.split(",").map((c) => c.trim()),
        availability: form.availability,
      });

      onPlantAdded(res.data);
      setForm({ name: "", price: "", categories: "", availability: true });
      setError("");
    } catch (err) {
      setError("Error adding plant");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5>Add New Plant</h5>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Plant Name</label>
          <input
            type="text"
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Categories (comma separated)</label>
          <input
            type="text"
            className="form-control"
            value={form.categories}
            onChange={(e) => setForm({ ...form, categories: e.target.value })}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={form.availability}
            onChange={(e) =>
              setForm({ ...form, availability: e.target.checked })
            }
          />
          <label className="form-check-label">Available</label>
        </div>

        <button type="submit" className="btn btn-success">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default PlantForm;
