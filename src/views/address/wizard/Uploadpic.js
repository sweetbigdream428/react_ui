import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import ImageUploading from 'react-images-uploading'
import { Form, Button, Container, FormGroup, Row } from 'reactstrap'
import arrowupIcon from '../../../assets/icons/arrowdown.svg'
import arrowdownIcon from '../../../assets/icons/arrowup.svg'
import completecheck from '../../../assets/icons/completecheck.svg'
import kichensIcon from '../../../assets/icons/kichens.svg'
import bedroomsIcon from '../../../assets/icons/bedrooms.svg'
import bathroomsIcon from '../../../assets/icons/bathrooms.svg'
import diningroomsIcon from '../../../assets/icons/diningrooms.svg'
import livingroomsIcon from '../../../assets/icons/livingrooms.svg'
import exteriorIcon from '../../../assets/icons/exterior.svg'


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
  const [diningroomImages, setDiningroomImages] = useState([]);
  const [showDiningroomUpload, setShowDiningroomUpload] = useState(false)
  const [livingroomImages, setLivingroomImages] = useState([]);
  const [showLivingroomUpload, setShowLivingroomUpload] = useState(false)
  const [exteriorImages, setExteriorImages] = useState([]);
  const [showExteriorUpload, setShowExteriorUpload] = useState(false)
  
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

  // Diningroom
  function onClickDiningroom() {
    if (showDiningroomUpload) {
      setShowDiningroomUpload(false)
    }
    else {
      setShowDiningroomUpload(true)
    }
  }

  const DiningroomUploadResults = () => (
    <ImageUploading
      multiple
      value={diningroomImages}
      onChange={onChangeDiningroom}
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

  const onChangeDiningroom = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setDiningroomImages(imageList);
  };


  // Livingroom
  function onClickLivingroom() {
    if (showLivingroomUpload) {
      setShowLivingroomUpload(false)
    }
    else {
      setShowLivingroomUpload(true)
    }
  }

  const LivingroomUploadResults = () => (
    <ImageUploading
      multiple
      value={livingroomImages}
      onChange={onChangeLivingroom}
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

  const onChangeLivingroom = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setLivingroomImages(imageList);
  };

  // Exterior: 
  function onClickExterior() {
    if (showExteriorUpload) {
      setShowExteriorUpload(false)
    }
    else {
      setShowExteriorUpload(true)
    }
  }

  const ExteriorUploadResults = () => (
    <ImageUploading
      multiple
      value={exteriorImages}
      onChange={onChangeExterior}
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

  const onChangeExterior = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setExteriorImages(imageList);
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
                        <img src={kichensIcon} alt='' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      : 
                      <i>
                        { 
                        kitchenImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />
                        }
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
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        bathroomoneImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
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
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        bathroomtwoImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
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
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        bedroomoneImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
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
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        bedroomtwoImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
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
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
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
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        bedroomthreeImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
                      </i>
                    }
                  </div>
                </FormGroup>
                {showBedroomthreeUpload ? <BedroomthreeUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={diningroomsIcon} alt='diningroomsIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Dining room 
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickDiningroom()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showDiningroomUpload ?
                      <i>
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        diningroomImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
                      </i>
                    }
                  </div>
                </FormGroup>
                {showDiningroomUpload ? <DiningroomUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={livingroomsIcon} alt='livingroomsIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Living Room
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickLivingroom()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showLivingroomUpload ?
                      <i>
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        livingroomImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
                      </i>
                    }
                  </div>
                </FormGroup>
                {showLivingroomUpload ? <LivingroomUploadResults /> : null}
              </FormGroup>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={exteriorIcon} alt='exteriorIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Exterior:
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickExterior()}>
                    <span className='info-form-val-text'></span>
                    &nbsp;&nbsp;
                    {showExteriorUpload ?
                      <i>
                        <img src={arrowdownIcon} alt='icon' />
                      </i>
                      :
                      <i>
                        { 
                        exteriorImages.length === 0 ? 
                        <img src={arrowupIcon} alt='icon' />
                        : 
                        <img src={completecheck} alt='icon' />   
                        }
                      </i>
                    }
                  </div>
                </FormGroup>
                {showExteriorUpload ? <ExteriorUploadResults /> : null}
              </FormGroup>
            </Row>
          </div>
          <div className='paganation-position'>
            <div className='buttons'>
              <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
                <span className='align-middle d-sm-inline-block d-none'>Back</span>
              </Button>
              <Button type='submit' color='primary' className='btn-next'>
                <span className='align-middle d-sm-inline-block d-none'>Next</span>
              </Button>
            </div>
          </div>
        </Form>
      </Container>

    </Fragment>
  )
}

export default Information
