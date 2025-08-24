import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/plants", {
        params: { search, category },
      });
      setPlants(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPlants();
  };

  return (
    <div className="container mt-4">
 
      <form onSubmit={handleSearch} className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Succulent">Succulent</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </form>

      <div className="row">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))
        ) : (
          <p>No plants found</p>
        )}
      </div>
    </div>
  );
};

export default PlantList;
