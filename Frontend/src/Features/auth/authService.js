import axios from 'axios';
const baseUrl = "http://localhost:4000/api/user/";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}register-user`, userData);
        if (response.data) {
            localStorage.setItem("User", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
