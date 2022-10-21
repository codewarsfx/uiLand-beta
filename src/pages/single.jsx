import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Screenshot } from "../components/uiElements";
import { getindividualScreenData} from "../firebase";

const Single = () => {
    const[indi,setIndi]=useState({})
  const {id} = useParams()
  useEffect(()=>{
    const getScreens = async () => {
        if(!id) {return false;}
        const screens = await getindividualScreenData(id);
        if (screens) {
         setIndi(screens)
        }   
  }
getScreens();
  },[])
 
  return (
    <ElementsInCategoryContainer > 
       {indi.screens?.map((cde)=>{
     return  (
       
        <Screenshot key={cde.url} imgLink={cde.url} />
      
     ) 
       })}
      </ElementsInCategoryContainer >
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

;

export default Single;