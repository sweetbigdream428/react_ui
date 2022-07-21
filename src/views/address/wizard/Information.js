import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import NumericInput from 'react-numeric-input'
import NumberFormat from 'react-number-format'
import { Form, FormGroup, Button, Container, Row, Label, Input } from 'reactstrap'
import arrowdownIcon from '../../../assets/icons/arrowdown.svg'
import checkerIcon from '../../../assets/icons/checker.svg'
import typeIcon from '../../../assets/icons/type.svg'
import neighborhoodIcon from '../../../assets/icons/neighborhood.svg'
import yearBuiltIcon from '../../../assets/icons/yearBuilt.svg'
import squareFtIcon from '../../../assets/icons/squareFt.svg'
import kichensIcon from '../../../assets/icons/kichens.svg'
import bedroomsIcon from '../../../assets/icons/bedrooms.svg'


const Information = ({ stepper, type }) => {

  const onSubmit = () => {
    // trigger()
    // if (isObjEmpty(errors)) {
      stepper.next()
    // }
  }
  const { handleSubmit } = useForm()
  
  const [typename, setTypename] = useState('Single Family')
  const [showType, setShowType] = useState(false)

  const [neighborhood, setNeighborhood] = useState('Thousand Oaks')
  const [showNeighborhood, setShowNeighborhood] = useState(false)

  const [yearBuilt, setYearBuilt] = useState(1971)
  const [showYearBuilt, setShowYearBuilt] = useState(false)
  const [tempYearBuilt, setTempYearBuilt] = useState(yearBuilt)

  const [squareFt, setSquareFt] = useState(2355)
  const [showSquareFt, setShowSquareFt] = useState(false)
  const [tempSquareFt, setTempSquareFt] = useState(squareFt)

  const [countone, setCountone] = useState(1)
  // const [counttwo, setCounttwo] = useState(2)
  const [countthree, setCountthree] = useState(2)

  // TYPE NAME

  function onClickType() {
    if (showType) {
      setShowType(false)
    }
    else {
      setShowType(true)
    }
  }

  function onClickTypeName(value) {
    setTypename(value)
    setShowType(false)
  }

  const TypeResults = () => (
    <div className='p-0 address-modal'>
      <ul className='px-0'>
        <li className='title px-3'>Type:</li>
        <li className={'value px-3 ' + (typename === 'Single Family' ? 'active' : '')} onClick={() => onClickTypeName('Single Family')}>
          Single Family
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
        <li className={'value px-3 ' + (typename === 'Multi Family' ? 'active' : '')} onClick={() => onClickTypeName('Multi Family')}>
          Multi Family
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
        <li className={'value px-3 ' + (typename === 'Condo' ? 'active' : '')} onClick={() => onClickTypeName('Condo')}>
          Condo
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
      </ul>
    </div>
  )

  // NeighborhoodResults  

  function onClickNeighborhood() {
    if (showNeighborhood) {
      setShowNeighborhood(false)
    }
    else {
      setShowNeighborhood(true)
    }
  }

  function onNeighborhood(value) {
    setNeighborhood(value)
    setShowNeighborhood(false)
  }

  const NeighborhoodResults = () => (
    <div className='p-0 address-modal'>
      <ul className='px-0'>
        <li className='title px-3'>Neighborhood:</li>
        <li className={'value px-3 ' + (neighborhood === 'Thousand Oaks' ? 'active' : '')} onClick={() => onNeighborhood('Thousand Oaks')}>
          Thousand Oaks
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
        <li className={'value px-3 ' + (neighborhood === 'Thousand' ? 'active' : '')} onClick={() => onNeighborhood('Thousand')}>
          Thousand
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
        <li className={'value px-3 ' + (neighborhood === 'Oaks' ? 'active' : '')} onClick={() => onNeighborhood('Oaks')}>
          Oaks
          <img src={checkerIcon} className='active-icon' alt='icon'/>
        </li>
      </ul>
    </div>
  )

  // Year Built

  function onClickYearBuilt() {
    if (showYearBuilt) {
      setShowYearBuilt(false)
    }
    else {
      setShowYearBuilt(true)
    }
  }

  function onClickSaveYearBuilt(value) {
    setYearBuilt(value)
    setShowYearBuilt(false)
  }

  const YearBuiltResults = () => (
    <div className='p-0 year-built-modal'>
      <FormGroup className='p-3'>
        <Label className='form-label year-built-label'>
          Year Built
        </Label>
        <Input
          type='number'
          name=''
          className='year-built-input my-1'
          placeholder='1971'
          min="1900"
          max="2022"
          step="1"
          value={tempYearBuilt}
          autoFocus          
          onChange={e => setTempYearBuilt(e.target.value)}
          required
        />
        <div className='d-flex justify-content-between align-items-center mt-3'>
            <Button type='button' className='year-built-cancel' onClick={() => setShowYearBuilt(false)}>
              Cancel
            </Button>
            <Button type='submit' className='year-built-save' onClick={() => onClickSaveYearBuilt(tempYearBuilt)} disabled={(tempYearBuilt < 1900 || 2022 < tempYearBuilt) ? true : false}>
              Save
            </Button>
        </div>
      </FormGroup>
    </div>
  )

  // Square Footage

  function onClickSquareFt() {
    if (showSquareFt) {
      setShowSquareFt(false)
    }
    else {
      setShowSquareFt(true)
    }
  }

  function onClickSaveSquareFt(value) {
    setSquareFt(value)
    setShowSquareFt(false)
  }

  const SquareFtResults = () => (
    <div className='p-0 year-built-modal'>
      <FormGroup className='p-3'>
        <Label className='form-label year-built-label'>
        Square Footage
        </Label>
        <Input
          type='number'
          name=''
          className='year-built-input squareft-input my-1'
          min="1"
          step="1"
          value={tempSquareFt}
          autoFocus
          onChange={e => setTempSquareFt(e.target.value)}
          required
        />
        <div className='d-flex justify-content-between align-items-center mt-3'>
            <Button type='button' className='year-built-cancel' onClick={() => setShowSquareFt(false)}>
              Cancel
            </Button>
            <Button type='submit' className='year-built-save' onClick={() => onClickSaveSquareFt(tempSquareFt)} disabled={tempSquareFt < 1 ? true : false}>
              Save
            </Button>
        </div>
      </FormGroup>
    </div>
  )

  return (
    <Fragment>
      <div className='content-header'>
      </div>
      <Container id='informationAddr'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className='info-content-title text-center'>Please confirm the following information about your home</h3>
          <div className='w-100 d-flex justify-content-center mt-5'>
            <Row className='form-information'>
              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={typeIcon} alt='typeIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Type
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickType()}>
                    <span className='info-form-val-text'>{typename}</span>
                    &nbsp;&nbsp;
                    <i>
                      <img src={arrowdownIcon} alt='icon' />
                    </i>
                  </div>
                </FormGroup>
                { showType ? <TypeResults /> : null }
              </FormGroup>

              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={neighborhoodIcon} alt='neighborhoodIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Neighborhood
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickNeighborhood()}>
                    <span className='info-form-val-text'>{neighborhood}</span>
                    &nbsp;&nbsp;
                    <i>
                      <img src={arrowdownIcon} alt='icon' />
                    </i>
                  </div>
                </FormGroup>
                { showNeighborhood ? <NeighborhoodResults /> : null }
              </FormGroup>

              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={yearBuiltIcon} alt='yearBuiltIcon'/>
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Year Built
                    </div>
                  </div>
                  <div className='info-form-val' onClick = {() => onClickYearBuilt()}>
                    <span className='info-form-val-text'>{yearBuilt}</span>
                    &nbsp;&nbsp;
                    <i>
                      <img src={arrowdownIcon} alt='icon' />
                    </i>
                  </div>
                </FormGroup>
                { showYearBuilt ? <YearBuiltResults /> : null }
              </FormGroup>

              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={squareFtIcon} alt='' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Square Footage
                    </div>
                  </div>
                  <div className='info-form-val' onClick={() => onClickSquareFt()}>
                    <span className='info-form-val-text d-flex'>
                      <NumberFormat value={squareFt} displayType={'text'} thousandSeparator={true} /> &nbsp;
                    </span>
                    <span className='info-form-val-text'> sq.ft</span>
                    &nbsp;&nbsp;
                    <i>
                      <img src={arrowdownIcon} alt='icon' />
                    </i>
                  </div>
                </FormGroup>
                {showSquareFt ? <SquareFtResults /> : null}
              </FormGroup>

              <FormGroup>
                <FormGroup className='info-form px-3'>
                  <div className='info-form-icons'>
                    <div className='info-form-icon'>
                      <i>
                        <img src={kichensIcon} alt='kichensIcon' />
                      </i>
                    </div>
                    <div className='info-form-icon-name'>
                      Number of Kichens
                    </div>
                  </div>
                  <div className='info-form-val'>
                    <NumericInput mobile className="form-control" min={1} value={countone} onChange={countone => setCountone(countone)} />
                  </div>
                </FormGroup>
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
                      Number of bedrooms
                    </div>
                  </div>
                  <div className='info-form-val'>
                    <NumericInput mobile className="form-control" min={1} value={countthree} onChange={countthree => setCountthree(countthree)} />
                  </div>
                </FormGroup>
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
