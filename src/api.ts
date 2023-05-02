import axios from 'axios'

const http = axios.create({
    baseURL: 'https://restcountries.com/v2'
})

export const api = {
    getCountries: async () => {
        let response = await http.get('/all')
        return response.data
    },
        getCountry: async (name: string) => {
        let response = await http.get(`/name/${name}?fullText=True`)
        return response.data
    },
        getCountryByCode: async (code: string) => {
        let response = await http.get(`/alpha?code=${code}`)
        return response.data
    }
}