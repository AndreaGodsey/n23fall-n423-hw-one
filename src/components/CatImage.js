import Link from 'next/link';
import React from 'react';
import {Popup, Button, Image, Grid} from 'semantic-ui-react';


export default function CatImage({src, children, onClick, id}) {
    return (
        <>
        
    <Grid.Column>
    <Popup 
    trigger={<Image src={src}/>}
    on='click'
    content={(<>
    <Button color='orange' icon='heart' content={children || 'Save'} onClick={onClick} />
    <Button color='brown' icon='search' content={'More Details'} as={Link} href={`/cats/${id}`}/>
    </>
    )}
    />
    
   </Grid.Column>
        
        
        </>
    )

}