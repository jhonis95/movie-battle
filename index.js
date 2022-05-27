const myKey='7c85e71b'
const fetchdata= async ()=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:myKey,
            s:'avengers'
        }
    })
    console.log(response)
    console.log(response.data)
}
fetchdata()