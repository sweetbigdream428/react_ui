import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import ImageUploading from 'react-images-uploading';
import { Form, Button, Container, FormGroup, Row } from 'reactstrap'

const Information = ({ stepper, type }) => {

  const onSubmit = () => {
    stepper.next()
  }
  const { handleSubmit } = useForm()
  const maxNumber = 69;
  const [kitchenImages, setkitchenImages] = useState([]);
  const [showKitchenUpload, setShowKitchenUpload] = useState(false)

  const [bathroomoneImages, setBathroomoneImages] = useState([]);
  const [showBathroomoneUpload, setShowBathroomoneUpload] = useState(false)
  const [bathroomtwoImages, setBathroomtwoImages] = useState([]);
  const [showBathroomtwoUpload, setShowBathroomtwoUpload] = useState(false)
  const [bedroomoneImages, setBedroomoneImages] = useState([]);
  const [showBedroomoneUpload, setShowBedroomoneUpload] = useState(false)
  const [bedroomtwoImages, setBedroomtwoImages] = useState([]);
  const [showBedroomtwoUpload, setShowBedroomtwoUpload] = useState(false)
  const [bedroomthreeImages, setBedroomthreeImages] = useState([]);
  const [showBedroomthreeUpload, setShowBedroomthreeUpload] = useState(false)


  // Kitchen

  function onClickKitchen() {
    if (showKitchenUpload) {
      setShowKitchenUpload(false)
    }
    else {
      setShowKitchenUpload(true)
    }
  }

  const KitchenUploadResults = () => (
    <ImageUploading
      multiple
      value={kitchenImages}
      onChange={onChangeKitchen}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeKitchen = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setkitchenImages(imageList);
  };

  // Bathroomone
  function onClickBathroomone() {
    if (showBathroomoneUpload) {
      setShowBathroomoneUpload(false)
    }
    else {
      setShowBathroomoneUpload(true)
    }
  }

  const BathroomoneUploadResults = () => (
    <ImageUploading
      multiple
      value={bathroomoneImages}
      onChange={onChangeBathroomone}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeBathroomone = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setBathroomoneImages(imageList);
  };

  // Bathroomtwo
  function onClickBathroomtwo() {
    if (showBathroomtwoUpload) {
      setShowBathroomtwoUpload(false)
    }
    else {
      setShowBathroomtwoUpload(true)
    }
  }

  const BathroomtwoUploadResults = () => (
    <ImageUploading
      multiple
      value={bathroomtwoImages}
      onChange={onChangeBathroomtwo}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeBathroomtwo = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setBathroomtwoImages(imageList);
  };

  // Bedroomone
  function onClickBedroomone() {
    if (showBedroomoneUpload) {
      setShowBedroomoneUpload(false)
    }
    else {
      setShowBedroomoneUpload(true)
    }
  }

  const BedroomoneUploadResults = () => (
    <ImageUploading
      multiple
      value={bedroomoneImages}
      onChange={onChangeBedroomone}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeBedroomone = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setBedroomoneImages(imageList);
  };

  // Bedroomtwo
  function onClickBedroomtwo() {
    if (showBedroomtwoUpload) {
      setShowBedroomtwoUpload(false)
    }
    else {
      setShowBedroomtwoUpload(true)
    }
  }

  const BedroomtwoUploadResults = () => (
    <ImageUploading
      multiple
      value={bedroomtwoImages}
      onChange={onChangeBedroomtwo}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeBedroomtwo = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setBedroomtwoImages(imageList);
  };

  // Bedroomthree
  function onClickBedroomthree() {
    if (showBedroomthreeUpload) {
      setShowBedroomthreeUpload(false)
    }
    else {
      setShowBedroomthreeUpload(true)
    }
  }

  const BedroomthreeUploadResults = () => (
    <ImageUploading
      multiple
      value={bedroomthreeImages}
      onChange={onChangeBedroomthree}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            className='btn-add-upload-img'
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}
            type='button'
          >
            <i className='image-add-icon'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11C22 11.3242 21.8712 11.635 21.642 11.8642C21.4128 12.0935 21.1019 12.2222 20.7778 12.2222H12.2222V20.7778C12.2222 21.1019 12.0935 21.4128 11.8642 21.642C11.635 21.8712 11.3242 22 11 22C10.6758 22 10.365 21.8712 10.1358 21.642C9.90655 21.4128 9.77778 21.1019 9.77778 20.7778V12.2222H1.22222C0.898069 12.2222 0.587192 12.0935 0.357981 11.8642C0.12877 11.635 0 11.3242 0 11C0 10.6758 0.12877 10.365 0.357981 10.1358C0.587192 9.90655 0.898069 9.77778 1.22222 9.77778H9.77778V1.22222C9.77778 0.898069 9.90655 0.587192 10.1358 0.357981C10.365 0.12877 10.6758 0 11 0C11.3242 0 11.635 0.12877 11.8642 0.357981C12.0935 0.587192 12.2222 0.898069 12.2222 1.22222V9.77778H20.7778C21.1019 9.77778 21.4128 9.90655 21.642 10.1358C21.8712 10.365 22 10.6758 22 11Z" fill="#4A7558" />
              </svg>
            </i>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image['data_url']} alt="" width="100" />
              <div className="image-item__btn-wrapper">
                {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                <button type='button' onClick={() => onImageRemove(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )

  const onChangeBedroomthree = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setBedroomthreeImages(imageList);
  };


  return (
    <Fragment>
      <div className='content-header'>
      </div>
      <Container id='informationAddr'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='info-content-title text-center'>Please upload pictures of every room in your home</h3>
          <div className='w-100 d-flex justify-content-center mt-5'>
            <Row className='form-uploadpic'>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.2969 3.84375H13.9219C13.5336 3.84375 13.2188 4.15856 13.2188 4.54688V11.3438H0.703125C0.314813 11.3438 0 11.6586 0 12.0469V23.2969C0 23.6852 0.314813 24 0.703125 24H23.2969C23.6852 24 24 23.6852 24 23.2969V4.54688C24 4.15856 23.6852 3.84375 23.2969 3.84375ZM14.625 5.25H22.5938V11.3438H14.625V5.25ZM1.40625 12.75H13.2188V14.1562H1.40625V12.75ZM1.40625 15.5625H9.46875V22.5938H1.40625V15.5625ZM10.875 15.5625H13.2188V22.5938H10.875V15.5625ZM14.625 22.5938V12.75H22.5938V22.5938H14.625Z" fill="#4A7558" />
                          <path d="M0.703125 9.375H11.0156C11.4039 9.375 11.7188 9.06019 11.7188 8.67188V6.79688C11.7188 6.59161 11.629 6.39661 11.4732 6.26302L8.4375 3.66098V0.703125C8.4375 0.314813 8.12269 0 7.73438 0H3.98438C3.59606 0 3.28125 0.314813 3.28125 0.703125V3.66098L0.245531 6.26302C0.0897188 6.39661 0 6.59161 0 6.79688V8.67188C0 9.06019 0.314813 9.375 0.703125 9.375ZM4.6875 1.40625H7.03125V3.28125H4.6875V1.40625ZM1.40625 7.12027L4.24448 4.6875H7.47427L10.3125 7.12027V7.96875H1.40625V7.12027Z" fill="#4A7558" />
                          <path d="M16.7344 7.125C16.3461 7.125 16.0312 7.43981 16.0312 7.82812V9.23438C16.0312 9.62269 16.3461 9.9375 16.7344 9.9375C17.1227 9.9375 17.4375 9.62269 17.4375 9.23438V7.82812C17.4375 7.43981 17.1227 7.125 16.7344 7.125Z" fill="#4A7558" />
                          <path d="M16.7344 14.1562C16.3461 14.1562 16.0312 14.4711 16.0312 14.8594V16.2656C16.0312 16.6539 16.3461 16.9688 16.7344 16.9688C17.1227 16.9688 17.4375 16.6539 17.4375 16.2656V14.8594C17.4375 14.4711 17.1227 14.1562 16.7344 14.1562Z" fill="#4A7558" />
                          <path d="M7.35938 17.6719C6.97106 17.6719 6.65625 17.9867 6.65625 18.375V19.7812C6.65625 20.1696 6.97106 20.4844 7.35938 20.4844C7.74769 20.4844 8.0625 20.1696 8.0625 19.7812V18.375C8.0625 17.9867 7.74769 17.6719 7.35938 17.6719Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Kitchen
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickKitchen()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showKitchenUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showKitchenUpload ? <KitchenUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 13.5938C24 12.4306 23.0537 11.4844 21.8906 11.4844H19.6134C19.3232 10.666 18.5416 10.0781 17.625 10.0781H14.8125C13.8959 10.0781 13.1143 10.666 12.8241 11.4844H2.85938V3.51562C2.85938 2.35252 3.80564 1.40625 4.96875 1.40625H6.375C7.32544 1.40625 8.1308 2.03827 8.39363 2.904C6.83639 3.26498 5.67188 4.66266 5.67188 6.32812V7.03125H12.7031V6.32812C12.7031 4.60931 11.4629 3.17564 9.83063 2.8725C9.52748 1.24017 8.09381 0 6.375 0H4.96875C3.03023 0 1.45312 1.57711 1.45312 3.51562V11.5894C0.610453 11.8661 0 12.6598 0 13.5938C0 14.5277 0.610453 15.3215 1.45312 15.5981V17.8125C1.45312 19.6523 2.46802 21.2593 3.96717 22.1038L3.5625 22.5085C3.28793 22.7831 3.28792 23.2282 3.56249 23.5028C3.83707 23.7774 4.28225 23.7774 4.55684 23.5028L5.4188 22.6409C5.72827 22.702 6.04791 22.7344 6.375 22.7344H17.625C17.9521 22.7344 18.2717 22.702 18.5812 22.6408L19.4432 23.5028C19.7178 23.7774 20.1629 23.7774 20.4375 23.5028C20.7121 23.2282 20.7121 22.783 20.4375 22.5085L20.0329 22.1038C21.532 21.2593 22.5469 19.6523 22.5469 17.8125V15.5981C23.3895 15.3215 24 14.5278 24 13.5938ZM11.1764 5.625H7.19859C7.4888 4.80652 8.27081 4.21875 9.1875 4.21875C10.1042 4.21875 10.8862 4.80652 11.1764 5.625ZM14.1094 12.1875C14.1094 11.7998 14.4248 11.4844 14.8125 11.4844H17.625C18.0127 11.4844 18.3281 11.7998 18.3281 12.1875V15.7031H14.1094V12.1875ZM2.10938 12.8906H12.7031V14.2969H2.10938C1.72167 14.2969 1.40625 13.9815 1.40625 13.5938C1.40625 13.206 1.72167 12.8906 2.10938 12.8906ZM17.625 21.3281H6.375C4.43648 21.3281 2.85938 19.751 2.85938 17.8125V15.7031H12.7031V17.1094H19.7344V15.7031H21.1406V17.8125C21.1406 19.751 19.5635 21.3281 17.625 21.3281ZM21.8906 14.2969H19.7344V12.8906H21.8906C22.2783 12.8906 22.5938 13.206 22.5938 13.5938C22.5938 13.9815 22.2783 14.2969 21.8906 14.2969Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Bathroom 1
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickBathroomone()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showBathroomoneUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBathroomoneUpload ? <BathroomoneUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 13.5938C24 12.4306 23.0537 11.4844 21.8906 11.4844H19.6134C19.3232 10.666 18.5416 10.0781 17.625 10.0781H14.8125C13.8959 10.0781 13.1143 10.666 12.8241 11.4844H2.85938V3.51562C2.85938 2.35252 3.80564 1.40625 4.96875 1.40625H6.375C7.32544 1.40625 8.1308 2.03827 8.39363 2.904C6.83639 3.26498 5.67188 4.66266 5.67188 6.32812V7.03125H12.7031V6.32812C12.7031 4.60931 11.4629 3.17564 9.83063 2.8725C9.52748 1.24017 8.09381 0 6.375 0H4.96875C3.03023 0 1.45312 1.57711 1.45312 3.51562V11.5894C0.610453 11.8661 0 12.6598 0 13.5938C0 14.5277 0.610453 15.3215 1.45312 15.5981V17.8125C1.45312 19.6523 2.46802 21.2593 3.96717 22.1038L3.5625 22.5085C3.28793 22.7831 3.28792 23.2282 3.56249 23.5028C3.83707 23.7774 4.28225 23.7774 4.55684 23.5028L5.4188 22.6409C5.72827 22.702 6.04791 22.7344 6.375 22.7344H17.625C17.9521 22.7344 18.2717 22.702 18.5812 22.6408L19.4432 23.5028C19.7178 23.7774 20.1629 23.7774 20.4375 23.5028C20.7121 23.2282 20.7121 22.783 20.4375 22.5085L20.0329 22.1038C21.532 21.2593 22.5469 19.6523 22.5469 17.8125V15.5981C23.3895 15.3215 24 14.5278 24 13.5938ZM11.1764 5.625H7.19859C7.4888 4.80652 8.27081 4.21875 9.1875 4.21875C10.1042 4.21875 10.8862 4.80652 11.1764 5.625ZM14.1094 12.1875C14.1094 11.7998 14.4248 11.4844 14.8125 11.4844H17.625C18.0127 11.4844 18.3281 11.7998 18.3281 12.1875V15.7031H14.1094V12.1875ZM2.10938 12.8906H12.7031V14.2969H2.10938C1.72167 14.2969 1.40625 13.9815 1.40625 13.5938C1.40625 13.206 1.72167 12.8906 2.10938 12.8906ZM17.625 21.3281H6.375C4.43648 21.3281 2.85938 19.751 2.85938 17.8125V15.7031H12.7031V17.1094H19.7344V15.7031H21.1406V17.8125C21.1406 19.751 19.5635 21.3281 17.625 21.3281ZM21.8906 14.2969H19.7344V12.8906H21.8906C22.2783 12.8906 22.5938 13.206 22.5938 13.5938C22.5938 13.9815 22.2783 14.2969 21.8906 14.2969Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Bathroom 2
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickBathroomtwo()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showBathroomtwoUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBathroomtwoUpload ? <BathroomtwoUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.6331 12.0366V11.5033C26.6331 10.5209 26.1245 9.65562 25.3572 9.15523V3.33823C25.3572 1.80775 24.1121 0.562622 22.5816 0.562622H5.41838C3.8879 0.562622 2.64272 1.80775 2.64272 3.33823V9.15518C1.87545 9.65557 1.36686 10.5209 1.36686 11.5032V12.0365C0.581219 12.2434 0 12.9598 0 13.8095V20.0491C0 21.0308 0.775578 21.8345 1.74612 21.8802V22.6186C1.74612 23.0708 2.11269 23.4374 2.56484 23.4374C3.017 23.4374 3.38357 23.0708 3.38357 22.6186V21.8824H24.6164V22.6186C24.6164 23.0708 24.9829 23.4374 25.4351 23.4374C25.8873 23.4374 26.2538 23.0708 26.2538 22.6186V21.8802C27.2244 21.8345 28 21.0307 28 20.0491V13.8095C28 12.9597 27.4188 12.2434 26.6331 12.0366ZM4.28023 3.33823C4.28023 2.71064 4.79079 2.20008 5.41838 2.20008H22.5816C23.2092 2.20008 23.7198 2.71064 23.7198 3.33823V8.70127H22.6281V7.25818C22.6281 6.2481 21.8064 5.42631 20.7962 5.42631H16.3907C15.3806 5.42631 14.5589 6.2481 14.5589 7.25818V8.70127H13.4411V7.25818C13.4411 6.2481 12.6194 5.42631 11.6093 5.42631H7.20377C6.19363 5.42631 5.3719 6.2481 5.3719 7.25818V8.70127H4.28023V3.33823ZM20.9906 7.25812V8.50686C20.9906 8.61404 20.9034 8.70121 20.7962 8.70121H16.3907C16.2835 8.70121 16.1964 8.61399 16.1964 8.50686V7.25812C16.1964 7.15093 16.2836 7.06376 16.3907 7.06376H20.7962C20.9034 7.06376 20.9906 7.15093 20.9906 7.25812ZM11.8036 7.25812V8.50686C11.8036 8.61404 11.7164 8.70121 11.6093 8.70121H7.20377C7.09658 8.70121 7.00941 8.61399 7.00941 8.50686V7.25812C7.00941 7.15093 7.09663 7.06376 7.20377 7.06376H11.6093C11.7164 7.06376 11.8036 7.15093 11.8036 7.25812ZM3.00437 11.5032C3.00437 10.8611 3.5268 10.3387 4.16894 10.3387H23.8311C24.4732 10.3387 24.9956 10.8612 24.9956 11.5032V11.9762H3.00437V11.5032ZM26.3625 20.0491C26.3625 20.157 26.2747 20.2449 26.1667 20.2449H1.83329C1.72534 20.2449 1.63745 20.157 1.63745 20.0491V13.8095C1.63745 13.7016 1.72528 13.6137 1.83329 13.6137H26.1667C26.2747 13.6137 26.3625 13.7016 26.3625 13.8095V20.0491H26.3625Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Bedroom 1
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickBedroomone()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showBedroomoneUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBedroomoneUpload ? <BedroomoneUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.6331 12.0366V11.5033C26.6331 10.5209 26.1245 9.65562 25.3572 9.15523V3.33823C25.3572 1.80775 24.1121 0.562622 22.5816 0.562622H5.41838C3.8879 0.562622 2.64272 1.80775 2.64272 3.33823V9.15518C1.87545 9.65557 1.36686 10.5209 1.36686 11.5032V12.0365C0.581219 12.2434 0 12.9598 0 13.8095V20.0491C0 21.0308 0.775578 21.8345 1.74612 21.8802V22.6186C1.74612 23.0708 2.11269 23.4374 2.56484 23.4374C3.017 23.4374 3.38357 23.0708 3.38357 22.6186V21.8824H24.6164V22.6186C24.6164 23.0708 24.9829 23.4374 25.4351 23.4374C25.8873 23.4374 26.2538 23.0708 26.2538 22.6186V21.8802C27.2244 21.8345 28 21.0307 28 20.0491V13.8095C28 12.9597 27.4188 12.2434 26.6331 12.0366ZM4.28023 3.33823C4.28023 2.71064 4.79079 2.20008 5.41838 2.20008H22.5816C23.2092 2.20008 23.7198 2.71064 23.7198 3.33823V8.70127H22.6281V7.25818C22.6281 6.2481 21.8064 5.42631 20.7962 5.42631H16.3907C15.3806 5.42631 14.5589 6.2481 14.5589 7.25818V8.70127H13.4411V7.25818C13.4411 6.2481 12.6194 5.42631 11.6093 5.42631H7.20377C6.19363 5.42631 5.3719 6.2481 5.3719 7.25818V8.70127H4.28023V3.33823ZM20.9906 7.25812V8.50686C20.9906 8.61404 20.9034 8.70121 20.7962 8.70121H16.3907C16.2835 8.70121 16.1964 8.61399 16.1964 8.50686V7.25812C16.1964 7.15093 16.2836 7.06376 16.3907 7.06376H20.7962C20.9034 7.06376 20.9906 7.15093 20.9906 7.25812ZM11.8036 7.25812V8.50686C11.8036 8.61404 11.7164 8.70121 11.6093 8.70121H7.20377C7.09658 8.70121 7.00941 8.61399 7.00941 8.50686V7.25812C7.00941 7.15093 7.09663 7.06376 7.20377 7.06376H11.6093C11.7164 7.06376 11.8036 7.15093 11.8036 7.25812ZM3.00437 11.5032C3.00437 10.8611 3.5268 10.3387 4.16894 10.3387H23.8311C24.4732 10.3387 24.9956 10.8612 24.9956 11.5032V11.9762H3.00437V11.5032ZM26.3625 20.0491C26.3625 20.157 26.2747 20.2449 26.1667 20.2449H1.83329C1.72534 20.2449 1.63745 20.157 1.63745 20.0491V13.8095C1.63745 13.7016 1.72528 13.6137 1.83329 13.6137H26.1667C26.2747 13.6137 26.3625 13.7016 26.3625 13.8095V20.0491H26.3625Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Bedroom 2
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickBedroomtwo()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showBedroomtwoUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBedroomtwoUpload ? <BedroomtwoUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.6331 12.0366V11.5033C26.6331 10.5209 26.1245 9.65562 25.3572 9.15523V3.33823C25.3572 1.80775 24.1121 0.562622 22.5816 0.562622H5.41838C3.8879 0.562622 2.64272 1.80775 2.64272 3.33823V9.15518C1.87545 9.65557 1.36686 10.5209 1.36686 11.5032V12.0365C0.581219 12.2434 0 12.9598 0 13.8095V20.0491C0 21.0308 0.775578 21.8345 1.74612 21.8802V22.6186C1.74612 23.0708 2.11269 23.4374 2.56484 23.4374C3.017 23.4374 3.38357 23.0708 3.38357 22.6186V21.8824H24.6164V22.6186C24.6164 23.0708 24.9829 23.4374 25.4351 23.4374C25.8873 23.4374 26.2538 23.0708 26.2538 22.6186V21.8802C27.2244 21.8345 28 21.0307 28 20.0491V13.8095C28 12.9597 27.4188 12.2434 26.6331 12.0366ZM4.28023 3.33823C4.28023 2.71064 4.79079 2.20008 5.41838 2.20008H22.5816C23.2092 2.20008 23.7198 2.71064 23.7198 3.33823V8.70127H22.6281V7.25818C22.6281 6.2481 21.8064 5.42631 20.7962 5.42631H16.3907C15.3806 5.42631 14.5589 6.2481 14.5589 7.25818V8.70127H13.4411V7.25818C13.4411 6.2481 12.6194 5.42631 11.6093 5.42631H7.20377C6.19363 5.42631 5.3719 6.2481 5.3719 7.25818V8.70127H4.28023V3.33823ZM20.9906 7.25812V8.50686C20.9906 8.61404 20.9034 8.70121 20.7962 8.70121H16.3907C16.2835 8.70121 16.1964 8.61399 16.1964 8.50686V7.25812C16.1964 7.15093 16.2836 7.06376 16.3907 7.06376H20.7962C20.9034 7.06376 20.9906 7.15093 20.9906 7.25812ZM11.8036 7.25812V8.50686C11.8036 8.61404 11.7164 8.70121 11.6093 8.70121H7.20377C7.09658 8.70121 7.00941 8.61399 7.00941 8.50686V7.25812C7.00941 7.15093 7.09663 7.06376 7.20377 7.06376H11.6093C11.7164 7.06376 11.8036 7.15093 11.8036 7.25812ZM3.00437 11.5032C3.00437 10.8611 3.5268 10.3387 4.16894 10.3387H23.8311C24.4732 10.3387 24.9956 10.8612 24.9956 11.5032V11.9762H3.00437V11.5032ZM26.3625 20.0491C26.3625 20.157 26.2747 20.2449 26.1667 20.2449H1.83329C1.72534 20.2449 1.63745 20.157 1.63745 20.0491V13.8095C1.63745 13.7016 1.72528 13.6137 1.83329 13.6137H26.1667C26.2747 13.6137 26.3625 13.7016 26.3625 13.8095V20.0491H26.3625Z" fill="#4A7558" />
                        </svg>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Bedroom 3
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickBedroomthree()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showBedroomthreeUpload ?
                      <i>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358Z" fill="#333333" />
                          <path d="M1.22393 6.56358L6.12664 1.17043C6.33302 0.94319 6.66644 0.94319 6.87336 1.17043L11.7761 6.56358C12.0746 6.89162 12.0746 7.42535 11.7761 7.75397C11.4775 8.08201 10.9929 8.08201 10.6943 7.75397L6.49973 3.14042L2.30622 7.75397C2.0071 8.08201 1.52251 8.08201 1.22393 7.75397C0.925355 7.42535 0.925355 6.89162 1.22393 6.56358" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                      :
                      <i>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333" />
                          <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915" />
                        </svg>
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBedroomthreeUpload ? <BedroomthreeUploadResults /> : null}
              </FormGroup>

            </Row>
          </div>
          <div className='d-flex justify-content-between paganation-position'>
            <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
              <span className='align-middle d-sm-inline-block d-none'>Back</span>
            </Button>
            <Button type='submit' color='primary' className='btn-next'>
              <span className='align-middle d-sm-inline-block d-none'>Next</span>
            </Button>
          </div>
        </Form>
      </Container>

    </Fragment>
  )
}

export default Information
