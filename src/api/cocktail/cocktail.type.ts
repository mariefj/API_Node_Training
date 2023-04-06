import { Document} from 'mongoose';


interface IIngredient {
	name: string,
	amount: string,
}

export interface ICocktail extends Document{
	name: string,
	description: string,
	ingredients: [IIngredient]
	instructions: string,
	glass?: string,
	withAlcohol: boolean
	createdAt: Date,
	updatedAt: Date,
}