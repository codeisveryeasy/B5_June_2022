import React from 'react';
import Blog from './blog';

class Bloglist extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>List of all blogs: </h1>
                <Blog likes="10"
                      mytitle="Memories from Penang" 
                      bcontent="George Town is the colorful, multicultural capital of the Malaysian island of Penang. Once an important Straits of Malacca trading hub, the city is known for its British colonial buildings, Chinese shophouses and mosques. Beyond the old town, George Town is a modern city with skyscrapers and shopping malls. Verdant Penang Hill, with hiking and a funicular railway, overlooks it all. "  >
                      </Blog>
                <Blog likes="8"
                      mytitle="Memories from Langkavi"
                      bcontent="Langkawi is an archipelago off Malaysia's northwest coast. It's known for its beaches and clear waters. On the main island, also called Langkawi, the SkyCab cable car runs to and from the top of Machincang mountain. From the summit, the SkyBridge curves out above the trees. Trails run through the jungle to Telaga Tujuh, or the Seven Wells Waterfall. Kilim Karst Geoforest Park is home to mangrove forests and caves."  >
                        </Blog>  
                <Blog likes="5"
                      mytitle="Shopping in KL"
                      bcontent="Great food, great clothes, quality designer goods, and home-grown fashion labels are rife and more affordable here. There're excellent book shops with thousands of interesting titles you've never seen before, Malaysian-style jewellery, and lots of colourful trinkets for people of any age">
                      </Blog>
                <Blog  likes="20"
                       mytitle="Exploring East Malaysia"
                       bcontent="East Malaysia, also known as Sabah, Sarawak and Labuan or Malaysian Borneo, is the part of Malaysia on and near the island of Borneo, the world's third largest island. It consists of the Malaysian states of Sabah and Sarawak, as well as the Federal Territory of Labuan."></Blog>
               
            </div>
        );
    }
}
 
export default Bloglist;