const City = require('../models/city');
const cityValidator = require('../middleware/cityValidator');


exports.addCity = [cityValidator.validateCity, cityValidator.handleValidationErrors, async (req, res) => {
  try {
    const { name, population, country, latitude, longitude } = req.body;
    const existingCity = await City.findOne({ name });
    if (existingCity) {
      return res.status(400).json({ message: 'City already exists' });
    }

    const city = new City({ name, population, country, latitude, longitude });
    await city.save();

    res.status(201).json({ message: 'City added successfully', city });
  } catch (err) {
    res.status(500).json({ message: 'Error adding city', error: err.message });
  }
}];


exports.getCities = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'name', filter = '{}', search='', projection = ''} = req.query;
    const projectionFields = projection.split(',').join(' ');
    const filterCriteria = JSON.parse(filter);
    const searchCriteria = search
      ? { name: { $regex: search, $options: 'i' } }
      : {};
    const criteria = { ...filterCriteria, ...searchCriteria };
    const cities = await City.find(criteria)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select(projectionFields);

      const totalCities = await City.countDocuments(criteria);

    res.status(200).json({
      cities,
      pagination: {
        page: page,
        limit: limit,
        totalCities,
        totalPages: Math.ceil(totalCities / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cities', error: err.message });
  }
};

exports.updateCity = [cityValidator.validateCity, cityValidator.handleValidationErrors, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const city = await City.findByIdAndUpdate(id, updateData, { new: true });
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json({ message: 'City updated successfully', city });
  } catch (err) {
    res.status(500).json({ message: 'Error updating city', error: err.message });
  }
}];

exports.deleteCity = async (req, res) => {
  try {
    const { id } = req.params;

    const city = await City.findByIdAndDelete(id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json({ message: 'City deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting city', error: err.message });
  }
};
