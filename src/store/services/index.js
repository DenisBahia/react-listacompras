import axios from "axios"

export const services = {
    getImages: (product) => {

        const params = {
            key: "AIzaSyB4fZl3pdP2OL7HDIGDavb5z07Ro36M6hM",
            cx: "006189692922063459782:u3yis9dlfoi",
            searchType: "image",
            lr: "lang_pt",
            num: 1,
            q: product
        }

        return axios.get("https://www.googleapis.com/customsearch/v1",
            {params})
            .then(resp => resp.data.items[0].link)
            .catch(err => "ocorreu erro ao buscar imagem")

    }
}