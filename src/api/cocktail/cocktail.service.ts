import Cocktail from './cocktail.model';
import { ICocktail } from './cocktail.type'

export const getAllCocktails = async (): Promise<ICocktail[]> =>
	await Cocktail.find({});

export const addCocktail = async (data: Partial<ICocktail>): Promise<ICocktail> => {
	const cocktail = new Cocktail(data);
	await cocktail.save();

	return cocktail;
};

export const getCocktailById =  async (id: string): Promise<ICocktail | null> =>
	await Cocktail.findById(id);

export const updateCocktailById = async (id: string, update: Partial<ICocktail>): Promise<ICocktail | null> =>
	await Cocktail.findByIdAndUpdate(id, update, { new: true});

export const deleteCocktailById = async (id: string): Promise<ICocktail | null> =>
	await Cocktail.findByIdAndDelete(id);
