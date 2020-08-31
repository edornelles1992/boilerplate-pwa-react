import React, { Component} from 'react'

import { showNotification } from '../../components/Notification/index';
import styled from 'styled-components';
import Stores from '../../stores';
import { colors } from '../../assets/config'

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
            //estados do componente...
            loadedMessage: 'Carregado com sucesso!'
		}
    }

    componentDidMount(){
        Stores.exampleStore.setHello('Hello from store!')
        showNotification(this.state.loadedMessage)
    }
    
    render(){
        return (
            <Container>
                <Title>Lorem ipsum</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                <Button onClick={() =>  showNotification(Stores.exampleStore.hello)}>Hello Store</Button>
            </Container>
        )
    }
}

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h2`
    width: 50%;
    text-align: center;
`

const Paragraph = styled.p`
    width: 50%;
    text-align: justify;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  margin: 0 1em;
  padding: 0.25em 1em;
`