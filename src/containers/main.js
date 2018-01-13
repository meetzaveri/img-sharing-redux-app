import React from 'react';
import ReactDOM from 'react-dom';
import InputElement from './components/addimgcap';
import DisplayContent from './components/displaycontent';
import store from '../store/store';

var noteid = 0;
class Main extends React.Component{

    render() {
        const {getitems} = this.props;
        return (
            <div>
                <InputElement uploadcontent={(url,caption) => {
                    store.dispatch({type:'ADD_IMAGE',id:noteid++,url,caption,toggle:false})
                }} />
                <div>
                    <DisplayContent items={getitems}  onEdit={(caption,toggle,id) => {
                        store.dispatch({type:'EDIT_CAPTION',id,toggle,caption});
                    }}
                    onSubmitCaption={(caption,toggle,id) => {
                        store.dispatch({type:'SUBMIT_CAPTION',id,caption,toggle});
                    }}
                    />
                </div>
                <button className="ui button" onClick = {() => console.log(store.getState().items)}> arbitrary </button>
            </div>
        );
    }
}



export default Main;
