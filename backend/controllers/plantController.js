import Plant from "../models/Plant.js";

// Add Plant (same as yours)
export const addPlant = async (req, res) => {
  try {
    const { name, price, categories, availability } = req.body;

    if (!name || !price || !categories || categories.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const plant = new Plant({
      name,
      price,
      categories,
      availability,
    });

    const savedPlant = await plant.save();
    res.status(201).json(savedPlant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Plants with Search + Category Filter
export const getPlants = async (req, res) => {
  try {
    const { search, category } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { categories: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      filter.categories = { $regex: category, $options: "i" };
    }

    const plants = await Plant.find(filter);
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
