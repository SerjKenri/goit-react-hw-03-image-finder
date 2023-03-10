import { Component } from 'react';
import css from './Model.module.css';
import propTypes from 'prop-types';

export class Model extends Component {
    static propTypes = {
        src: propTypes.string.isRequired,
        alt: propTypes.string.isRequired,
        onClose: propTypes.func.isRequired,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydownClose);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydownClose);
    }
    
    handleOverlayClose = e => {
        const { onClose } = this.props;
        if (e.currentTarget !== e.target) {
            onClose();
        }
    };
    
    handleKeydownClose = e => {
        const { onClose } = this.props;
        if (e.code === 'Escape') {
            onClose();
        }
    };

    render(){
        const {src, alt} = this.props;
        return (
        <div className={css.Overlay} onClick={this.handleOverlayClose}>
            <div className={css.Model} >
                <img src={src} alt={alt} />
            </div>
        </div>
)}};
