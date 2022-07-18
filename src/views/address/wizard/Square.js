import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Input, FormGroup, Container, Button, Row } from 'reactstrap'
import kichensIcon from '../../../assets/icons/kichens.svg'
import bedroomsIcon from '../../../assets/icons/bedrooms.svg'
import bathroomsIcon from '../../../assets/icons/bathrooms.svg'
import diningroomsIcon from '../../../assets/icons/diningrooms.svg'
import livingroomsIcon from '../../../assets/icons/livingrooms.svg'
import exteriorIcon from '../../../assets/icons/exterior.svg'
import spinerImg from '../../../assets/images/loading.png'

const Square = ({ stepper, type }) => {

  const [showSpiner, setshowSpiner] = useState(false)
  const onSubmit = () => {
    // trigger()
    // if (isObjEmpty(errors)) {
      stepper.next()
    // }
  }
  const { handleSubmit } = useForm()
  const Spiner = () => (
    <div id='spiner'>
      <div className="overlay show">
      </div>
      <div className="spanner show">
        <div className="loader">
          <img id='loading-spinner' className='mb-4' src={spinerImg} alt='loading' />
        </div>
        <p>
          Housetable's AI-based condition analysis
          <span>This may take a couple of minutes</span>
        </p>
      </div>
    </div>
  )

  function onClickSpiner() {
    setshowSpiner(true)
  }
  console.log('showSpiner', showSpiner)

  return (
    <Fragment>
      <div className='content-header'>
      </div>
      <Container id='squarefootAddr'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='info-content-title text-center'>Please enter the  square footage of every room in your home</h3>
          <div className='w-100 d-flex justify-content-center mt-5'>
            <Row className='form-squarefoot'>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={kichensIcon} alt='' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Kitchen:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Bathroom 1:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={bathroomsIcon} alt='bathroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Bathroom 2:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Bedroom 1:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Bedroom 2:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={bedroomsIcon} alt='bedroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Bedroom 3:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={diningroomsIcon} alt='diningroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Dining room:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={livingroomsIcon} alt='livingroomsIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Living Room:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <FormGroup className='squarefoot-form px-3'>
                  <div className='squarefoot-form-icons'>
                    <div className='squarefoot-form-icon'>
                      <i>
                        <img src={exteriorIcon} alt='exteriorIcon' />
                      </i>
                    </div>
                    &nbsp;&nbsp;
                    <div className='squarefoot-form-icon-name'>
                      Exterior:
                    </div>
                  </div>
                  <div className='squarefoot-form-val'>
                    <Input className='' placeholder='9.5' />
                    <span className='squarefoot-form-val-text'>&nbsp;x&nbsp;</span>
                    <Input className='' placeholder='15.7' />
                    <span className='squarefoot-form-val-text-point'>,&nbsp;</span>
                    <Input className='' placeholder='141' />
                    <span className='squarefoot-form-val-text'>&nbsp;sq. ft</span>
                  </div>
                </FormGroup>
              </FormGroup>
            </Row>
          </div>
          <div className='d-flex justify-content-between paganation-position'>
            <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
              <span className='align-middle d-sm-inline-block d-none'>Back</span>
            </Button>
            <Button type='button' color='primary' className='btn-next' onClick={() => onClickSpiner()}>
              <span className='align-middle d-sm-inline-block d-none'>Next</span>
            </Button>
          </div>
        </Form>
      </Container>
      {showSpiner ? <Spiner /> : null}
    </Fragment>
  )
}

export default Square
