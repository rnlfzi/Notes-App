import React from 'react';
import NotedItemBody from '../components/NotedItemBody';
import PropTypes from 'prop-types';

const NotedItem = ({id, title, createdAt, body}) => {
    return (
        <div className='note-item'>
            <NotedItemBody 
                id={id} 
                title={title} 
                createdAt={createdAt} 
                body={body} 
            />
        </div>
    )
}

NotedItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NotedItem;
