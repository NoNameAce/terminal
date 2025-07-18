const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/categories", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/gos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gos_president");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/services", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/services/:id", async (req, res) => {
  try {
    const {id} = req.params
    const result = await pool.query("SELECT c.title_ru AS title, s.* FROM services s JOIN categories c ON s.service_category = c.category_id WHERE s.service_category = $1", [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/queue", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM queue");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/windows", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM windows");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

router.get("/operator", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM operator");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to connect to database",
      details: err.message,
    });
  }
});

// router.get("/search/:search", async (req, res) => {
//   try {
//     const search = req.params;
//     const result = await pool.query(
//       "SELECT c.* FROM categories c JOIN services s ON c.category_id = s.service_category WHERE s.title_ru = $1",
//       [search]
//     );

//     res.status(200).send(result)
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: error });
//   }
// });

router.get("/applicant/legal", async(req, res) => {
    try {
        const data = await pool.query(`SELECT c.* FROM categories c JOIN services s ON c.category_id = s.service_category WHERE s.applicant_type @> '["LEGAL"]'::jsonb`)
        res.status(200).send(data.rows)
    } catch (error) {
      console.log(error);
      res.status(500).send({error: error})
    }
})
router.get("/applicant/individual", async(req, res) => {
    try {
        const data = await pool.query(`SELECT c.* FROM categories c JOIN services s ON c.category_id = s.service_category WHERE s.applicant_type @> '["INDIVIDUAL"]'::jsonb`)
        res.status(200).send(data.rows)
    } catch (error) {
      console.log(error);
      res.status(500).send({error: error})
    }
})



module.exports = router;
