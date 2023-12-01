import React from "react";
import { useRouter } from "next/router";
import { Rating } from 'semantic-ui-react';

export default function CatInfo() {
  const Router = useRouter();
  const [CatInfo, setCatInfo] = React.useState({ loading: true, breeds: [] });
  React.useEffect(function () {
    if (CatInfo.id !== Router.query.catid && Router.query.catid) {
      console.log("Load in cat info", Router.query.catid);
      fetch(`https://api.thecatapi.com/v1/images/${Router.query.catid}`)
        .then((r) => r.json())
        .then(function (r) {
          setCatInfo(r);
        })
        .catch((e) =>
          setCatInfo({ loading: false, id: Router.query.catid, breeds: [] })
        );
    }
  });
  console.log(CatInfo);
  return (
    <>
      <h1 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'Baskerville', color:'orange', fontSize:"60px"}}>About Your New Friend</h1>

      
      {CatInfo.breeds.length ? (
        <>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', color:'orange', fontSize:"40px"}}>Weight: {CatInfo.breeds[0].weight.imperial}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', color:'orange', fontSize:"40px"}}>Temperament: {CatInfo.breeds[0].temperament}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', color:'orange', fontSize:"40px"}}>Lifespan: {CatInfo.breeds[0].life_span}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', color:'orange', fontSize:"40px"}}>Description: {CatInfo.breeds[0].description}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', color:'orange', fontSize:"40px"}}>Affection Level: {CatInfo.breeds[0].affection_level} <Rating style={{paddingLeft: "20px" }}icon='heart' defaultRating={5} maxRating={5} />
          </h3>
         
          
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "brown", fontFamily:'cursive', 
          color:'orange', fontSize:"40px"}}>Child Friendly: {CatInfo.breeds[0].child_friendly}<Rating style={{paddingLeft: "20px" }} icon='star' defaultRating={4} maxRating={4} /></h3>
        </>
      ) : (
        <>
          <h3>No Cat Info Found</h3>
        </>
      )}
    </>
  );
}
