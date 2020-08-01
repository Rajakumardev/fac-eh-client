module.exports = {
    createRoom: async ()=>{
        const {REACT_APP_API_BASE_URL:apiUrl} = process.env;
        const response = await (await fetch(apiUrl+"createroom")).json();
        return response;
    }
}