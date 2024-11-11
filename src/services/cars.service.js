import api from './api'

export const getCars = async () => {
    const response = await api.get('/cars')
    return response.data
}

export const getCarById = async (id) => {
    const response = await api.get(`/cars/${id}`)
    return response.data
}
