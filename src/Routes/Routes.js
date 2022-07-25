import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';

import Home from '../Pages/Home'
import SuperMarket from '../Pages/SuperMarket'
import Offer from '../Pages/Offer'
import BestSell from '../Pages/BestSell'


const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/supermarket' component={SuperMarket} />
                <Route path='/offer' component={Offer} />
                <Route path='/bestsell' component={BestSell} />
                <Redirect to='/home' />
            </Switch>
        </>
    );
};

export default Routes;