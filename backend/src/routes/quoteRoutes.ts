import { Router } from "express";
import pool from "../db/database.js";

const router = Router();

router.get("/today", async (_req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        q.id,
        q.text,
        q.author,
        c.name AS category
      FROM daily_quotes dq
      JOIN quotes q
        ON dq.quote_id = q.id
      JOIN categories c
        ON q.category_id = c.id
      WHERE dq.date = CURRENT_DATE;
    `);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No Quote of the Day found."
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching Quote of the Day:", error);

    res.status(500).json({
      message: "Internal server error."
    });
  }
});

router.get("/random", async (req, res) => {
  const { category } = req.query;

  try {
    const result = await pool.query(
      `
      SELECT
        q.id,
        q.text,
        q.author,
        c.name AS category
      FROM quotes q
      JOIN categories c
        ON q.category_id = c.id
      WHERE LOWER(c.name) = LOWER($1)
      ORDER BY RANDOM()
      LIMIT 1;
      `,
      [category]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No quotes found for this category."
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching random quote:", error);

    res.status(500).json({
      message: "Internal server error."
    });
  }
});

router.get("/", async (req, res) => {
  const { category } = req.query;

  if (!category || typeof category !== "string") {
    return res.status(400).json({
      message: "Category is required."
    });
  }

  try {
    const result = await pool.query(
      `
      SELECT
        q.id,
        q.text,
        q.author,
        c.name AS category
      FROM quotes q
      JOIN categories c
        ON q.category_id = c.id
      WHERE LOWER(c.name) = LOWER($1);
      `,
      [category]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No quotes found for this category."
      });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching quotes:", error);

    res.status(500).json({
      message: "Internal server error."
    });
  }
});
export default router;