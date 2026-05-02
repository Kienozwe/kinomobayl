import { IonButtons, IonButton, IonGrid, IonLabel, IonCol, IonRow, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline} from 'ionicons/icons';

const Feed: React.FC = () => {

  const games = [
    {name: 'Super Mario'},
    {name: 'Pac Man'},
    {name: 'CODM'},
    {name: 'Clash Of Clans'},
    {name: 'ML'},
    {name: 'Pokemon Go'}
  ]


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
          <IonList className="ion-padding">
            {games.map((item,index)=>(
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
             <IonIcon icon="shareOutLine"></IonIcon>
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

export default Feed;