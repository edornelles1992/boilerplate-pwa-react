import React, { Component} from 'react'

import { showNotification } from '../../components/Notification/index';
import Stores from '../../stores';
import { Container, Title, Paragraph, Button } from './styles';
import { strings } from '../../assets/config'

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
            //estados do componente...
            loadedMessage: strings.general.successLoaded
		}
    }

    componentDidMount(){
        Stores.exampleStore.setHello(strings.general.hello)
        showNotification(this.state.loadedMessage)
    }
    
    render(){
        return (
            <Container>
                <Title>{strings.general.loremIpsum}</Title>
                <Paragraph>{strings.general.loremText}</Paragraph>
                <Button onClick={() =>  showNotification(Stores.exampleStore.hello)}>{strings.general.buttonExample}</Button>
            </Container>
        )
    }
}

export default Welcome;