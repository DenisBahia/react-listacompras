export const loadState = () => {
    try {

        const localStorageState = localStorage.getItem("list")
        if (localStorageState === null){
            return undefined
        }
        return JSON.parse(localStorageState)

    } catch(err){
        console.log("erro ao load state")
        return undefined
    }
}

export const saveState = state => {
    try {

        const localStorageState = JSON.stringify(state)
        localStorage.setItem("list", localStorageState)

    } catch(err){
        console.log("erro ao salvar state")
    }
}