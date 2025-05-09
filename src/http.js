const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  // 400, 500
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
};

export default fetchAvailablePlaces;
