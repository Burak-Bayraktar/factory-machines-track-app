import axiosInstance from "../axiosInstance";

export async function getData() {
    const { data } = await axiosInstance.get("/machines", (res) => res)
    return data;
}

export async function getSingleData(pk) {
    const { data } = await axiosInstance.get(`/machine/${pk}`, (res) => ({res}))
    return data;
}