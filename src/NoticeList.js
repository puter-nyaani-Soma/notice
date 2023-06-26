import {Link} from 'react-router-dom'
const noticeList = ({notices,title,handleDelete}) => {

  
    return ( 
        <div className="notice-list">
            <h2>{title}</h2>

{notices.map((notice)=>(

    <div className="notice-preview" key={notice.id}>
        <Link to={`/notices/${notice.id}`} >
                            <h2>{notice.title}</h2>
                    <p>{'-'+notice.author}</p>
        </Link>
                 </div>
            ))}
            </div>

     );
}
 
export default noticeList;