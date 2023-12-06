import { StyledContainer } from './App.styled';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { fetchImagesWithQuery, IMAGES_PER_PAGE } from '../services/api';
import { Modal } from './Modal/Modal';

export class App extends Component {

  state = {
    images: [],
    searchQuery: '',
    totalPages: 0,
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalImg: null,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ images: []});
    }

    if (prevState.searchQuery !== this.state.searchQuery
      || prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        const data = await fetchImagesWithQuery({ q: this.state.searchQuery, page: this.state.page });
        const totalPages = Math.ceil(data.totalHits / IMAGES_PER_PAGE);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.images],
          totalPages: totalPages,
          isLoading: false,
        }));
      } catch (err) {
        console.log(err);
        this.setState({
          images: [],
          totalPages: 0,
          isLoading: false,
        });
      }
    }
  }

  handleSearch = (searchQuery) => {
    this.setState({ ...searchQuery, page: 1 });
  };

  handleShowMore = () => {
    this.setState(prevState => ({ page: (prevState.page + 1) }));
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleImageClick = (largeImg, alt) => {
    this.handleToggleModal()
    this.setState({ modalImg: { src: largeImg, alt: alt } });
  }

  render() {
    const { images, page, totalPages, isLoading, isModalOpen, modalImg } = this.state;
    return (
      <StyledContainer>
        <Searchbar handleSearch={this.handleSearch} />
        {images.length > 0
          ? <ImageGallery images={images} onClick={this.handleImageClick} />
          : null}
        {(images.length > 0 && page < totalPages)
          ? <Button onClickHandler={this.handleShowMore} />
          : null}
        <Loader visible={isLoading} />
        {isModalOpen
          ? <Modal onClose={this.handleToggleModal}>
              <img src={modalImg.src} alt={modalImg.alt} />
            </Modal>
          : null}
      </StyledContainer>
    );
  }
}
