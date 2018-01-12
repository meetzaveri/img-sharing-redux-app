import React from 'react';
import styled from 'styled-components';
import ImgContainer from './imgcontainer';
import Text from './text';

const Wrapper = styled.div`
    width :150px;
    height : 150px;
    padding:15px 0px;
`

class ShowItems extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newcaption : ''
        }
    }
    // componentDidMount(){
    //     this.edittext;
    // }

    handleChange = (e) => {
        this.setState({newcaption : e.target.value})
    }

    // componentWillUnmount(){
    //     this.edittext;
    // }
    // ref={node => {
    //     this.edittext = node
    //     }}

    render() {
        const {imgurl,
            caption,
            onEditText,
            toggleon,
            contid,
            onSubmitText} = this.props;
        return(
            <li style={{listStyle :'none'}}>
            <Wrapper>
            <img style={{ width : '100%',height:'100%' }} src={imgurl} />

            </Wrapper>
            <Text

            >{caption} </Text>

            <input 
            onChange={this.handleChange}

            style ={{ display : toggleon ? 'flex' : 'none',
            padding: '0px',
            fontSize: '20px',
            margin: '0 10px'
            }}
            />

            <button 
            style ={{ display : toggleon ? 'flex' : 'none',}}
            onClick={() => {onSubmitText(this.state.newcaption,toggleon,contid);
            this.state.newcaption ='';
            }}> Submit </button>

            <button
            style ={{ display : toggleon ? 'none' : 'flex',}}
            onClick={() => {onEditText(caption,toggleon,contid);
            }}> Edit </button>


            </li>
        );
    }
}


export default ShowItems;