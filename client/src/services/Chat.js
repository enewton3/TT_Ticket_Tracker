import api from './api-config'

export const createThread = async thread => {
  try {
    const response = await api.post(thread)
    return response.data
  } catch (error) {
    throw error
  }
}