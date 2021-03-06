// Import dependencies.
import React, { Component } from 'react';

// Import scene styles.
import MainSceneStyles from './styles.scss';

// Import components.
import Container from '../../components/container/index.jsx';
import ReactComponent from './components/react-example/index.jsx';

class MainScene extends React.Component{
  // Component constructor.
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <Container>
        <ReactComponent/>
      </Container>
    );
  }
}

// Export scene.
export default MainScene;
