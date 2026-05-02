import {
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import './Home.css';

import {
  bookmarkOutline,
  search,
  starOutline
} from 'ionicons/icons';

import { Route, Redirect } from 'react-router';

import Feed from "./tabs/Feed";
import Search from "./tabs/search";
import Favorite from "./tabs/favorite";

const Home: React.FC = () => {
  const tabs = [
    { name: 'Feed', tab: 'feed', url: '/app/home/feed', icon: bookmarkOutline },
    { name: 'Search', tab: 'search', url: '/app/home/search', icon: search },
    { name: 'Favorites', tab: 'favorites', url: '/app/home/favorites', icon: starOutline },
  ];

  return (
    <IonReactRouter>
      <IonTabs>

        {/* ROUTES */}
        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorite} />

          {/* DEFAULT REDIRECT */}
          <Redirect exact from="/app/home" to="/app/home/feed" />
        </IonRouterOutlet>

        {/* TAB BAR */}
        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  );
};

export default Home; 
