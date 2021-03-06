// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then(function (response) {
    setResult(response.data);
  })
  .catch(function (error) {
    setError("Unable to retrieve pets data. Sorry!");
    console.log(error.response.status);
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  // Fill out as part of Wave 2.
  axios.get("http://localhost:3000/pets/" + selectedPetId)
  .then(function (response) {
    setResult(response.data);
  })
  .catch(function (error) {
    setError(`Command "show details" about ${selectedPetId} failed with: ${error.response.status} ${error.response.statusText}. Please, select another pet!`)
  })
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }

  // Fill out as part of Wave 3.
  axios.delete("http://localhost:3000/pets/" + selectedPetId)
  .then(function (response) {
    setResult(`Pet ${selectedPetId} successfuly deleted`);
  })
  .catch(function (error) {
    setError(`Command remove pet ${selectedPetId} failed with: ${error.response.status} ${error.response.statusText}. Please, select another pet!`)
  })
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post('http://localhost:3000/pets/?', petInfo)
  .then(function (response) {
    setResult(response.data);
  })
  .catch(function (error) {
    setError("Failed to add a pet")
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
