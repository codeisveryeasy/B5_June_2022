import React from 'react';
import RemoteAPI from '../api/remoteapi';
import Bloglist from '../blog/bloglist';
import Lifecycle from '../lifecycle/lifecycle';


class RootComponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Root component</h1>
                <Bloglist></Bloglist>
                <hr></hr>
                <Lifecycle></Lifecycle>
                <hr></hr>
                <RemoteAPI></RemoteAPI>
            </div>
        );
    }
}
 
export default RootComponent;