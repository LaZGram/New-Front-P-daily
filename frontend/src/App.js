import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Homefarmer from './page/Homefarmer';
import User from './User';
import Tabledata from './page/Tabledata';
import Milk from './page/Milk';
import Homepage from './page/Homepage';
import Food from './page/Food';
import Navbarmenu from './components/Navbarmenu';
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import ThirdParty, { Github, Google, Facebook, Apple } from 'supertokens-auth-react/recipe/thirdparty';
import Session from 'supertokens-auth-react/recipe/session';
import { ThirdPartyPreBuiltUI } from 'supertokens-auth-react/recipe/thirdparty/prebuiltui';
import * as reactRouterDom from 'react-router-dom';

SuperTokens.init({
  appInfo: {
    appName: 'loginTest',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/Auth',
    websiteBasePath: '/Auth',
  },
  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ],
      },
    }),
    Session.init(),
  ],
});

function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <div className="App">
          <Navbarmenu />
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyPreBuiltUI])}
            <Route path="/" element={<Homepage />} />
            <Route path="/user" element={<User />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/food" element={<Food />} />
            <Route path="/tabledata" element={<Tabledata />} />
            <Route path="/homefarmer" element={<Homefarmer />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
