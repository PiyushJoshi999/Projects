import React, {Fragment} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
   <Fragment>
        <Cart />
        <Header />
        <Meals />
   </Fragment>
  );
}

export default App;
