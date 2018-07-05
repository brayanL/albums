import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Create a components
//Class based components
class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] }; //dictionary albums key, [] array value
    console.log(this.state);
  }
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }))
    .catch(error => console.log(error));
  }

  renderAlbums() {
    /**
     * 1. When you want ref a var or javascript function inside JSX, to use curly braces.
     * 2. To fix warning: -Each child in array should have a unique key- set key property
     * on Text Component @see https://reactjs.org/docs/lists-and-keys.html#keys.
     */
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
