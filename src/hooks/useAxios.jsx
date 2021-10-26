import axios from 'axios'


export const useAxios = () => {
    async function fetchData(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        
    } 
    
    
    
}
