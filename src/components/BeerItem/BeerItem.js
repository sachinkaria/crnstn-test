import React from 'react'
import axios from 'axios'

class BeerItem extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           beer: null
       }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        const url = `https://api.punkapi.com/v2/beers/${id}`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({beer: data[0]});
            })
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }

}

export default BeerItem
