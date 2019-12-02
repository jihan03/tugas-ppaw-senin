import React, { Component } from "react";

class Australia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=10&nat=au")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            Name: `${data.name.title}, ${data.name.first},${data.name.last} `,
            gender: ` ${data.gender} `,
            location: `${data.location.street.number}, ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country} `,
            age: ` ${data.dob.age} `,
            phone: ` ${data.phone} `,
            thumbnail: `${data.picture.large}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id,Name, gender,location, age, phone, thumbnail} = item;
               return (

               <div key={id} className="bgCircle">
               <center><img src={thumbnail} alt={Name} className="circle"/> </center><br />
               <div className="ctr">
                     {Name}<br />
                     {gender} <br />
                     <br />
                     {location} < br />
                     < br />
                     {age} <br />
                     <br />
                     {phone} 
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Australia;