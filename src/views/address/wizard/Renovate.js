import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, Container, Input, Col } from 'reactstrap'

const Renovate = ({ stepper, type }) => {

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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container id='renovateAddr' className='row'>
                <h3 className='info-content-title text-center mb-5'>What are you looking to renovate?</h3>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4402 14.4422L11.5461 14.548L11.6521 14.4422L21.787 4.33025C22.2245 3.89382 22.9338 3.89382 23.3712 4.33025C23.8084 4.76649 23.8084 5.47363 23.3712 5.90988L11.5461 17.7082L6.77705 12.9499C6.33982 12.5136 6.33982 11.8065 6.77705 11.3702C7.21447 10.9338 7.92381 10.9338 8.36123 11.3702L11.4402 14.4422ZM23.1611 14.0962C23.2416 13.4582 23.7534 12.9501 24.3752 12.9501C25.0057 12.9501 25.5057 13.4585 25.4449 14.0632C24.8045 20.4331 19.3752 25.4501 12.829 25.4501C5.85559 25.4501 0.15 19.7569 0.15 12.8001C0.15 5.84322 5.85559 0.150061 12.829 0.150061C13.7658 0.150061 14.7046 0.272897 15.6225 0.47289C16.4475 0.652641 16.7111 1.67489 16.0929 2.29174C15.7951 2.58886 15.3551 2.69986 14.9297 2.61326C14.2636 2.47766 13.5794 2.41006 12.829 2.41006C7.10175 2.41006 2.41581 7.0849 2.41581 12.8001C2.41581 18.5152 7.10175 23.1901 12.829 23.1901C18.117 23.1901 22.5166 19.2053 23.1611 14.0962Z" fill="#4A7558" stroke="white" strokeWidth="0.3"/>
                                    </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Select all
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $105,000
                            </span>                        
                        </div>
                    </div>            
                </Col>  
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7457 10.326C19.6505 10.0382 19.3813 9.84371 19.0781 9.84371H4.92191C4.61868 9.84371 4.3497 10.0382 4.25431 10.326L0.0355732 23.076C-0.0352882 23.2902 0.00096646 23.5255 0.133168 23.7086C0.26537 23.8915 0.477405 23.9999 0.703173 23.9999H23.2968C23.5226 23.9999 23.7346 23.8915 23.8668 23.7086C23.999 23.5255 24.0353 23.2902 23.9644 23.076L19.7457 10.326ZM19.9815 15.5156H12.7031V11.25H18.5702L19.9815 15.5156ZM5.42984 11.25H11.2969V15.5156H4.01847L5.42984 11.25ZM3.5532 16.9218H11.2969V22.5937H1.67637L3.5532 16.9218ZM12.7031 22.5937V16.9218H20.4468L22.3236 22.5937H12.7031Z" fill="#4A7558"/>
                                    <path d="M15.5157 6.3281C15.5157 6.71646 15.8304 7.03122 16.2188 7.03122C16.6072 7.03122 16.9219 6.71646 16.9219 6.3281C16.9219 5.16502 17.8682 4.21873 19.0313 4.21873C19.4197 4.21873 19.7344 3.90397 19.7344 3.51561C19.7344 3.12724 19.4197 2.81249 19.0313 2.81249C17.8682 2.81249 16.9219 1.8662 16.9219 0.703122C16.9219 0.314757 16.6072 0 16.2188 0C15.8304 0 15.5157 0.314757 15.5157 0.703122C15.5157 1.8662 14.5694 2.81249 13.4063 2.81249C13.018 2.81249 12.7032 3.12724 12.7032 3.51561C12.7032 3.90397 13.018 4.21873 13.4063 4.21873C14.5694 4.21873 15.5157 5.16502 15.5157 6.3281ZM16.2188 2.81029C16.4195 3.07744 16.6572 3.31511 16.9241 3.51561C16.657 3.71629 16.4195 3.95396 16.2188 4.22093C16.0183 3.95378 15.7806 3.71629 15.5135 3.51561C15.7806 3.31511 16.0183 3.07744 16.2188 2.81029Z" fill="#4A7558"/>
                                    <path d="M4.96885 5.62498C6.13193 5.62498 7.07822 6.57126 7.07822 7.73434C7.07822 8.12271 7.39297 8.43746 7.78134 8.43746C8.1697 8.43746 8.48446 8.12271 8.48446 7.73434C8.48446 6.57126 9.43075 5.62498 10.5938 5.62498C10.9822 5.62498 11.2969 5.31022 11.2969 4.92185C11.2969 4.53349 10.9822 4.21873 10.5938 4.21873C9.43075 4.21873 8.48446 3.27245 8.48446 2.10937C8.48446 1.721 8.1697 1.40624 7.78134 1.40624C7.39297 1.40624 7.07822 1.721 7.07822 2.10937C7.07822 3.27245 6.13193 4.21873 4.96885 4.21873C4.58049 4.21873 4.26573 4.53349 4.26573 4.92185C4.26573 5.31022 4.58049 5.62498 4.96885 5.62498ZM7.78134 4.21653C7.98202 4.48368 8.21969 4.72135 8.48666 4.92185C8.21951 5.12254 7.98202 5.36021 7.78134 5.62717C7.58084 5.36002 7.34317 5.12254 7.07602 4.92185C7.34317 4.72135 7.58084 4.48368 7.78134 4.21653Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Floor replacement
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $7,000 - $12,000
                            </span>                        
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.2941 0H0.705882C0.316047 0 0 0.314813 0 0.703125C0 1.09144 0.316047 1.40625 0.705882 1.40625H0.752941V23.2969C0.752941 23.6852 1.06899 24 1.45882 24C1.84866 24 2.16471 23.6852 2.16471 23.2969V22.875H21.8353V23.2969C21.8353 23.6852 22.1513 24 22.5412 24C22.931 24 23.2471 23.6852 23.2471 23.2969V1.40625H23.2941C23.684 1.40625 24 1.09144 24 0.703125C24 0.314813 23.684 0 23.2941 0ZM12.7059 14.5781H21.8353V17.2969H12.7059V14.5781ZM21.8353 13.1719H12.7059V10.4531H21.8353V13.1719ZM11.2941 21.4688H7.43529V1.40625H11.2941V21.4688ZM2.16471 1.40625H6.02353V21.4688H2.16471V1.40625ZM12.7059 21.4688V18.7031H21.8353V21.4688H12.7059ZM21.8353 9.04688H12.7059V1.40625H21.8353V9.04688Z" fill="#4A7558"/>
                                    <path d="M9.36471 12.7031C9.75455 12.7031 10.0706 12.3883 10.0706 12C10.0706 11.6117 9.75455 11.2969 9.36471 11.2969C8.97486 11.2969 8.65882 11.6117 8.65882 12C8.65882 12.3883 8.97486 12.7031 9.36471 12.7031Z" fill="#4A7558"/>
                                    <path d="M4.09412 12.7032C4.48397 12.7032 4.8 12.3884 4.8 12.0001C4.8 11.6117 4.48397 11.2969 4.09412 11.2969C3.70427 11.2969 3.38824 11.6117 3.38824 12.0001C3.38824 12.3884 3.70427 12.7032 4.09412 12.7032Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    General Interior
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $3,000 - $9,000
                            </span>                        
                        </div>
                    </div>            
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.2969 3.84375H13.9219C13.5336 3.84375 13.2188 4.15856 13.2188 4.54688V11.3438H0.703125C0.314813 11.3438 0 11.6586 0 12.0469V23.2969C0 23.6852 0.314813 24 0.703125 24H23.2969C23.6852 24 24 23.6852 24 23.2969V4.54688C24 4.15856 23.6852 3.84375 23.2969 3.84375ZM14.625 5.25H22.5938V11.3438H14.625V5.25ZM1.40625 12.75H13.2188V14.1562H1.40625V12.75ZM1.40625 15.5625H9.46875V22.5938H1.40625V15.5625ZM10.875 15.5625H13.2188V22.5938H10.875V15.5625ZM14.625 22.5938V12.75H22.5938V22.5938H14.625Z" fill="#4A7558"/>
                                    <path d="M0.703125 9.375H11.0156C11.4039 9.375 11.7188 9.06019 11.7188 8.67188V6.79688C11.7188 6.59161 11.629 6.39661 11.4732 6.26302L8.4375 3.66098V0.703125C8.4375 0.314813 8.12269 0 7.73438 0H3.98438C3.59606 0 3.28125 0.314813 3.28125 0.703125V3.66098L0.245531 6.26302C0.0897188 6.39661 0 6.59161 0 6.79688V8.67188C0 9.06019 0.314813 9.375 0.703125 9.375ZM4.6875 1.40625H7.03125V3.28125H4.6875V1.40625ZM1.40625 7.12027L4.24448 4.6875H7.47427L10.3125 7.12027V7.96875H1.40625V7.12027Z" fill="#4A7558"/>
                                    <path d="M16.7344 7.125C16.3461 7.125 16.0312 7.43981 16.0312 7.82812V9.23438C16.0312 9.62269 16.3461 9.9375 16.7344 9.9375C17.1227 9.9375 17.4375 9.62269 17.4375 9.23438V7.82812C17.4375 7.43981 17.1227 7.125 16.7344 7.125Z" fill="#4A7558"/>
                                    <path d="M16.7344 14.1562C16.3461 14.1562 16.0312 14.4711 16.0312 14.8594V16.2656C16.0312 16.6539 16.3461 16.9688 16.7344 16.9688C17.1227 16.9688 17.4375 16.6539 17.4375 16.2656V14.8594C17.4375 14.4711 17.1227 14.1562 16.7344 14.1562Z" fill="#4A7558"/>
                                    <path d="M7.35938 17.6719C6.97106 17.6719 6.65625 17.9867 6.65625 18.375V19.7812C6.65625 20.1696 6.97106 20.4844 7.35938 20.4844C7.74769 20.4844 8.0625 20.1696 8.0625 19.7812V18.375C8.0625 17.9867 7.74769 17.6719 7.35938 17.6719Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Kitchen remodel
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $20,000 - $40,0000
                            </span>                        
                        </div>
                    </div>            
                </Col>  
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.915274 13.2648H2.7033V23.1848C2.7033 23.3971 2.78759 23.6005 2.93758 23.7505C3.08758 23.9005 3.29098 23.9848 3.5033 23.9848H8.80707V25.0329C8.80707 25.245 8.89136 25.4486 9.04135 25.5986C9.19135 25.7486 9.39493 25.8329 9.60707 25.8329H11.659C11.8712 25.8329 12.0748 25.7486 12.2248 25.5986C12.3748 25.4486 12.459 25.245 12.459 25.0329V23.9848H20.5112C20.7235 23.9848 20.9269 23.9005 21.0769 23.7505C21.2269 23.6005 21.3112 23.3971 21.3112 23.1848V13.2648H23.0992C23.3099 13.2652 23.5122 13.1821 23.662 13.0341C23.812 12.8861 23.8975 12.6848 23.8999 12.4743C23.9024 12.2636 23.8217 12.0603 23.6752 11.9089L20.8472 9.0009V2.2009C20.8472 1.98876 20.7629 1.78519 20.6129 1.63519C20.4629 1.48519 20.2593 1.4009 20.0472 1.4009H15.7511C15.539 1.4009 15.3356 1.48519 15.1856 1.63519C15.0354 1.78519 14.9511 1.98876 14.9511 2.2009V2.89288L12.5833 0.444835C12.4324 0.288405 12.2245 0.200012 12.0072 0.200012C11.7898 0.200012 11.582 0.288405 11.4311 0.444835L0.338959 11.9091C0.192531 12.0605 0.111814 12.2637 0.114314 12.4744C0.116636 12.6849 0.202173 12.8862 0.35217 13.0342C0.50199 13.1823 0.704312 13.2653 0.915005 13.2649L0.915274 13.2648ZM10.4074 24.233V20.6611H10.8594V24.233H10.4074ZM12.0074 2.15304L15.1754 5.4291C15.3238 5.58321 15.5279 5.67125 15.7419 5.67375C15.9558 5.67643 16.1619 5.59321 16.314 5.44268C16.4662 5.29214 16.5517 5.08697 16.5514 4.87303V3.00108H19.2475V9.32108C19.2473 9.5284 19.3276 9.72786 19.4714 9.87715L21.2075 11.665H20.5114C20.2992 11.665 20.0958 11.7493 19.9458 11.8995C19.7957 12.0494 19.7114 12.2528 19.7114 12.465V22.385H12.4396V19.861C12.4396 19.6489 12.3553 19.4453 12.2053 19.2953C12.0553 19.1453 11.8518 19.0611 11.6396 19.0611H11.4716V18.6291C11.4726 18.3971 11.5653 18.1748 11.7294 18.0109C11.8934 17.8468 12.1157 17.7541 12.3476 17.753H16.1637C17.193 17.7455 18.1487 17.2184 18.7042 16.3518C19.2596 15.4852 19.3394 14.3966 18.9164 13.4582C18.4933 12.5198 17.6248 11.8588 16.6076 11.7011V11.0011C16.6076 10.7889 16.5233 10.5854 16.3733 10.4354C16.2233 10.2854 16.0198 10.2011 15.8076 10.2011H6.49563C6.28349 10.2011 6.07991 10.2854 5.92992 10.4354C5.77992 10.5854 5.69563 10.7889 5.69563 11.0011V13.9572C5.69563 14.1693 5.77992 14.3727 5.92992 14.5227C6.07991 14.6729 6.28349 14.7571 6.49563 14.7571H15.8076C16.0198 14.7571 16.2233 14.6729 16.3733 14.5227C16.5233 14.3727 16.6076 14.1693 16.6076 13.9572V13.3572C17.0367 13.5061 17.3703 13.8488 17.5077 14.2818C17.6452 14.7147 17.5702 15.187 17.3057 15.5563C17.041 15.9254 16.6178 16.1481 16.1637 16.1572H12.3477C11.6911 16.1572 11.0612 16.4179 10.5969 16.8824C10.1325 17.3466 9.87158 17.9765 9.87158 18.6331V19.065H9.60766C9.39552 19.065 9.19194 19.1493 9.04194 19.2995C8.89195 19.4495 8.80766 19.6529 8.80766 19.865V22.389L4.30375 22.3892V12.465C4.30375 12.2529 4.21946 12.0495 4.06929 11.8995C3.91929 11.7493 3.71589 11.665 3.50375 11.665H2.80766L12.0074 2.15304ZM15.0074 11.801V13.1571H7.29539V11.801H15.0074Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Exterior
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $35,000 - $55,000
                            </span>                        
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 13.5938C24 12.4306 23.0537 11.4844 21.8906 11.4844H19.6134C19.3232 10.666 18.5416 10.0781 17.625 10.0781H14.8125C13.8959 10.0781 13.1143 10.666 12.8241 11.4844H2.85938V3.51562C2.85938 2.35252 3.80564 1.40625 4.96875 1.40625H6.375C7.32544 1.40625 8.1308 2.03827 8.39363 2.904C6.83639 3.26498 5.67188 4.66266 5.67188 6.32812V7.03125H12.7031V6.32812C12.7031 4.60931 11.4629 3.17564 9.83063 2.8725C9.52748 1.24017 8.09381 0 6.375 0H4.96875C3.03023 0 1.45312 1.57711 1.45312 3.51562V11.5894C0.610453 11.8661 0 12.6598 0 13.5938C0 14.5277 0.610453 15.3215 1.45312 15.5981V17.8125C1.45312 19.6523 2.46802 21.2593 3.96717 22.1038L3.5625 22.5085C3.28793 22.7831 3.28792 23.2282 3.56249 23.5028C3.83707 23.7774 4.28225 23.7774 4.55684 23.5028L5.4188 22.6409C5.72827 22.702 6.04791 22.7344 6.375 22.7344H17.625C17.9521 22.7344 18.2717 22.702 18.5812 22.6408L19.4432 23.5028C19.7178 23.7774 20.1629 23.7774 20.4375 23.5028C20.7121 23.2282 20.7121 22.783 20.4375 22.5085L20.0329 22.1038C21.532 21.2593 22.5469 19.6523 22.5469 17.8125V15.5981C23.3895 15.3215 24 14.5278 24 13.5938ZM11.1764 5.625H7.19859C7.4888 4.80652 8.27081 4.21875 9.1875 4.21875C10.1042 4.21875 10.8862 4.80652 11.1764 5.625ZM14.1094 12.1875C14.1094 11.7998 14.4248 11.4844 14.8125 11.4844H17.625C18.0127 11.4844 18.3281 11.7998 18.3281 12.1875V15.7031H14.1094V12.1875ZM2.10938 12.8906H12.7031V14.2969H2.10938C1.72167 14.2969 1.40625 13.9815 1.40625 13.5938C1.40625 13.206 1.72167 12.8906 2.10938 12.8906ZM17.625 21.3281H6.375C4.43648 21.3281 2.85938 19.751 2.85938 17.8125V15.7031H12.7031V17.1094H19.7344V15.7031H21.1406V17.8125C21.1406 19.751 19.5635 21.3281 17.625 21.3281ZM21.8906 14.2969H19.7344V12.8906H21.8906C22.2783 12.8906 22.5938 13.206 22.5938 13.5938C22.5938 13.9815 22.2783 14.2969 21.8906 14.2969Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Bathroom remodel (2)
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $10,000 - $16,000
                            </span>                        
                        </div>
                    </div>            
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 13.5938C24 12.4306 23.0537 11.4844 21.8906 11.4844H19.6134C19.3232 10.666 18.5416 10.0781 17.625 10.0781H14.8125C13.8959 10.0781 13.1143 10.666 12.8241 11.4844H2.85938V3.51562C2.85938 2.35252 3.80564 1.40625 4.96875 1.40625H6.375C7.32544 1.40625 8.1308 2.03827 8.39363 2.904C6.83639 3.26498 5.67188 4.66266 5.67188 6.32812V7.03125H12.7031V6.32812C12.7031 4.60931 11.4629 3.17564 9.83063 2.8725C9.52748 1.24017 8.09381 0 6.375 0H4.96875C3.03023 0 1.45312 1.57711 1.45312 3.51562V11.5894C0.610453 11.8661 0 12.6598 0 13.5938C0 14.5277 0.610453 15.3215 1.45312 15.5981V17.8125C1.45312 19.6523 2.46802 21.2593 3.96717 22.1038L3.5625 22.5085C3.28793 22.7831 3.28792 23.2282 3.56249 23.5028C3.83707 23.7774 4.28225 23.7774 4.55684 23.5028L5.4188 22.6409C5.72827 22.702 6.04791 22.7344 6.375 22.7344H17.625C17.9521 22.7344 18.2717 22.702 18.5812 22.6408L19.4432 23.5028C19.7178 23.7774 20.1629 23.7774 20.4375 23.5028C20.7121 23.2282 20.7121 22.783 20.4375 22.5085L20.0329 22.1038C21.532 21.2593 22.5469 19.6523 22.5469 17.8125V15.5981C23.3895 15.3215 24 14.5278 24 13.5938ZM11.1764 5.625H7.19859C7.4888 4.80652 8.27081 4.21875 9.1875 4.21875C10.1042 4.21875 10.8862 4.80652 11.1764 5.625ZM14.1094 12.1875C14.1094 11.7998 14.4248 11.4844 14.8125 11.4844H17.625C18.0127 11.4844 18.3281 11.7998 18.3281 12.1875V15.7031H14.1094V12.1875ZM2.10938 12.8906H12.7031V14.2969H2.10938C1.72167 14.2969 1.40625 13.9815 1.40625 13.5938C1.40625 13.206 1.72167 12.8906 2.10938 12.8906ZM17.625 21.3281H6.375C4.43648 21.3281 2.85938 19.751 2.85938 17.8125V15.7031H12.7031V17.1094H19.7344V15.7031H21.1406V17.8125C21.1406 19.751 19.5635 21.3281 17.625 21.3281ZM21.8906 14.2969H19.7344V12.8906H21.8906C22.2783 12.8906 22.5938 13.206 22.5938 13.5938C22.5938 13.9815 22.2783 14.2969 21.8906 14.2969Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Bathroom remodel (1)
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $10,000 - $16,000
                            </span>                        
                        </div>
                    </div>            
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                    <div className='renovate-col'>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <div className='renovate-form-icon d-flex align-items-center'>
                                <i>
                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5625 22.5469C4.7113 22.5469 5.73303 21.993 6.375 21.1382C7.01697 21.993 8.0387 22.5469 9.1875 22.5469C10.3363 22.5469 11.358 21.993 12 21.1382C12.642 21.993 13.6637 22.5469 14.8125 22.5469C15.9613 22.5469 16.983 21.993 17.625 21.1382C18.267 21.993 19.2887 22.5469 20.4375 22.5469C21.3765 22.5469 22.2656 22.1832 22.9411 21.5228C23.6239 20.8553 24 19.9706 24 19.0312C24 18.0005 24 0.636108 24 0H0V19.0312C0 19.9706 0.376099 20.8553 1.0589 21.5228C1.73438 22.1832 2.62354 22.5469 3.5625 22.5469ZM3.5625 21.1406C2.39374 21.1406 1.40625 20.1747 1.40625 19.0312V16.196C2.02625 16.6663 2.77679 16.9219 3.5625 16.9219C4.35333 16.9219 5.08392 16.6593 5.67188 16.2169V19.0312C5.67188 20.1943 4.72559 21.1406 3.5625 21.1406ZM16.9219 7.78125C16.9219 8.94434 15.9756 9.89062 14.8125 9.89062C13.6494 9.89062 12.7031 8.94434 12.7031 7.78125V4.21875H16.9219V7.78125ZM12.7031 10.5919C13.2911 11.0343 14.0217 11.2969 14.8125 11.2969C15.6033 11.2969 16.3339 11.0343 16.9219 10.5919V13.4062C16.9219 14.5693 15.9756 15.5156 14.8125 15.5156C13.6494 15.5156 12.7031 14.5693 12.7031 13.4062V10.5919ZM11.2969 7.78125C11.2969 8.94434 10.3506 9.89062 9.1875 9.89062C8.02441 9.89062 7.07812 8.94434 7.07812 7.78125V4.21875H11.2969V7.78125ZM7.07812 10.5919C7.66608 11.0343 8.39667 11.2969 9.1875 11.2969C9.97833 11.2969 10.7089 11.0343 11.2969 10.5919V13.4062C11.2969 14.5693 10.3506 15.5156 9.1875 15.5156C8.02441 15.5156 7.07812 14.5693 7.07812 13.4062V10.5919ZM9.1875 21.1406C8.02441 21.1406 7.07812 20.1943 7.07812 19.0312V16.2169C7.66608 16.6593 8.39667 16.9219 9.1875 16.9219C9.97833 16.9219 10.7089 16.6593 11.2969 16.2169V19.0312C11.2969 20.1943 10.3506 21.1406 9.1875 21.1406ZM14.8125 21.1406C13.6494 21.1406 12.7031 20.1943 12.7031 19.0312V16.2169C13.2911 16.6593 14.0217 16.9219 14.8125 16.9219C15.6033 16.9219 16.3339 16.6593 16.9219 16.2169V19.0312C16.9219 20.1943 15.9756 21.1406 14.8125 21.1406ZM20.4375 21.1406C19.2744 21.1406 18.3281 20.1943 18.3281 19.0312V16.2169C18.9161 16.6593 19.6467 16.9219 20.4375 16.9219C21.2232 16.9219 21.9738 16.6663 22.5938 16.196V19.0312C22.5938 20.1747 21.6063 21.1406 20.4375 21.1406ZM20.4375 15.5156C19.2744 15.5156 18.3281 14.5693 18.3281 13.4062V10.5919C18.9161 11.0343 19.6467 11.2969 20.4375 11.2969C21.2232 11.2969 21.9738 11.0413 22.5938 10.571V13.4062C22.5938 14.5497 21.6063 15.5156 20.4375 15.5156ZM20.4375 9.89062C19.2744 9.89062 18.3281 8.94434 18.3281 7.78125V4.21875H22.5938V7.78125C22.5938 8.92474 21.6063 9.89062 20.4375 9.89062ZM1.40625 1.40625H22.5938V2.8125C22.3925 2.8125 1.98212 2.8125 1.40625 2.8125V1.40625ZM1.40625 4.21875H5.67188V7.78125C5.67188 8.94434 4.72559 9.89062 3.5625 9.89062C2.39374 9.89062 1.40625 8.92474 1.40625 7.78125V4.21875ZM1.40625 10.571C2.02625 11.0413 2.77679 11.2969 3.5625 11.2969C4.35333 11.2969 5.08392 11.0343 5.67188 10.5919V13.4062C5.67188 14.5693 4.72559 15.5156 3.5625 15.5156C2.39374 15.5156 1.40625 14.5497 1.40625 13.4062V10.571Z" fill="#4A7558"/>
                                </svg>
                                </i>
                                &nbsp;&nbsp;&nbsp;
                                <div className='renovate-form-icon-name'>
                                    Bathroom remodel (1)
                                </div>
                            </div>
                            <Input type='checkbox' className='renovate-form-checkbox'>
                            </Input>
                        </div>
                        <div className='d-flex justify-content-between align-items-center renovate-form-icons'>
                            <span className='renovate-form-icon-label'>
                                Timeline: 6-8 weeks
                            </span>
                            <span className='renovate-form-icon-price'>
                                $5,500 to $11,000
                            </span>                        
                        </div>
                    </div>            
                </Col>         
                <div className='d-flex justify-content-between paganation-position'>
                    <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
                    <span className='align-middle d-sm-inline-block d-none'>Back</span>
                    </Button>
                    <Button type='submit' color='primary' className='btn-next'>
                    <span className='align-middle d-sm-inline-block d-none'>Next</span>
                    </Button>
                </div>
            </Container>
        </Form>
    </Fragment>
  )
}

export default Renovate
