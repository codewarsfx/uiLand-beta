import React, { useContext ,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Screenshot,BrandLogoBig } from "../components/uiElements";
import { getindividualScreenData,addBookMark,queryBookMarks,deleteBookMark} from "../firebase";
import { UserContext } from "../../src/context/authContext";


const Single = () => {
  const user = useContext(UserContext);
    const[screenResult,setScreenResult]=useState({})
    const[bookmarkId,setBookmarkId]=useState([])
  const {id} = useParams()
  useEffect(()=>{
    const getScreens = async () => {
        if(!id) {return false;}
        const screens = await getindividualScreenData(id);
        if (screens) {
         setScreenResult(screens)
        }   
  }
getScreens()
  },[])

 useEffect(()=>{
  const getBook = async () => {
  const getBookmarksId= await  queryBookMarks(user,id)
  console.log(getBookmarksId)
  setBookmarkId(getBookmarksId)}
  getBook()
 },[])

 function handleAddToBookMark(){
   addBookMark(user.uid,id)
  }

  function handleDeleteFromBookMark(){
    deleteBookMark(user.uid,id)
  }
  return (
    <>
             <SingleHeader>
     <BrandLogoBig imageUrl={screenResult.logo}/>
     <Title>{screenResult.Name}</Title>
     <WebLink href={screenResult.websiteLink}>{screenResult.websiteLink}</WebLink>
     {bookmarkId[0] !==undefined ?(
                  <button
                    className=""
                    onClick={handleDeleteFromBookMark}
                  >
                    <img
                      src="/assets/img/bookmark-transparent.png"
                      alt="bookmark icon"
                      className="bookmark"
                    />
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={handleAddToBookMark}
                  >
                    <img
                      src="/assets/img/bookmark-dark.svg"
                      alt="bookmark icon"
                      className="bookmark"
                    />
                    
                  </button>
                )}
	  </SingleHeader>
    <ElementsInCategoryContainer > 

       {screenResult.screens?.map((result)=>{
     return  (
       
        <Screenshot key={result.url} imgLink={result.url} />
      
     ) 
       })}
      </ElementsInCategoryContainer ></>
  );
   
};
const ElementsInCategoryContainer = styled.div`
	display: grid;
    grid-template-columns: repeat(auto-fit,minmax(239px,1fr));
	margin: 1.5em auto;
	gap: 10px;
	width: 90%;

	@media (min-width: 768px) {
		width: 95%;
		margin: 3em auto;
		gap: 20px;
	}
`;


const Title = styled.h1`
	z-index:99;
	font-size:12px;
	font-weight:300;
	margin:0;
	padding:0;
`;
const SingleHeader = styled.div`
	display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:15px;
  gap:8px;

`;

const WebLink = styled.a`
	font-weight:200;
  font-size:1.3rem;
  text-decoration:none;
  color:var(--primary-color);

`;

;

export default Single;