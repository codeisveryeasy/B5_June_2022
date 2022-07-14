import React from 'react';
import Bloglist from '../blog/bloglist';


class RootComponent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Root component</h1>
                <Bloglist></Bloglist>
            </div>
        );
    }
}
 
export default RootComponent;