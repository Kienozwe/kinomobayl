import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { homeOutline, informationOutline, logOutOutline, settingsOutline } from 'ionicons/icons';
import Home from './Home';
import About from './About';

const Template: React.FC = () => {

const path = [
  {name:"Home", url:"/Home", icon: homeOutline},
  {name:"About", url:"/About", icon: informationOutline},
  
];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
              {path.map((item,index) => (
                <IonMenuToggle key={index}>
                  <IonItem routerLink={item.url} routerDirection="forward">
                    <IonIcon icon={item.icon} slot="start">
                    </IonIcon>
                     {item.name}
                  </IonItem>
                </IonMenuToggle>
              ))}

              <IonButton routerLink="/" routerDirection="back" expand="full">
              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              logout
              </IonButton>

          </IonContent>

        </IonMenu>
 
        <IonRouterOutlet id="main">
            <Route exact path="/app/home" component={Home} />
            <Route exact path= "/app">
            <Redirect to="/app/home" />
             <Route exact path="/app/About" component={About} />
              
            </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>

  );
};

export default Template;