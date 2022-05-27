const myKey='7c85e71b'
const fetchdata= async (searchTerm)=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:myKey,
            s:searchTerm
        }
    })
}
const debounce=(func)=>{
    let timeoutId;
    return (...args)=>{
        console.log(args)
        if(timeoutId){
            clearInterval(timeoutId)//to end the setInterval
        }
        timeoutId=setInterval(()=>{//setInterval function return a id automatically
            func.apply(null,args);
        },1000)
    }
}
const onInput=debounce((event)=>{
    fetchdata(event.target.value)
})
const input =document.querySelector('input');
input.addEventListener('input',onInput)