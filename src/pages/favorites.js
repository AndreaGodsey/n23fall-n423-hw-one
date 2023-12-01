import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header, } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';
import Aboutfavorites from '@/components/Aboutfavorites';


export default function Favorites() {
    const appState = useAppState();


    function changeName() {
        const titles = ['Anxious', 'Excited', 'Funny'];
        const randomTitleIndex = Math.floor(Math.random() * titles.length);

        appState.updateAppState({user: `Andrea the ${titles[randomTitleIndex]} Artist`})
    }
    
    return(

        <>
        
        <Grid columns={1}>
        
        <Grid.Column style={{display: "flex", alignItems: 'center', justifyContent: 'center'}} color='brown'>
        <Header style={{fontFamily: 'Baskerville', color:'white', fontSize: '60px'}}  as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>

        <Grid.Column>
            <Button content='Change Name' color='brown' icon='sync' onClick={changeName} />
        </Grid.Column>

        <Aboutfavorites descriptionone=' Welcome to your favorites page! Every cat image that you have favorited will show up here! Also, if you would like to change your username, click the "Change Username button. Enjoy your cats!
           '
            />
    
        
        <Grid.Row columns='5'>
        {appState.favoriteCats.map((cat) => {
            return <CatImage key={cat.id} src={cat.url} />
        })}
        </Grid.Row>
        
        </Grid>
        
        

        </>


    )


}