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
                <input
                style ={{ margin : '0 15px'}}
                ref={node => {
                    inputImg = node;
                }}/>
                <input 
                style ={{ margin : '0 15px'}}
                ref={node => {
                    inputCap = node;
                }}
                placeholder ="Image Caption"
                />
            <button onClick={() => {
                uploadcontent(inputImg.value,inputCap.value);
                inputImg.value = '';
                inputCap.value = '';
                }}> 
                Upload it </button>
        </div>
    );
}

export default InputElement;