
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Search: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Search</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                <h1>Search</h1>
              </IonContent>
              </IonPage>
      );

};
export default Search;