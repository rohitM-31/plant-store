import { useEffect, useState } from "react";
import axios from "axios";
import PlantList from "../components/PlantList";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/plants")
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center"> Plant Catalog</h1>
     
      <PlantList plants={plants} />
    </div>
  );
};

export default Home;
