import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button, Container, Col } from 'reactstrap'
import broKich from '../../../assets/icons/brokichens.svg'
import broBath from '../../../assets/icons/brobathrooms.svg'
import broExter from '../../../assets/icons/broexters.svg'
import broHouses from '../../../assets/icons/brohouses.svg'
import broRenovates from '../../../assets/icons/brorenovates.svg'
import broCltv from '../../../assets/icons/brocltv.svg'

const Confirmrecom = ({ stepper, type }) => {

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
                <Container id='confirmrecomAddr' className='row'>
                    <h3 className='info-content-title mb-3'>Your renovation plan has been approved!</h3>
                    <h6 className='info-content-text'>here are alternative renovation plans that allow you to borrow more and renovate more of your home</h6>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                        <div className='recommendations-col'>
                            <h5 className='title'>Package 1</h5>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broKich} alt='brokich' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Kitchen
                                    </div>
                                    <div className='value'>
                                        Costs: $35,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broBath} alt='broBath' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Bathroom 1
                                    </div>
                                    <div className='value'>
                                        Costs: $16,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broExter} alt='broExter' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Exterior
                                    </div>
                                    <div className='value'>
                                        Costs: $25,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 pt-1'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broHouses} alt='broHouses' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        House future value
                                    </div>
                                    <div className='value'>
                                        $365,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broRenovates} alt='broRenovates' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Renovation ROI
                                    </div>
                                    <div className='value'>
                                        8%
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 mb-3'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broCltv} alt='broCltv' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        CLTV
                                    </div>
                                    <div className='value text-green-color'>
                                        85%
                                    </div>
                                </div>
                            </div>
                            <div className='select-package'>
                                Select package
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                        <div className='recommendations-col'>
                            <h5 className='title'>Package 2</h5>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broKich} alt='brokich' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Kitchen
                                    </div>
                                    <div className='value'>
                                        Costs: $35,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broBath} alt='broBath' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Bathroom 1
                                    </div>
                                    <div className='value'>
                                        Costs: $16,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broExter} alt='broExter' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Exterior
                                    </div>
                                    <div className='value'>
                                        Costs: $25,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 pt-1'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broHouses} alt='broHouses' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        House future value
                                    </div>
                                    <div className='value'>
                                        $365,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broRenovates} alt='broRenovates' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Renovation ROI
                                    </div>
                                    <div className='value'>
                                        8%
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 mb-3'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broCltv} alt='broCltv' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        CLTV
                                    </div>
                                    <div className='value text-green-color'>
                                        85%
                                    </div>
                                </div>
                            </div>
                            <div className='select-package'>
                                Select package
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className='mt-4'>
                        <div className='recommendations-col'>
                            <h5 className='title'>Package 3</h5>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broKich} alt='brokich' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Kitchen
                                    </div>
                                    <div className='value'>
                                        Costs: $35,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broBath} alt='broBath' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Bathroom 1
                                    </div>
                                    <div className='value'>
                                        Costs: $16,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broExter} alt='broExter' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Exterior
                                    </div>
                                    <div className='value'>
                                        Costs: $25,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 pt-1'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broHouses} alt='broHouses' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        House future value
                                    </div>
                                    <div className='value'>
                                        $365,000
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broRenovates} alt='broRenovates' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        Renovation ROI
                                    </div>
                                    <div className='value'>
                                        8%
                                    </div>
                                </div>
                            </div>
                            <div className='recommendations-data d-flex align-items-center mt-4 mb-3'>
                                <div className='recommendations-overview-back'>
                                    <i>
                                        <img src={broCltv} alt='broCltv' />
                                    </i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='recommendations-data-values d-flex justify-content-center flex-column'>
                                    <div className='title'>
                                        CLTV
                                    </div>
                                    <div className='value text-green-color'>
                                        85%
                                    </div>
                                </div>
                            </div>
                            <div className='select-package'>
                                Select package
                            </div>
                        </div>
                    </Col>
                    <div className='paganation-position'>
                        <div className='buttons'>
                            <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
                                <span className='align-middle d-sm-inline-block d-none'>Back</span>
                            </Button>
                            <Button type='submit' color='primary' className='btn-next'>
                                <span className='align-middle d-sm-inline-block d-none'>Skip</span>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Form>
        </Fragment>
    )
}

export default Confirmrecom
