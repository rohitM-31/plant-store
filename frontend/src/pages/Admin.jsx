
import { useState } from "react";
import PlantForm from "../components/PlantForm";
import PlantCard from "../components/PlantCard";

const Admin = () => {
  const [plants, setPlants] = useState([]);

  const handlePlantAdded = (plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4"> Admin Dashboard</h2>
      <PlantForm onPlantAdded={handlePlantAdded} />

      <h4 className="mt-4">Recently Added</h4>
      <div className="row">
        {plants.map((plant) => (
          <PlantCard key={plant._id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
