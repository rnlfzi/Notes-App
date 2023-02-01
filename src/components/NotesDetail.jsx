import React from 'react';
import { showFormattedDate } from '../utils/index';
import ActionButton from './ActionButton';
import PropTypes from 'prop-types';

const NotesDetail = ({id, title, createdAt, body, archived, onDelete, onArchive, onUnarchived}) => {
    return (
        <div className="note-item">
            <h3 className="detail-page__title">
                {title}
            </h3>
            <h6 className="detail-page__createdAt">{ showFormattedDate(createdAt) }</h6>
            <p className="detail-page__body">{body}</p>
            <ActionButton 
                id={id} 
                archived={archived} 
                onDelete={onDelete} 
                onArchive={onArchive} 
                onUnarchived={onUnarchived}
            />
        </div>
    )
}

NotesDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchived: PropTypes.func.isRequired,
}

export default NotesDetail;
