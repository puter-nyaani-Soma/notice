import NoticeList from "./NoticeList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:notices,isPending,error}=useFetch(' http://localhost:8000/notices')

  
    return (  

        <div className="home"> 
        {error && <div>{error}</div>}
        {isPending  && <div>Loading...</div>}
           {notices && <NoticeList notices={notices} title="ALL noticeS!!!" /> } 
            
         

        </div>
    );
}
 
export default Home;