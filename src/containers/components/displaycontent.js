import React from 'react';
import ShowItems from './minimalcomponents/showitems';

const DisplayContent = ({
    items,
    onEdit,
    onSubmitCaption
}) => (
        <ul>
            { items.map(item => 
                <ShowItems key={item.id} 
                imgurl ={item.url}
                toggleon = {item.toggle}
                caption ={item.caption}
                contid = {item.id}
                onEditText={onEdit}
                onSubmitText = {onSubmitCaption}
                {...item}
                />
            )}
        </ul>
    );


export default DisplayContent;