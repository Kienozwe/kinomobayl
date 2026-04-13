
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Feed: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                <h1>Feed</h1>
              </IonContent>
              </IonPage>
      );

};
export default Feed;