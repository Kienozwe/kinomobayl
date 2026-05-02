import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline} from 'ionicons/icons';
import { useState, useEffect } from 'react';


  const Search: React.FC = () => {

  const games = [
    {name: 'Super Mario'},
    {name: 'Pac Man'},
    {name: 'CODM'},
    {name: 'Clash Of Clans'},
    {name: 'ML'},
    {name: 'Pokemon Go'}
  ]

  const [searchText, setSearchText] = useState("");
  const [filtered, setFilteredGames] = useState(games);

  useEffect (()=>{
     const debounce = setTimeout(()=>{
        const filtered = games.filter(game=>
            game.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredGames(filtered);
    },400);
    return () =>clearTimeout(debounce);

  },[searchText]);
return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonSearchbar 
            placeholder='Search Games...'
            value={searchText}
            debounce={0}
            onIonInput={(e) => setSearchText(e.detail.value!)}
            />
          
          <IonList className="ion-padding">
            {filtered.map((item,index)=>(
              <IonItem>

          <IonCard>
            
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle><IonLabel>{item.name}</IonLabel></IonCardTitle>
        <IonCardSubtitle>card subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      <IonGrid>
        <IonRow> 

          <IonCol>
            <IonButton fill="clear">
              <IonIcon icon="thumbsUpOutline"></IonIcon>
              <IonLabel style={{marginLeft: '5px'}}>Like</IonLabel>
            </IonButton>
          </IonCol>

           <IonCol>
              <IonButton fill="clear">
              <IonIcon icon="chatboxOutLine"></IonIcon>
              <IonLabel style={{marginLeft: '5px'}}>Comment</IonLabel>
              </IonButton>
          </IonCol>

          <IonCol>
          <IonButton fill="clear">
             <IonIcon icon="shareOutline"></IonIcon>
             <IonLabel style={{marginLeft: '5px'}}>Share</IonLabel>
             </IonButton>
          </IonCol>
            
        </IonRow>
      </IonGrid>
    </IonCard>

              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;