import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export class URL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            newString: props.string
        };
    }
    edit = () => {
        this.setState({
            modalIsOpen: true
        });
    }
    render() {
        const {string} = this.props;
        return (
            <h3>
                {string}
                <a href={string}>Go</a>
                <div onClick={this.edit}>Edit</div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => {
                        this.setState({
                            modalIsOpen: false
                        });
                    }}
                    style={customStyles}
                >
                    <div
                        style={{
                            fontSize: 30,
                        }}
                    >
                        <input
                            style={{
                                fontSize: 30,
                            }}
                            value={this.state.newString}
                            onChange={(evt) => {
                                const {value} = evt.target;
                                this.setState({
                                    newString: value
                                });
                            }}
                        />
                        <button
                            onClick={() => {
                                const {onEdit} = this.props;
                                onEdit(this.state.newString);
                                this.setState({
                                    modalIsOpen: false
                                });
                            }}
                            style={{
                                fontSize: 30,
                            }}
                        >
                            save
                        </button>
                    </div>
                </Modal>
            </h3>
        );
    }
}