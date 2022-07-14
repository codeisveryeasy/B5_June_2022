import React from 'react';
import Blogcontent from './blogcontent';
import Blogtitle from './blogtitle';

class Blog extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Blogtitle title={this.props.mytitle}></Blogtitle>
                <Blogcontent content={this.props.bcontent} likes={this.props.likes}></Blogcontent>
            </div>
        );
    }
}
 
export default Blog;