import React from 'react';
import NotedItem from './NotedItem';
import PropTypes from 'prop-types';

const NotedList = ({notes}) => {
    return (
        <div  className='notes-list'> 
            {notes.map((note) => (
                    <NotedItem
                    key={note.id}
                    id={note.id}
                    {...note} />
                ))
            }     
        </div>
    )
}

NotedList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NotedList;

