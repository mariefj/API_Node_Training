import { Request, Response } from "express";

import { addCocktail, getAllCocktails, getCocktailById, updateCocktailById, deleteCocktailById } from "./cocktail.service";

export const getCocktails = async (res: Response) => {
	try {
		const cocktails = await getAllCocktails();
		res.status(200).json(cocktails);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error retrieving cocktails" });
	}
};

export const createCocktail = async (req: Request, res: Response) => {
	try {
		const cocktail = await addCocktail(req.body);
		res.status(201).json(cocktail);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error creating cocktail" });
	}
};

export const getCocktail = async (req: Request, res: Response): Promise<void> => {
	try {
		const cocktailId = req.params.id;
		const cocktail = await getCocktailById(cocktailId)
	if (!cocktail) {
		res.status(404).json({ message: "Cocktail not found" });
		return;
	}
	res.status(200).json(cocktail);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export const updateCocktail = async (req: Request, res: Response): Promise<void> => {
	try {
		const cocktailId = req.params.id;
		const updatedCocktail = await updateCocktailById(cocktailId, req.body);
	if (!updatedCocktail) {
		res.status(404).json({ message: "Cocktail not found" });
		return;
	}
	res.status(200).json(updatedCocktail);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export const deleteCocktail = async (req: Request, res: Response): Promise<void> => {
	try {
		const cocktailId = req.params.id;
		const deletedCocktail = await deleteCocktailById(cocktailId);
	if (!deletedCocktail) {
		res.status(404).json({ message: "Cocktail not found" });
		return;
	}
	res.status(200).json({ message: "Cocktail deleted" });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
