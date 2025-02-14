import axios from 'axios'

const API_URL = 'http://localhost:3333/api/account'

export const getAccounts = async () => {
    try {
        const response = await axios.get(`${API_URL}`)
        return response.data
    } catch(err){
        throw new Error('Error getting accounts')
    }
}

export const addAccount = async (account) => {
    try {
      const response = await axios.post(API_URL, account);
      return response.data;
    } catch (error) {
      throw new Error('Error adding account')
    }
}