import React from 'react'
import './App.css'
import { connect } from 'react-redux';

import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
// import UserContainer from './components/UserContainer'

function App ({cake, iceCream}) {
  return (
      <div className='App'>
        {/* <UserContainer /> */}
        <ItemContainer cake={cake} />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
  )
}

const mapStateToProps = state => ({
  cake: state.cake,
  iceCream: state.iceCream,
});

export default connect(mapStateToProps)(App);