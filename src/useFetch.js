import { useEffect,useState } from "react"

const useFetch=(url)=> {
    const [data, setData] = useState(null)
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(null)
     
     useEffect(()=>{
        const abortCont = new AbortController(); 
       setTimeout(()=>{
               fetch(url,{signal:abortCont.signal})
               .then(res => {
                   if(!res.ok){
                       setError('Failed to fetch notice data from server');
                       setisPending(false);
                   }
                   return res.json()
       
               })
               .then(data => {
                   
                   setData(data);
                   setisPending(false);
                   setError(null)
               })
               .catch(err => {
                if(err.name==='AbortError') {
                    console.log('fetch aborted');
                }
                else{
                   setisPending(false);
                   setError(err.message);
                }
                   
               })
       },1000) 
       return ()=>{ abortCont.abort();}
     },[url]);
     return {data,isPending,error}
}
export default useFetch