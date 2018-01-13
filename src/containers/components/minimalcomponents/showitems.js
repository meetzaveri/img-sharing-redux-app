import React from 'react';
import styled from 'styled-components';
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
    //     this.state.newcaption='';
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
                    <li style={{listStyle :'none', margin : '30px 0px'}}>
                    <Wrapper>
                        <img style={{ width : '100%',height:'100%' , margin:' 0px 10px'}} src={imgurl} />
                        <Text style ={{ display : toggleon ? 'none' : 'flex',margin:' 0px 10px', fontSize :'19px'}} >{caption} </Text>
                    </Wrapper>
                    
                    <div className="ui input focus">
                        <input 
                        onChange={this.handleChange}

                        style ={{ display : toggleon ? 'flex' : 'none',
                        padding: '0px',
                        fontSize: '20px',
                        margin: '0 10px'
                        }}
                        />
                    </div>

                    <button className="ui button"
                    style ={{ display : toggleon ? 'flex' : 'none',margin:'10px'}}
                    onClick={() => {onSubmitText(this.state.newcaption,toggleon,contid);
                    this.state.newcaption ='';
                    }}> Submit </button>

                    <button className="ui button"
                    style ={{ display : toggleon ? 'none' : 'flex',margin:'0 10px'}}
                    onClick={() => {onEditText(caption,toggleon,contid);
                    this.state.newcaption ='';
                    }}> Edit </button>

                    <div> </div>
                    </li>
                );
    }
}


export default ShowItems;
