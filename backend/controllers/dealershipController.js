async function getAllDeals(req, res) {
  try {
    const deals = await req.app.locals.db.collection("deals").find().toArray();
    res.json(deals);
  } catch (error) {
    res.status(500).send("Server Error");
  }
}

export { getAllDeals };
