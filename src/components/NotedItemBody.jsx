import React from 'react';
import PropTypes from 'prop-types';
import {showFormattedDate} from '../utils/index';
import { Link } from 'react-router-dom';

const NotedItemBody = ({id, title, createdAt, body}) => {
    return (
        <div>
            <Link to={`/notes/${id}`} >
                <div className="note-item__title">
                    {title}
                </div>
            </Link>
            <h6 className="note-item__createdAt">{showFormattedDate(createdAt)}</h6>
            <div className="note-item__body">{body}</div>
        </div>
    )
}

NotedItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NotedItemBody;
