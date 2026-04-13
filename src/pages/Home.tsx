import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Feed from "./home-tabs/Feed";
import Favorites from "./home-tabs/Favorites";
import Search from "./home-tabs/Search";
import { bookOutline } from "ionicons/icons";

const Home: React.FC = () => {

    const tabs = [
      {name:'Feed',tab:'feed',url:'/app/home/feed',icon:bookOutline},
      {name:'Search',tab:'search',url:'/app/home/search',icon:bookOutline},
      {name:'Favorites',tab:'favorites',url:'/app/home/favorites',icon:bookOutline},
    ]

   return (
      <IonReactRouter>
        <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
            <IonTitle>Tabs</IonTitle>
          </IonToolbar>
          {/**/}
           {tabs.map((item, index) =>(
                        <IonTabButton key={index} tab={item.tab} href={item.url}>
                          <IonIcon icon={item.icon} />
                          <IonLabel>{item.name}</IonLabel>
                          </IonTabButton>
                           
                      ))}
        </IonTabBar>

        <IonRouterOutlet>
           <Route exact path="/app/home/feed" component={Feed} />
            <Route exact path="/app/home">
             <Redirect to="/app/home/feed" />
             </Route>
              <Route exact path="/app/home/search" component={Search} />
                <Route exact path="/app/home/favorites" component={Favorites} />
        </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>   
   );

};

export default Home;