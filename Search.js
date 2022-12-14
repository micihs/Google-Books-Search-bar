import axios from 'axios';

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
    timeout: 100000,
    headers: {'Content_Type': 'application/json'}
});

instance.interceptors.response.use((response) => {
    return {
        status:true,
        code:response.status,
        data:response.data.items
    }
}, (error) => {
    let status = error.response.status;
    return {
        status:false,
        code:status,
        data:error.response.data
    }
});

export default class BookSearch{
    static async searchbook(text, key){
        var search = encodeURI(text);
        search = text+"&key="+key
        return await instance.get('?q='+search)
    }
}