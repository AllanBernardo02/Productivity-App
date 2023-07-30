import axios from 'axios'


export const registerUser = async (formData) => {
    try {
        const response = await axios.post("api/user/register", formData)
        return response.data
    } catch (error) {
        throw error
    }
}