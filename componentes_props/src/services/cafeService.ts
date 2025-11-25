import api from './api';
import type {Cafe, ApiResponse} from '../types';


const endpoint = '/cafes';


export const getAll = async (): Promise<ApiResponse<Cafe[]>> => {
    return api.get(endpoint);
};


export const getById = async (id: number): Promise<ApiResponse<Cafe>> => {
    return api.get(`${endpoint}/${id}`);
};


export const createCafe = async (payload: Cafe): Promise<ApiResponse<Cafe>> => {
    return api.post(endpoint, payload);
};


export const updateCafe = async (id: number, payload: Cafe): Promise<ApiResponse<Cafe>> => {
    return api.put(`${endpoint}/${id}`, payload);
};


export const deleteCafe = async (id: number): Promise<void> => {
    await api.delete(`${endpoint}/${id}`);
};