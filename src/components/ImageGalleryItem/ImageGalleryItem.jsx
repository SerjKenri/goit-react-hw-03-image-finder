import { Component } from 'react';
import propTypes from 'prop-types';
import { Model } from 'components/Model/Model.jsx';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    static propTypes = {
        images: propTypes.string.isRequired,
        largeImage: propTypes.string.isRequired,
        id: propTypes.number.isRequired,
        tags: propTypes.string.isRequired,
    };
    
    state = {
        openModel: false,
    };

    toggleModel = () => {
        this.setState(({openModel}) => ({
            openModel: !openModel,
        }))
    };

    render() {
        const {openModel} = this.state;
        const {id, images, largeImage, tags} = this.props;

        return (
        <li className={css.ImageGalleryItem} key={id} onClick={this.toggleModel}>
            <img className={css.ImageGalleryItemImage} src={images} alt={tags} key={id}/>
            {openModel && <Model src={largeImage} alt={tags} onClose={this.toggleModel} />}
        </li>
)}
};
