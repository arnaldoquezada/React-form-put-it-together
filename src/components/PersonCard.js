import React, { Components } from 'react';


class PersonCard extends Components{
    render(){
        const {firstName, lastName, age, hairColor}=this.props;//Desestructurando mis props
        <div >            
            <h1>{lastName}, {firstName}</h1>           
            <h3>Age: {age}</h3>
            <h4>Hair Color: {hairColor}</h4>
        </div>
    }
}
export default PersonCard;