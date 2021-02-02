import api from './api-config'

export const getTickets = async () => {

  try {
    const response = await api.get(`/tickets`)
    const tickets = response.data
    return tickets
  } catch (error) {
    throw error
  }
}

export const getTicket = async id => {
  try {
    const response = await api.get(`/tickets/${id}`)
    const ticket = response.data
    return ticket
  } catch (error) {
    throw error
  }
}

export const createTicket = async ticket => {
  try {
    const response = await api.post(`/tickets`, ticket)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateTicket = async (id, ticket) => {
  try {
    const response = await api.put(`/tickets/${id}`, ticket)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteTicket = async id => {
  try {
    const response = await api.delete(`/tickets/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}