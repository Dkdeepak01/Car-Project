async function getAllCars(req, res) {
  try {
    const cars = await req.app.locals.db.collection("cars").find().toArray();
    res.json(cars);
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

export { getAllCars };
