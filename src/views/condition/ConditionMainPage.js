import React, { Fragment } from 'react'
import '../../assets/scss/base/condition/index.scss'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile.png'
import arrowleft from '../../assets/icons/arrowleft.svg'
import mainFooterImg1 from '../../assets/images/condition/main/Rectangle 131.png'
import mainFooterImg2 from '../../assets/images/condition/main/Rectangle 132.png'
import mainFooterImg3 from '../../assets/images/condition/main/Rectangle 133.png'
import mainFooterImg4 from '../../assets/images/condition/main/Rectangle 134.png'
import mainFooterImg5 from '../../assets/images/condition/main/Rectangle 135.png'
import footerImg1 from '../../assets/images/condition/main/footer1.png'
import footerImg2 from '../../assets/images/condition/main/footer2.png'
import footerImg3 from '../../assets/images/condition/main/footer3.png'
import footerImg4 from '../../assets/images/condition/main/footer4.png'
import footerImg5 from '../../assets/images/condition/main/footer5.png'
import starIcon from '../../assets/icons/star.svg'
import { Button, Row, Col } from 'reactstrap'

const ConditionMainPage = () => {

  return (
    <Fragment>
      <div id='conditionMainPage'>
        <div className='condition-menu'>
          <div className='condition-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='menu first-menu'>Dashboard</div>
          <div className='menu'>applications</div>
          <div className='menu'>active renovations</div>
          <div className='menu'>payments</div>
        </div>
        <div className='condition-main'>
          <div className='main-menu'>
            <div>
              <i>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.2433 10.1743L15.2783 14.2093C15.4202 14.3512 15.4998 14.5437 15.4997 14.7443C15.4997 14.945 15.4199 15.1374 15.278 15.2792C15.136 15.421 14.9436 15.5006 14.7429 15.5006C14.5423 15.5005 14.3499 15.4207 14.2081 15.2788L10.1731 11.2438C8.96686 12.1781 7.45004 12.6177 5.93118 12.4733C4.41231 12.3289 3.00551 11.6113 1.99694 10.4665C0.988381 9.3217 0.453825 7.83566 0.502021 6.31071C0.550217 4.78576 1.17754 3.33645 2.25639 2.25761C3.33523 1.17877 4.78454 0.551437 6.30949 0.503241C7.83444 0.455045 9.32048 0.989602 10.4653 1.99816C11.6101 3.00673 12.3277 4.41353 12.4721 5.9324C12.6165 7.45126 12.1768 8.96809 11.2426 10.1743H11.2433ZM6.49958 11.0001C7.69306 11.0001 8.83765 10.5259 9.68156 9.68203C10.5255 8.83812 10.9996 7.69353 10.9996 6.50005C10.9996 5.30658 10.5255 4.16199 9.68156 3.31807C8.83765 2.47416 7.69306 2.00005 6.49958 2.00005C5.30611 2.00005 4.16151 2.47416 3.3176 3.31807C2.47369 4.16199 1.99958 5.30658 1.99958 6.50005C1.99958 7.69353 2.47369 8.83812 3.3176 9.68203C4.16151 10.5259 5.30611 11.0001 6.49958 11.0001Z" fill="black"/>
              </svg>
              </i>
              <i>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_81_41)">
                <path d="M16.1897 11.814C15.5804 11.2153 14.9566 10.5954 14.9566 7.67063C14.9548 6.2604 14.4536 4.89638 13.5419 3.82047C12.6303 2.74455 11.367 2.02627 9.9762 1.793L9.94117 1.78843C10.0589 1.61667 10.1275 1.416 10.1394 1.20811C10.1514 1.00022 10.1063 0.793012 10.0091 0.608883C9.9118 0.424754 9.76606 0.270708 9.58761 0.163394C9.40916 0.0560805 9.20477 -0.000419019 8.99653 2.33965e-06C8.78829 0.000423699 8.58413 0.0577499 8.40612 0.165785C8.2281 0.27382 8.08299 0.428455 7.98648 0.612976C7.88997 0.797497 7.84573 1.00489 7.85853 1.21273C7.87134 1.42057 7.94071 1.62096 8.05914 1.79224L8.05685 1.78843C5.19839 2.26294 3.04597 4.71544 3.04216 7.67063V7.6714C3.04216 10.5961 2.41609 11.2169 1.80906 11.8148C1.44512 12.1355 1.1875 12.5595 1.0705 13.0302C0.953493 13.501 0.982653 13.9962 1.1541 14.45C1.32554 14.9038 1.63113 15.2946 2.03019 15.5704C2.42925 15.8462 2.90286 15.994 3.38795 15.9939H6.71407C6.71407 16.5999 6.9548 17.1811 7.38331 17.6096C7.81182 18.0381 8.393 18.2789 8.99901 18.2789C9.60501 18.2789 10.1862 18.0381 10.6147 17.6096C11.0432 17.1811 11.284 16.5999 11.284 15.9939H14.6124C15.0971 15.9939 15.5704 15.8463 15.9693 15.5708C16.3682 15.2953 16.6737 14.9049 16.8453 14.4515C17.017 13.9981 17.0465 13.5033 16.9301 13.0327C16.8137 12.5621 16.5568 12.1381 16.1935 11.817L16.1912 11.8148L16.1897 11.814ZM8.99901 16.8508C8.77188 16.8504 8.55417 16.76 8.39357 16.5994C8.23296 16.4388 8.14256 16.221 8.14216 15.9939H9.85662C9.85622 16.2212 9.76571 16.439 9.60494 16.5996C9.44417 16.7603 9.22627 16.8506 8.99901 16.8508ZM14.6047 14.2795H3.38871C3.25589 14.2787 3.12624 14.2388 3.016 14.1647C2.90577 14.0906 2.81986 13.9856 2.76903 13.8629C2.7182 13.7401 2.70472 13.6052 2.73028 13.4748C2.75583 13.3445 2.81928 13.2246 2.91268 13.1301C3.93329 12.1095 4.75435 11.1407 4.75435 7.66911C4.75435 6.54356 5.20147 5.46411 5.99736 4.66822C6.79324 3.87233 7.8727 3.42521 8.99825 3.42521C10.1238 3.42521 11.2033 3.87233 11.9991 4.66822C12.795 5.46411 13.2421 6.54356 13.2421 7.66911C13.2421 11.1559 14.0716 12.1171 15.0838 13.1301C15.1772 13.2246 15.2407 13.3445 15.2662 13.4748C15.2918 13.6052 15.2783 13.7401 15.2275 13.8629C15.1766 13.9856 15.0907 14.0906 14.9805 14.1647C14.8703 14.2388 14.7406 14.2787 14.6078 14.2795H14.6047Z" fill="black"/>
                <circle cx="12.5" cy="5.5" r="4" fill="#D47456" stroke="#FAF8F8"/>
                </g>
                <defs>
                <clipPath id="clip0_81_41">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              </i>
              <img src={profile} alt='profile' />
            </div>
          </div>
          <div className='btn-main-back'>
            <i>
              <img src={arrowleft} alt='arrowleft' />
            </i>
            &nbsp;&nbsp;&nbsp;
            <span>Back</span>
          </div>
          <div className='btn-main-next'>
            <span>
              Condition report
            </span>
            <Button type='button' className='btn-primary'>
              Next
            </Button>
          </div>
          <Row className='condition-mainpage px-0 mx-0'>
            <Col className='left-condition-mainpage px-0'>
                <div className='main-img'>
                  <div className='arrow-icons'>
                    <div className='icons-arrow-left'>
                      <i>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.39499 11.7557L0.165265 6.4073C-0.0550884 6.18216 -0.0550884 5.81843 0.165265 5.5927L5.39499 0.244292C5.71309 -0.0814308 6.23064 -0.0814308 6.5493 0.244292C6.8674 0.570015 6.8674 1.09866 6.5493 1.42438L2.07556 6.00029L6.5493 10.575C6.8674 10.9013 6.8674 11.43 6.5493 11.7557C6.23064 12.0814 5.71309 12.0814 5.39499 11.7557Z" fill="#121212"/>
                        </svg>
                      </i>
                    </div>
                    <div className='icons-arrow-right'>
                      <i>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.60501 0.244292L6.83474 5.5927C7.05509 5.81784 7.05509 6.18157 6.83474 6.4073L1.60501 11.7557C1.28691 12.0814 0.769361 12.0814 0.450696 11.7557C0.132596 11.43 0.132596 10.9013 0.450696 10.5756L4.92444 5.99971L0.450697 1.42497C0.132597 1.09866 0.132597 0.570015 0.450697 0.244292C0.769362 -0.081431 1.28691 -0.0814309 1.60501 0.244292Z" fill="#121212"/>
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
                <div className='left-condition-mainpage-footer'>
                  <img src={mainFooterImg1} alt='mainFooterImg1' />
                  <img src={mainFooterImg2} alt='mainFooterImg2' />
                  <img src={mainFooterImg3} alt='mainFooterImg3' />
                  <img src={mainFooterImg4} alt='mainFooterImg4' />
                  <img src={mainFooterImg5} alt='mainFooterImg5' />
                </div>
            </Col>
            <Col className='right-condition-mainpage'>
              <div>
                <h5 className='title'>Condition</h5>
              </div>
              <div className='house-product mt-3'>
                <div className='product-icons'>
                  <div className='icon-back'>
                    <i>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0605 2.90234H9.20117C8.95848 2.90234 8.76172 3.0991 8.76172 3.3418V7.58984H0.939453C0.696758 7.58984 0.5 7.7866 0.5 8.0293V15.0605C0.5 15.3032 0.696758 15.5 0.939453 15.5H15.0605C15.3032 15.5 15.5 15.3032 15.5 15.0605V3.3418C15.5 3.0991 15.3032 2.90234 15.0605 2.90234ZM9.64063 3.78125H14.6211V7.58984H9.64063V3.78125ZM1.37891 8.46875H8.76172V9.34766H1.37891V8.46875ZM1.37891 10.2266H6.41797V14.6211H1.37891V10.2266ZM7.29688 10.2266H8.76172V14.6211H7.29688V10.2266ZM9.64063 14.6211V8.46875H14.6211V14.6211H9.64063Z" fill="#9B5A28"/>
                      <path d="M0.939453 6.35938H7.38477C7.62746 6.35938 7.82422 6.16262 7.82422 5.91992V4.74805C7.82422 4.61976 7.76815 4.49788 7.67076 4.41438L5.77344 2.78812V0.939453C5.77344 0.696758 5.57668 0.5 5.33398 0.5H2.99023C2.74754 0.5 2.55078 0.696758 2.55078 0.939453V2.78812L0.653457 4.41438C0.556074 4.49788 0.5 4.61976 0.5 4.74805V5.91992C0.5 6.16262 0.696758 6.35938 0.939453 6.35938ZM3.42969 1.37891H4.89453V2.55078H3.42969V1.37891ZM1.37891 4.95017L3.1528 3.42969H5.17142L6.94531 4.95017V5.48047H1.37891V4.95017Z" fill="#9B5A28"/>
                      <path d="M10.959 4.95313C10.7163 4.95313 10.5195 5.14988 10.5195 5.39258V6.27148C10.5195 6.51418 10.7163 6.71094 10.959 6.71094C11.2017 6.71094 11.3984 6.51418 11.3984 6.27148V5.39258C11.3984 5.14988 11.2017 4.95313 10.959 4.95313Z" fill="#9B5A28"/>
                      <path d="M10.959 9.34766C10.7163 9.34766 10.5195 9.54441 10.5195 9.78711V10.666C10.5195 10.9087 10.7163 11.1055 10.959 11.1055C11.2017 11.1055 11.3984 10.9087 11.3984 10.666V9.78711C11.3984 9.54441 11.2017 9.34766 10.959 9.34766Z" fill="#9B5A28"/>
                      <path d="M5.09961 11.5449C4.85691 11.5449 4.66016 11.7417 4.66016 11.9844V12.8633C4.66016 13.106 4.85691 13.3027 5.09961 13.3027C5.34231 13.3027 5.53906 13.106 5.53906 12.8633V11.9844C5.53906 11.7417 5.34231 11.5449 5.09961 11.5449Z" fill="#9B5A28"/>
                    </svg>
                    </i>
                  </div>
                  <span className='active'>Overall</span>
                </div>
                <div className='product-notify'>
                  <h6 className='icon-warning notify-icon one'>3</h6>
                </div>
              </div>
              <div className='house-product-solid mt-3'></div>
              <div className='house-product mt-3'>
                <div className='product-icons'>
                  <div className='icon-back'>
                    <i>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1V0.5C0.723858 0.5 0.5 0.723858 0.5 1H1ZM1 17H0.5C0.5 17.2761 0.723858 17.5 1 17.5V17ZM4.65079 4.87597L4.30142 4.51828L4.65079 4.87597ZM6.84127 11.2946L7.19064 10.9369C7.18547 10.9318 7.18018 10.9269 7.17479 10.9221L6.84127 11.2946ZM17 17V17.5C17.2761 17.5 17.5 17.2761 17.5 17H17ZM17 1H17.5C17.5 0.723858 17.2761 0.5 17 0.5V1ZM10.3333 6.3385L9.99981 6.71101L10.3333 6.3385ZM0.5 1V4.47287H1.5V1H0.5ZM4.55556 0.5H1V1.5H4.55556V0.5ZM1.34937 4.83056L4.90493 1.35769L4.20619 0.642312L0.65063 4.11518L1.34937 4.83056ZM0.5 4.47287V8.44186H1.5V4.47287H0.5ZM6.93667 2.62681L4.90493 0.642312L4.20619 1.35769L6.23793 3.34218L6.93667 2.62681ZM0.5 8.44186V12.7209H1.5V8.44186H0.5ZM0.5 12.7209V17H1.5V12.7209H0.5ZM1.34937 8.79955L5.00016 5.23366L4.30142 4.51828L0.65063 8.08417L1.34937 8.79955ZM5.00016 5.23366L6.93667 3.34218L6.23793 2.62681L4.30142 4.51828L5.00016 5.23366ZM7.19064 6.65782L5.00016 4.51828L4.30142 5.23366L6.4919 7.37319L7.19064 6.65782ZM1.34937 13.0786L4.90493 9.60575L4.20619 8.89037L0.65063 12.3632L1.34937 13.0786ZM4.90493 9.60575L7.19064 7.37319L6.4919 6.65782L4.20619 8.89037L4.90493 9.60575ZM7.17479 10.9221L4.88908 8.87555L4.22203 9.62057L6.50775 11.6671L7.17479 10.9221ZM1 17.5H7.98413V16.5H1V17.5ZM1.34937 17.3577L4.84143 13.9468L4.14269 13.2315L0.65063 16.6423L1.34937 17.3577ZM4.84143 13.9468L7.19064 11.6523L6.4919 10.9369L4.14269 13.2315L4.84143 13.9468ZM8.3335 16.6423L4.84143 13.2315L4.14269 13.9468L7.63476 17.3577L8.3335 16.6423ZM12.6825 17.5H17V16.5H12.6825V17.5ZM6.4919 11.6523L10.1427 15.2182L10.8414 14.5028L7.19064 10.9369L6.4919 11.6523ZM10.1427 15.2182L12.3332 17.3577L13.0319 16.6423L10.8414 14.5028L10.1427 15.2182ZM12.3332 12.3632L10.1427 14.5028L10.8414 15.2182L13.0319 13.0786L12.3332 12.3632ZM13.0319 13.0786L17.3494 8.86156L16.6506 8.14619L12.3332 12.3632L13.0319 13.0786ZM17.5 17V12.7829H16.5V17H17.5ZM17.5 12.7829V8.50388H16.5V12.7829H17.5ZM13.0319 17.3577L17.3494 13.1406L16.6506 12.4253L12.3332 16.6423L13.0319 17.3577ZM10.1427 10.9391L12.3332 13.0786L13.0319 12.3632L10.8414 10.2237L10.1427 10.9391ZM17.5 8.50388V4.22481H16.5V8.50388H17.5ZM17.5 4.22481V1H16.5V4.22481H17.5ZM10.8414 10.9391L13.0319 8.79955L12.3332 8.08417L10.1427 10.2237L10.8414 10.9391ZM13.0319 8.79955L17.3494 4.58249L16.6506 3.86712L12.3332 8.08417L13.0319 8.79955ZM6.25378 3.357L9.99981 6.71101L10.6669 5.96599L6.92083 2.61199L6.25378 3.357ZM9.99981 6.71101L12.349 8.81437L13.0161 8.06935L10.6669 5.96599L9.99981 6.71101ZM17 0.5H15.7989V1.5H17V0.5ZM10.6827 6.69619L16.1483 1.35769L15.4496 0.642312L9.98396 5.98081L10.6827 6.69619ZM8.65063 1.35769L11.9522 4.58249L12.651 3.86712L9.34937 0.642312L8.65063 1.35769ZM7.98413 17.5H12.6825V16.5H7.98413V17.5ZM6.4919 7.37319L10.1427 10.9391L10.8414 10.2237L7.19064 6.65782L6.4919 7.37319ZM15.7989 0.5H4.55556V1.5H15.7989V0.5Z" fill="#9B5A28"/>
                    </svg>
                    </i>
                  </div>
                  <span>Flooring</span>
                </div>
                <div className='product-notify'>
                  <h6 className='icon-warning notify-icon'>2</h6>
                </div>
              </div>
              <div className='house-product mt-3'>
                <div className='product-icons'>
                  <div className='icon-back'>
                    <i>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" stroke="#9B5A28"/>
                      <rect x="0.5" y="0.5" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="5.55273" y="0.5" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="3.02637" y="3.5" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="0.5" y="6.50012" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="0.5" y="12.5002" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="5.55273" y="6.50012" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="5.55273" y="12.5002" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="10.6055" y="6.50012" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="10.6055" y="12.5002" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="8.0791" y="9.50024" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="3.02637" y="9.50024" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="0.5" y="9.50024" width="2.36842" height="3" stroke="#9B5A28"/>
                      <rect x="13.1318" y="9.50024" width="2.36842" height="3" stroke="#9B5A28"/>
                      <rect x="13.1318" y="3.5" width="2.36842" height="3" stroke="#9B5A28"/>
                      <rect x="0.5" y="3.5" width="2.36842" height="3" stroke="#9B5A28"/>
                      <rect x="10.6055" y="0.5" width="4.89474" height="3" stroke="#9B5A28"/>
                      <rect x="8.0791" y="3.5" width="4.89474" height="3" stroke="#9B5A28"/>
                    </svg>
                    </i>
                  </div>
                  <span>Walls</span>
                </div>
                <div className='product-notify'>
                  <h6 className='icon-green notify-icon'>3</h6>
                </div>
              </div>
              <div className='house-product mt-3'>
                <div className='product-icons'>
                  <div className='icon-back'>
                    <i>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.15 15.4002C17.15 15.0642 16.899 14.7966 16.5786 14.7319L16.5786 11.1336L16.5786 11.1334C16.5752 8.24418 14.0697 5.92007 11.0002 5.91691H11H8.14286C8.05799 5.91691 8.00714 5.8551 8.00714 5.80024V3.26862C8.32759 3.20393 8.57857 2.93625 8.57857 2.60024V1.53358C8.57857 1.1466 8.24566 0.850244 7.85714 0.850244H1.57143C1.18291 0.850244 0.85 1.1466 0.85 1.53358V2.60024C0.85 2.93625 1.10098 3.20393 1.42143 3.26862L1.42143 6.86691L1.42143 6.86709C1.42484 9.75631 3.93027 12.0804 6.99985 12.0836H7H9.85714C9.94201 12.0836 9.99286 12.1454 9.99286 12.2002V14.7319C9.67241 14.7966 9.42143 15.0642 9.42143 15.4002V16.4669C9.42143 16.8539 9.75434 17.1502 10.1429 17.1502H16.4286C16.8171 17.1502 17.15 16.8539 17.15 16.4669V15.4002ZM1.72143 1.68358H7.70714V2.45024H1.72143V1.68358ZM9.85714 11.2502H7.00016C4.3917 11.2475 2.29574 9.27701 2.29286 6.86673L2.29286 3.28358H7.13571V5.80024C7.13571 6.33449 7.59654 6.75024 8.14286 6.75024H10.9998C13.6083 6.75296 15.7043 8.72348 15.7071 11.1338V14.7169H10.8643V12.2002C10.8643 11.666 10.4035 11.2502 9.85714 11.2502ZM10.2929 16.3169V15.5502H16.2786V16.3169H10.2929Z" fill="#9B5A28" stroke="#9B5A28" strokeWidth="0.3"/>
                    </svg>
                    </i>
                  </div>
                  <span>Plumbing</span>
                </div>
                <div className='product-notify'>
                  <h6 className='icon-red notify-icon'>1</h6>
                </div>
              </div>
              <div className='house-product mt-3'>
                <div className='product-icons'>
                  <div className='icon-back'>
                    <i>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1336 6.62344C13.089 6.52571 13.0174 6.44278 12.9272 6.38447C12.837 6.32616 12.7319 6.29489 12.6245 6.29437H8.25109L10.1186 1.32187C10.1504 1.23687 10.1611 1.14543 10.1498 1.05538C10.1386 0.96533 10.1058 0.879333 10.0541 0.804729C10.0024 0.730126 9.93347 0.669132 9.85312 0.626952C9.77277 0.584772 9.6834 0.562659 9.59265 0.5625H5.0589C4.95039 0.562969 4.84433 0.594815 4.7535 0.654199C4.66268 0.713584 4.59097 0.797971 4.54703 0.897188L0.862652 9.20813C0.824803 9.29357 0.808838 9.3871 0.816202 9.48027C0.823566 9.57343 0.854026 9.66329 0.90483 9.74173C0.955634 9.82017 1.02518 9.88472 1.10719 9.92953C1.18919 9.97435 1.28107 9.99803 1.37453 9.99844H5.1714L4.3839 12.96L3.38265 16.7316C3.34961 16.8547 3.35941 16.9855 3.41044 17.1024C3.46146 17.2192 3.55069 17.3153 3.66349 17.3748C3.77629 17.4343 3.90595 17.4537 4.03123 17.4299C4.15651 17.406 4.26995 17.3403 4.35296 17.2434L13.0464 7.22531C13.1171 7.1439 13.1629 7.04388 13.1783 6.93717C13.1938 6.83047 13.1783 6.72156 13.1336 6.62344ZM5.09546 14.6728L6.43703 9.57938C6.45007 9.52032 6.4548 9.45974 6.45109 9.39937C6.44179 9.25662 6.37845 9.12277 6.27395 9.02506C6.16945 8.92735 6.03165 8.87313 5.88859 8.87344H2.23234L5.42734 1.6875H8.77984L6.91234 6.66C6.88049 6.74523 6.8698 6.83692 6.88117 6.92719C6.89255 7.01747 6.92565 7.10363 6.97764 7.1783C7.02963 7.25297 7.09896 7.31391 7.17968 7.3559C7.2604 7.39789 7.3501 7.41967 7.44109 7.41937H11.3786L5.09546 14.6728Z" fill="#9B5A28"/>
                    </svg>
                    </i>
                  </div>
                  <span>Electrical</span>
                </div>
                <div className='product-notify'>
                  <h6 className='icon-red notify-icon'>1</h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='condition-footer'>
          <div className='footer-img'>
            <span className='title'>Kitchen</span>
            <img src={footerImg1} alt='footerImg1' />
            <div className='footer-icons'>
              <div className='star-icon'>
                <div className='footer-star-back'>
                  <img src={starIcon} alt='starIcon' />
                </div>
                <span>Overall</span>
              </div>
              <h6 className='icon-green condition-footer-icon'>3</h6>
            </div>
          </div>
          <div className='footer-img'>
            <span className='title'>Bedroom 1</span>
            <img src={footerImg2} alt='footerImg2' />
            <div className='footer-icons'>
              <div className='star-icon'>
                <div className='footer-star-back'>
                  <img src={starIcon} alt='starIcon' />
                </div>
                <span>Overall</span>
              </div>
              <h6 className='icon-warning condition-footer-icon'>2</h6>
            </div>
          </div>
          <div className='footer-img'>
            <span className='title'>Bedroom 2</span>
            <img src={footerImg3} alt='footerImg3' />
            <div className='footer-icons'>
              <div className='star-icon'>
                <div className='footer-star-back'>
                  <img src={starIcon} alt='starIcon' />
                </div>
                <span>Overall</span>
              </div>
              <h6 className='icon-red condition-footer-icon'>1</h6>
            </div>
          </div>
          <div className='footer-img'>
            <span className='title'>Bathroom 1</span>
            <img src={footerImg4} alt='footerImg4' />
            <div className='footer-icons'>
              <div className='star-icon'>
                <div className='footer-star-back'>
                  <img src={starIcon} alt='starIcon' />
                </div>
                <span>Overall</span>
              </div>
              <h6 className='icon-green condition-footer-icon'>3</h6>
            </div>
          </div>
          <div className='footer-img'>
            <span className='title'>Bathroom 2</span>
            <img src={footerImg5} alt='footerImg5' />
            <div className='footer-icons'>
              <div className='star-icon'>
                <div className='footer-star-back'>
                  <img src={starIcon} alt='starIcon' />
                </div>
                <span>Overall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ConditionMainPage
