import React, {Component} from 'react'
import './App.css'

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>

                <div className="row mb2">
                    <div className="col-md-6 mb2">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    }
}