import axios from "axios"

export async function getData() {
    const { data } = await axios.get("http://localhost:5000/machines", (res) => res)
    return data;
}

export async function getSingleData(pk) {
    const { data } = await axios.get(`http://localhost:5000/machine/${pk}`, (res) => ({res}))
    return data;
}