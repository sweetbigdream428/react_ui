import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Container, Button } from 'reactstrap'
// import SwiperGallery from './Gallery'
import kichensIcon from '../../../assets/icons/kichens.svg'
import bedroomsIcon from '../../../assets/icons/bedrooms.svg'
import bathroomsIcon from '../../../assets/icons/bathrooms.svg'
import diningroomsIcon from '../../../assets/icons/diningrooms.svg'
import livingroomsIcon from '../../../assets/icons/livingrooms.svg'
import exteriorIcon from '../../../assets/icons/exterior.svg'
import mainImg from '../../../assets/images/condition/Rectangle 181.png'
import footerImg1 from '../../../assets/images/condition/Rectangle 170.png'
import footerImg2 from '../../../assets/images/condition/Rectangle 171.png'
import footerImg3 from '../../../assets/images/condition/Rectangle 172.png'
import footerImg4 from '../../../assets/images/condition/Rectangle 173.png'


const ConditionPage = ({ stepper, type }) => {

  const onSubmit = () => {
    // trigger()
    // if (isObjEmpty(errors)) {
      stepper.next()
    // }
  }
  const { handleSubmit } = useForm()

  return (
    <Fragment>
      <div className='content-header'>
      </div>
      <Container id='conditionAddr'>
        <Form onSubmit={handleSubmit(onSubmit)} className='form-house-address'>
          <h3 className='conditionpage-title'>Condition report</h3>
          <div className='building'>
            <div className='left-building'>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={kichensIcon} alt='kichensIcon' />
                        <span>Kitchen</span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-warning room-icon'>3</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
                        <span>Bedroom 1 </span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-red room-icon'>2</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
                        <span>Bedroom 2</span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-warning room-icon'>3</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
                        <span>Bathroom 1 </span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-red room-icon'>2</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
                        <span>Bathroom 2 </span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-green room-icon'>4</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={diningroomsIcon} alt='diningroomsIcon' />
                        <span>Dining room </span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-red room-icon'>2</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={livingroomsIcon} alt='livingroomsIcon' />
                        <span>Living Room </span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-warning room-icon'>3</h6>
                    </div>
                </div>
                <div className='building-room'>
                    <div className='room-icon'>
                        <img src={exteriorIcon} alt='exteriorIcon' />
                        <span>Exterior</span>
                    </div>
                    <div className='room-notify'>
                        <span>Overall</span>
                        <h6 className='icon-red room-icon'>1</h6>
                    </div>
                </div>
            </div>
            <div className='right-building'>
                <div className='right-building-header'>
                    <div className='header-icon'>
                        <i>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1V0.5C0.723858 0.5 0.5 0.723858 0.5 1H1ZM1 17H0.5C0.5 17.2761 0.723858 17.5 1 17.5V17ZM4.65079 4.87597L4.30142 4.51828L4.65079 4.87597ZM6.84127 7.0155L7.19064 6.65782L6.84127 7.0155ZM6.84127 11.2946L7.19064 10.9369C7.18547 10.9318 7.18018 10.9269 7.17479 10.9221L6.84127 11.2946ZM4.49206 13.5891L4.14269 13.2315L4.49206 13.5891ZM17 17V17.5C17.2761 17.5 17.5 17.2761 17.5 17H17ZM10.4921 14.8605L10.1427 15.2182L10.4921 14.8605ZM12.6825 12.7209L13.0319 13.0786L12.6825 12.7209ZM10.4921 10.5814L10.1427 10.9391L10.4921 10.5814ZM17 1H17.5C17.5 0.723858 17.2761 0.5 17 0.5V1ZM12.6825 8.44186L13.0319 8.79955L12.6825 8.44186ZM10.3333 6.3385L9.99981 6.71101L10.3333 6.3385ZM0.5 1V4.47287H1.5V1H0.5ZM4.55556 0.5H1V1.5H4.55556V0.5ZM1.34937 4.83056L4.90493 1.35769L4.20619 0.642312L0.65063 4.11518L1.34937 4.83056ZM0.5 4.47287V8.44186H1.5V4.47287H0.5ZM6.93667 2.62681L4.90493 0.642312L4.20619 1.35769L6.23793 3.34218L6.93667 2.62681ZM0.5 8.44186V12.7209H1.5V8.44186H0.5ZM0.5 12.7209V17H1.5V12.7209H0.5ZM1.34937 8.79955L5.00016 5.23366L4.30142 4.51828L0.65063 8.08417L1.34937 8.79955ZM5.00016 5.23366L6.93667 3.34218L6.23793 2.62681L4.30142 4.51828L5.00016 5.23366ZM7.19064 6.65782L5.00016 4.51828L4.30142 5.23366L6.4919 7.37319L7.19064 6.65782ZM1.34937 13.0786L4.90493 9.60575L4.20619 8.89037L0.65063 12.3632L1.34937 13.0786ZM4.90493 9.60575L7.19064 7.37319L6.4919 6.65782L4.20619 8.89037L4.90493 9.60575ZM7.17479 10.9221L4.88908 8.87555L4.22203 9.62057L6.50775 11.6671L7.17479 10.9221ZM1 17.5H7.98413V16.5H1V17.5ZM1.34937 17.3577L4.84143 13.9468L4.14269 13.2315L0.65063 16.6423L1.34937 17.3577ZM4.84143 13.9468L7.19064 11.6523L6.4919 10.9369L4.14269 13.2315L4.84143 13.9468ZM8.3335 16.6423L4.84143 13.2315L4.14269 13.9468L7.63476 17.3577L8.3335 16.6423ZM12.6825 17.5H17V16.5H12.6825V17.5ZM6.4919 11.6523L10.1427 15.2182L10.8414 14.5028L7.19064 10.9369L6.4919 11.6523ZM10.1427 15.2182L12.3332 17.3577L13.0319 16.6423L10.8414 14.5028L10.1427 15.2182ZM12.3332 12.3632L10.1427 14.5028L10.8414 15.2182L13.0319 13.0786L12.3332 12.3632ZM13.0319 13.0786L17.3494 8.86156L16.6506 8.14619L12.3332 12.3632L13.0319 13.0786ZM17.5 17V12.7829H16.5V17H17.5ZM17.5 12.7829V8.50388H16.5V12.7829H17.5ZM13.0319 17.3577L17.3494 13.1406L16.6506 12.4253L12.3332 16.6423L13.0319 17.3577ZM10.1427 10.9391L12.3332 13.0786L13.0319 12.3632L10.8414 10.2237L10.1427 10.9391ZM17.5 8.50388V4.22481H16.5V8.50388H17.5ZM17.5 4.22481V1H16.5V4.22481H17.5ZM10.8414 10.9391L13.0319 8.79955L12.3332 8.08417L10.1427 10.2237L10.8414 10.9391ZM13.0319 8.79955L17.3494 4.58249L16.6506 3.86712L12.3332 8.08417L13.0319 8.79955ZM6.25378 3.357L9.99981 6.71101L10.6669 5.96599L6.92083 2.61199L6.25378 3.357ZM9.99981 6.71101L12.349 8.81437L13.0161 8.06935L10.6669 5.96599L9.99981 6.71101ZM17 0.5H15.7989V1.5H17V0.5ZM10.6827 6.69619L16.1483 1.35769L15.4496 0.642312L9.98396 5.98081L10.6827 6.69619ZM8.65063 1.35769L11.9522 4.58249L12.651 3.86712L9.34937 0.642312L8.65063 1.35769ZM7.98413 17.5H12.6825V16.5H7.98413V17.5ZM6.4919 7.37319L10.1427 10.9391L10.8414 10.2237L7.19064 6.65782L6.4919 7.37319ZM15.7989 0.5H4.55556V1.5H15.7989V0.5Z" fill="#302D2D" fillOpacity="0.6"/>
                        </svg>
                        </i>
                        <span>Flooring</span>
                        <h6 className='icon-warning room-icon'>2</h6>
                        <div className='header-icon-solid'></div>
                    </div>
                    <div className='header-icon'>
                        <i>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4286 14.8669V11.1335C16.4253 8.33658 13.9967 6.06997 11 6.06688H8.14286C7.98506 6.06688 7.85714 5.94749 7.85714 5.80021V3.13355C8.17273 3.13355 8.42857 2.89477 8.42857 2.60021V1.53355C8.42857 1.239 8.17273 1.00021 7.85714 1.00021H1.57143C1.25584 1.00021 1 1.239 1 1.53355V2.60021C1 2.89477 1.25584 3.13355 1.57143 3.13355V6.86688C1.57474 9.66384 4.00325 11.9305 7 11.9335H9.85714C10.0149 11.9335 10.1429 12.0529 10.1429 12.2002V14.8669C9.82727 14.8669 9.57143 15.1057 9.57143 15.4002V16.4669C9.57143 16.7614 9.82727 17.0002 10.1429 17.0002H16.4286C16.7442 17.0002 17 16.7614 17 16.4669V15.4002C17 15.1057 16.7442 14.8669 16.4286 14.8669ZM1.57143 1.53355H7.85714V2.60021H1.57143V1.53355ZM9.85714 11.4002H7C4.31871 11.3974 2.14585 9.36941 2.14286 6.86688V3.13355H7.28571V5.80021C7.28571 6.24204 7.66947 6.60021 8.14286 6.60021H11C13.6813 6.60301 15.8542 8.63101 15.8571 11.1335V14.8669H10.7143V12.2002C10.7143 11.7584 10.3305 11.4002 9.85714 11.4002ZM10.1429 16.4669V15.4002H16.4286V16.4669H10.1429Z" fill="#302D2D" fillOpacity="0.6"/>
                            <path d="M17.15 15.4002C17.15 15.0642 16.899 14.7965 16.5786 14.7318L16.5786 11.1335L16.5786 11.1334C16.5752 8.24415 14.0697 5.92004 11.0002 5.91688H11H8.14286C8.05799 5.91688 8.00714 5.85507 8.00714 5.80021V3.26859C8.32759 3.2039 8.57857 2.93622 8.57857 2.60021V1.53355C8.57857 1.14657 8.24566 0.850214 7.85714 0.850214H1.57143C1.18291 0.850214 0.85 1.14657 0.85 1.53355V2.60021C0.85 2.93622 1.10098 3.2039 1.42143 3.26859L1.42143 6.86688L1.42143 6.86706C1.42484 9.75628 3.93027 12.0804 6.99985 12.0835H7H9.85714C9.94201 12.0835 9.99286 12.1454 9.99286 12.2002V14.7318C9.67241 14.7965 9.42143 15.0642 9.42143 15.4002V16.4669C9.42143 16.8539 9.75434 17.1502 10.1429 17.1502H16.4286C16.8171 17.1502 17.15 16.8539 17.15 16.4669V15.4002ZM1.72143 1.68355H7.70714V2.45021H1.72143V1.68355ZM9.85714 11.2502H7.00016C4.3917 11.2475 2.29574 9.27698 2.29286 6.8667L2.29286 3.28355H7.13571V5.80021C7.13571 6.33446 7.59654 6.75021 8.14286 6.75021H10.9998C13.6083 6.75293 15.7043 8.72345 15.7071 11.1337V14.7169H10.8643V12.2002C10.8643 11.666 10.4035 11.2502 9.85714 11.2502ZM10.2929 16.3169V15.5502H16.2786V16.3169H10.2929Z" stroke="#302D2D" strokeOpacity="0.6" strokeWidth="0.3"/>
                        </svg>
                        </i>
                        <span>Plumbing</span>
                        <h6 className='icon-warning room-icon'>2</h6>
                        <div className='header-icon-solid'></div>
                    </div>
                    <div className='header-icon'>
                        <i>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="15" height="15" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="0.5" y="0.5" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="5.55273" y="0.5" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="3.02637" y="3.50006" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="0.5" y="6.50012" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="0.5" y="12.5002" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="5.55273" y="6.50012" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="5.55273" y="12.5002" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="10.6055" y="6.50012" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="10.6055" y="12.5002" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="8.0791" y="9.50018" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="3.02637" y="9.50018" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="0.5" y="9.50018" width="2.36842" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="13.1318" y="9.50018" width="2.36842" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="13.1318" y="3.50006" width="2.36842" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="0.5" y="3.50006" width="2.36842" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="10.6055" y="0.5" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                            <rect x="8.0791" y="3.50006" width="4.89474" height="3" stroke="#302D2D" strokeOpacity="0.6"/>
                        </svg>
                        </i>
                        <span>Walls</span>
                        <h6 className='icon-green room-icon'>3</h6>
                        <div className='header-icon-solid'></div>
                    </div>
                    <div className='header-icon'>
                        <i>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1336 6.62344C13.089 6.52571 13.0174 6.44278 12.9272 6.38447C12.837 6.32616 12.7319 6.29489 12.6245 6.29437H8.25109L10.1186 1.32187C10.1504 1.23687 10.1611 1.14543 10.1498 1.05538C10.1386 0.96533 10.1058 0.879333 10.0541 0.804729C10.0024 0.730126 9.93347 0.669132 9.85312 0.626952C9.77277 0.584772 9.6834 0.562659 9.59265 0.5625H5.0589C4.95039 0.562969 4.84433 0.594815 4.7535 0.654199C4.66268 0.713584 4.59097 0.797971 4.54703 0.897188L0.862652 9.20813C0.824803 9.29357 0.808838 9.3871 0.816202 9.48027C0.823566 9.57343 0.854026 9.66329 0.90483 9.74173C0.955634 9.82017 1.02518 9.88472 1.10719 9.92953C1.18919 9.97435 1.28107 9.99803 1.37453 9.99844H5.1714L4.3839 12.96L3.38265 16.7316C3.34961 16.8547 3.35941 16.9855 3.41044 17.1024C3.46146 17.2192 3.55069 17.3153 3.66349 17.3748C3.77629 17.4343 3.90595 17.4537 4.03123 17.4299C4.15651 17.406 4.26995 17.3403 4.35296 17.2434L13.0464 7.22531C13.1171 7.1439 13.1629 7.04388 13.1783 6.93717C13.1938 6.83047 13.1783 6.72156 13.1336 6.62344ZM5.09546 14.6728L6.43703 9.57938C6.45007 9.52032 6.4548 9.45974 6.45109 9.39937C6.44179 9.25662 6.37845 9.12277 6.27395 9.02506C6.16945 8.92735 6.03165 8.87313 5.88859 8.87344H2.23234L5.42734 1.6875H8.77984L6.91234 6.66C6.88049 6.74523 6.8698 6.83692 6.88117 6.92719C6.89255 7.01747 6.92565 7.10363 6.97764 7.1783C7.02963 7.25297 7.09896 7.31391 7.17968 7.3559C7.2604 7.39789 7.3501 7.41967 7.44109 7.41937H11.3786L5.09546 14.6728Z" fill="#302D2D" fillOpacity="0.6"/>
                        </svg>
                        </i>
                        <span>Electrical</span>
                    </div>
                </div>
                <div className='right-building-main'>
                    <div className='main-img'>
                        <img src={mainImg} alt='mainImg' />
                    </div>
                    <div className='footer-img'>
                        <img src={footerImg1} alt='footerImg1' />
                        <img src={footerImg2} alt='footerImg2' />
                        <img src={footerImg3} alt='footerImg3' />
                        <img src={footerImg4} alt='footerImg4' />
                    </div>
                </div>
            </div>
          </div>
          
          <div className='paganation-position'>
            <div className='buttons'>
                <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
                    <span className='align-middle d-sm-inline-block d-none'>Back</span>
                </Button>
                <Button color='primary' className='btn-next'>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                </Button>
            </div>
          </div>
        </Form>
      </Container>
    </Fragment>
  )
}

export default ConditionPage
