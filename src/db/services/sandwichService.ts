import { api } from '../config/api';
import { Sandwich } from '../models/sandwich';

export const sandwichService = {
    async getSandwiches(): Promise<Sandwich[]> {
        const response = await api.get<Sandwich[]>('/sandwiches');
        return response.data; // Return the fetched data
    },
};
