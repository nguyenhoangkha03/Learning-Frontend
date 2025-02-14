const axios = require('axios')

const API_URL = 'https://localhost:3333/api/sinhvien'

export const getStudents = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch(error) {
        console.error('Error Get All: ', error)
        return []
    }
}

export const addStudent = async (student) => {
    try {
        const response = await axios.post(API_URL, student)
        return response.data
    } catch (error) {
        console.error('Error Add: ', error)
    }
}

