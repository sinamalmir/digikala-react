import axios from "axios"


const getCategory = async () => {
    const response = await axios.get('https://one-api.ir/digikala/?token=300917:62ae4b0cace495.44292497&action=categories');
    return response.data;
}


export { getCategory }
