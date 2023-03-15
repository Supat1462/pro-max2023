const express = require("express");
const router = express.Router();
const db = require("../db");

const PAGE_SIZE = 10;

router.get("http://localhost:3001/employee", async (req, res) => {
  const page = parseInt(req.query.page) || 1;

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  try {
    const results = await db.query(
      `SELECT * FROM employees ORDER BY id LIMIT ${start}, ${end}`
    );
    const count = await db.query("SELECT COUNT(*) as total FROM employees");
    const totalPages = Math.ceil(count[0].total / PAGE_SIZE);

    res.json({ employees: results, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
