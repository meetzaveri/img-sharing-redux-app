import React from 'react';
import styled from 'styled-components';

const InputElement = ({
    uploadcontent
}) => {
    let inputImg;
    let inputCap;
    return(
        <div>
            <h2> Add Image URL and caption :</h2>
                <div className="ui input focus">
                    <input
                    style ={{ margin : '0 15px'}}
                    ref={node => {
                        inputImg = node;
                    }}
                    placeholder ="Image URL"
                    />
                    <input 
                    style ={{ margin : '0 15px'}}
                    ref={node => {
                        inputCap = node;
                    }}
                    placeholder ="Image Caption"
                    />
                </div>
            <button className="ui button" onClick={() => {
                uploadcontent(inputImg.value,inputCap.value);
                inputImg.value = '';
                inputCap.value = '';
                }}> 
                Upload it </button>
        </div>
    );
}

export default InputElement;
