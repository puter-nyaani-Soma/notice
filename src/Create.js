import { useState } from "react";

import {useHistory}  from "react-router-dom"
const Create = () => {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [author,setAuthor]=useState('soma');
    const [isPending,setIsPending]=useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const notice={title,content,author}
        setIsPending(true)
        fetch('http://localhost:8000/notices',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(notice)
        }).then(()=>{
            console.log('Success');
            setIsPending(false);
            history.push('/')
        
        })
    }
    return (
        <div className="create">
            <h2>Add a New Notice</h2>
            <form onSubmit = {handleSubmit}  >
                <label >

                    notice title :
                </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label > Content </label> 
                <textarea required value={content} onChange={(e)=>setContent(e.target.value)}> </textarea>
                <label >Author </label>
                <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} />
                
                
                {!isPending && <button>Add notice</button>}
                {isPending && <button>Adding notice...</button>}
               


            </form>
        </div>
      );
}
 
export default Create;