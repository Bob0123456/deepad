import React, { Component } from "react";
import {
    Route,
    HashRouter,

} from "react-router-dom";


import "./main.css"

import GroupView from "./groupview/GroupView";
import AppHeader from "./header/Header";
import { createBrowserHistory } from 'history';



const history = createBrowserHistory({
    basename: "", // The base URL of the app (see below)
    forceRefresh: false, // Set true to force full page refreshes
    keyLength: 6, // The length of location.key
    // A function to use to confirm navigation with the user (see below)
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

history.listen(location => {

    // console.log(location.pathname, location.hash)
})

let linkHolder = {}

function updateLh(location) {

    if (location.hash in linkHolder) {
        linkHolder[location.hash] = linkHolder[location.hash] + 1
    } else {
        linkHolder[location.hash] = 0
    }

}

history.listen(location => {
    updateLh(location)
});


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        updateLh(window.location)
    }

    componentDidMount() {

    }
    render() {


        return (
            <HashRouter>
                <AppHeader></AppHeader>

                <main className="container-fluid p10">
                    <Route exact path="/" component={GroupView} />
                    {/* <Route exact path="/train" component={Train} /> */}

                </main>
                {/* <div id="footer"> <Footer /> </div> */}
            </HashRouter>

        );
    }
}

export default Main;