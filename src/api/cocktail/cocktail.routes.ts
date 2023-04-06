import { Router } from "express";
import { getCocktails, getCocktail, createCocktail, updateCocktail, deleteCocktail } from "./cocktail.controllers";

const router = Router();

// Get all cocktails
router.get("/", getCocktails);

// Get cocktail by id
router.get("/:id", getCocktail);

// Create new cocktail
router.post("/", createCocktail);

// Update cocktail by id
router.put("/:id", updateCocktail);

// Delete cocktail by id
router.delete("/:id", deleteCocktail);

export default router;
