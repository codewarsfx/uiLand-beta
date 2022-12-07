import React, { useContext ,useEffect} from 'react';
import styled from "styled-components";
import { BrandLogoBig } from "../components/uiElements";
import { UserContext } from "../../src/context/authContext";


export default function Profile() {
  const user = useContext(UserContext);
   useEffect(()=>{
    console.log(user)
   },[])

  return (
    <>
    
             <SingleHeader>
   {user && (
    <>
      <BrandLogoBig imageUrl={user.photoURL}/>
     <Title>{user.displayName}</Title>
     </>
   )}
	  </SingleHeader>
    <ElementsInCategoryContainer > 

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

