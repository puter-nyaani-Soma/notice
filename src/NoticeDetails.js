import {useParams,useHistory} from 'react-router-dom'
import useFetch from './useFetch';
const NoticeDetails = () => {
    const {id} =useParams(); 
    const {data:notice,error,isPending}=useFetch('http://localhost:8000/notices/'+id); 
   const history = useHistory();
    const handleClick  = (e) => {
        fetch('http://localhost:8000/notices/'+notice.id,{
            method:'DELETE',
        }).then(() => {
            history.push('/');
        })
    };
    return ( 
        <div className="notice-details">
            {isPending && <div>Loading...</div>}
            {error && <div> { error } </div> }
            { notice && (
                <article>
                    <h2>{notice.title}</h2>
                    <p>written by {notice.author}</p>
                    <div>
                        {notice.content}
                    </div>
                    <button onClick={handleClick}> Delete </button>
                </article>
            )}
            
        </div>
     );
}
 
export default NoticeDetails;