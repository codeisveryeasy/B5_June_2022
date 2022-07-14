import React, { Component } from 'react';

class RootComponent extends React.Component {
    name = "Air Asia"
    moon1 = "Phobos"
    moon2 = "Deimos"


    welcome = () => {
        return (
            <div>
                <h1>I am from Mars function!</h1>
                {this.moons()}
            </div>
        )
    }

    moons = () => {
        return (
            <p>Moons of Mars are {this.moon1} and {this.moon2}</p>
        )
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Hello, {this.name}</h1>
                    <h2>I am learning React!</h2>
                </div>
                <div>
                    {this.welcome()}
                </div>
            </div>

        );
    }
}

export default RootComponent;