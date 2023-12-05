import { StyledContainer } from './App.styled';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { fetchImagesWithQuery, IMAGES_PER_PAGE } from '../services/api';
import Modal from './Modal/Modal';
import * as bodyScrollLock from "body-scroll-lock"

export class App extends Component {

  state = {
    images: [],
    searchQuery: '',
    totalPages: 0,
    page: 1,
    isLoading: false,
    modalImg: null,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery
      || prevState.page !== this.state.page) {
      try {
        const data = await fetchImagesWithQuery(this.state.searchQuery, this.state.page);
        const totalPages = Math.ceil(data.totalHits / IMAGES_PER_PAGE);
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
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

    if (prevState.modalImg !== this.state.modalImg){
      if (this.state.modalImg) {
        document.addEventListener("keydown", this.handleModalClose);
        bodyScrollLock.disableBodyScroll(document.body);
      }
      else {
        document.removeEventListener("keydown", this.handleModalClose);
        bodyScrollLock.enableBodyScroll(document.body);
      }
    }
  }

  handleSearch = (ev) => {
    ev.preventDefault();
    const searchQuery = ev.currentTarget.elements.searchQuery.value;
    this.setState({ searchQuery: searchQuery, images: [], page: 1, isLoading: true });
    ev.currentTarget.elements.searchQuery.value = '';
  };

  handleShowMore = () => {
    this.setState(prevState => ({ page: (prevState.page + 1), isLoading: true }));
  };

  handleImageClick = (largeImg, alt) => {
    this.setState({ modalImg: { src: largeImg, alt: alt } });
  };

  handleModalClose = ( ev ) => {
    if (ev.target.nodeName === 'BUTTON'
      || ev.target.dataset.backdrop
      || ev.key === "Escape") {
      this.setState({ modalImg: null });
    }
  };

  render() {
    return (
      <StyledContainer>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.images.length > 0 && <ImageGallery images={this.state.images} onClick={this.handleImageClick} />}
        {(this.state.images.length > 0 && this.state.page < this.state.totalPages) &&
          <Button onClickHandler={this.handleShowMore} />}
        <Loader visible={this.state.isLoading} />
        {this.state.modalImg &&
          <Modal src={this.state.modalImg.src} alt={this.state.modalImg.alt} onClose={this.handleModalClose} />}
      </StyledContainer>
    );
  }
}
