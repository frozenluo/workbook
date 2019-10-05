import React from 'react';

export class Note extends React.Component {
    render() {
        const {note} = this.props;
        return (
            <h3>
                {note}
                <button onClick={() => {}}>Delete</button>
            </h3>
        );
    }
}