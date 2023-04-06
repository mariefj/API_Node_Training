import { Schema, model } from 'mongoose';

import { ICocktail } from './cocktail.type';


const CocktailSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	ingredients: {
		type: [{
			name: String,
			amount: String,
		}],
		required: true
	},
	instructions: { type: String, required: true },
	glass: { type: String },
	withAlcohol: { type: Boolean, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Cocktail = model<ICocktail>('Cocktail', CocktailSchema);

export default Cocktail;