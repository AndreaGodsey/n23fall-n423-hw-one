import React from 'react';
import {Grid, Button, Header,} from 'semantic-ui-react';
import CatImage from '@/components/CatImage';
import useAppState from '@/useHooks/useAppState';
import Abouthome from '@/components/Abouthome';

export default function Home() {
  
  const appState = useAppState();

  console.log(appState)

function getCatImages() {
  fetch(`https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&limit=10
`)
.then(r=> r.json())
.then(r=> {
  appState.updateAppState({ catImages: r });
})
.catch((e) => {
  console.warn(e);
});
}



function saveCateImage(selectedCat) {
  appState.updateAppState({ favoriteCats: appState.favoriteCats.concat(selectedCat)})
}


return (
  <>
  
 
  <Grid columns='1'>

  <Grid.Column style={{display: "flex", alignItems: 'center', justifyContent: 'center'}} color='brown'>
    <Header style={{fontFamily: 'Baskerville', color:'white', fontSize: '60px'}} as='h1'>Welcome to The Cat Library</Header>
  </Grid.Column>

  <Grid.Column>
   <Button content='Reload Cats' icon='sync' color='brown' onClick={getCatImages}/>
  </Grid.Column>

  <Abouthome descriptionone=' Welcome to the home page of the largest cat library in website on this side of the web! We all love cats as much as you do, and here you can post images of your fluffy feline, and favorite others kitties as well! We hope you enjoy your stay here at The Cat Library!
           '
            />

  <Grid.Row columns='5' >
    {appState.catImages.map((catImage) => {
      return <CatImage  key={catImage.id} src={catImage.url}  onClick={() => saveCateImage(catImage)} id={catImage.id}></CatImage>;
    })}
    
   
  </Grid.Row>

  </Grid>
  
  </>
);


}