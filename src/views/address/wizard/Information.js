import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import NumericInput from 'react-numeric-input'
import NumberFormat from 'react-number-format'
import { Form, FormGroup, Button, Container, Row, Label, Input } from 'reactstrap'

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
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
        </li>
        <li className={'value px-3 ' + (typename === 'Multi Family' ? 'active' : '')} onClick={() => onClickTypeName('Multi Family')}>
          Multi Family
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
        </li>
        <li className={'value px-3 ' + (typename === 'Condo' ? 'active' : '')} onClick={() => onClickTypeName('Condo')}>
          Condo
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
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
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
        </li>
        <li className={'value px-3 ' + (neighborhood === 'Thousand' ? 'active' : '')} onClick={() => onNeighborhood('Thousand')}>
          Thousand
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
        </li>
        <li className={'value px-3 ' + (neighborhood === 'Oaks' ? 'active' : '')} onClick={() => onNeighborhood('Oaks')}>
          Oaks
          <svg className='active-icon' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3668 1.99182L5.78342 9.57501C5.55591 9.80252 5.25726 9.91702 4.95862 9.91702C4.65997 9.91702 4.36133 9.80252 4.13382 9.57501L0.342224 5.78342C-0.114075 5.32733 -0.114075 4.58991 0.342224 4.13382C0.798309 3.67752 1.53552 3.67752 1.99182 4.13382L4.95862 7.10062L11.7172 0.342224C12.1733 -0.114075 12.9105 -0.114075 13.3668 0.342224C13.8229 0.798309 13.8229 1.53552 13.3668 1.99182Z" fill="#4A7558"/>
          </svg>
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
                      <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.1108 7.18447C26.8849 6.4214 27.3633 5.37911 27.3633 4.23077C27.3633 1.89792 25.3919 0 22.9688 0C20.5456 0 18.5742 1.89792 18.5742 4.23077C18.5742 5.37268 19.0474 6.40967 19.8139 7.17161C18.9513 7.49422 18.1687 8.00101 17.5321 8.65565C16.1453 7.26784 13.8533 7.26936 12.4679 8.65565C11.8313 8.00106 11.0487 7.49427 10.1861 7.17166C10.9526 6.40973 11.4258 5.37274 11.4258 4.23077C11.4258 1.89792 9.45439 0 7.03125 0C4.60811 0 2.63672 1.89792 2.63672 4.23077C2.63672 5.37911 3.11508 6.4214 3.88916 7.18447C1.61332 8.05431 0 10.1953 0 12.6923V21.1538C0 21.6211 0.393516 22 0.878906 22H29.1211C29.6065 22 30 21.6211 30 21.1538V12.6923C30 10.1953 28.3867 8.05431 26.1108 7.18447ZM22.9688 1.69231C24.4226 1.69231 25.6055 2.83106 25.6055 4.23077C25.6055 5.63048 24.4226 6.76923 22.9688 6.76923C21.5149 6.76923 20.332 5.63048 20.332 4.23077C20.332 2.83106 21.5149 1.69231 22.9688 1.69231ZM15 9.30769C15.9693 9.30769 16.7578 10.0669 16.7578 11C16.7578 11.9331 15.9693 12.6923 15 12.6923C14.0307 12.6923 13.2422 11.9331 13.2422 11C13.2422 10.0669 14.0307 9.30769 15 9.30769ZM7.03125 1.69231C8.48514 1.69231 9.66797 2.83106 9.66797 4.23077C9.66797 5.63048 8.48514 6.76923 7.03125 6.76923C5.57736 6.76923 4.39453 5.63048 4.39453 4.23077C4.39453 2.83106 5.57736 1.69231 7.03125 1.69231ZM1.75781 12.6923C1.75781 10.3595 3.7292 8.46154 6.15234 8.46154H7.96875C9.40072 8.46154 10.7506 9.14574 11.5686 10.266C11.3376 11.2674 11.5875 12.3003 12.2446 13.0983C10.7576 13.7773 9.72656 15.2362 9.72656 16.9231V20.3077H1.75781V12.6923ZM11.4844 20.3077V16.9231C11.4844 15.5234 12.6672 14.3846 14.1211 14.3846H15.8789C17.3328 14.3846 18.5156 15.5234 18.5156 16.9231V20.3077H11.4844ZM28.2422 20.3077H20.2734V16.9231C20.2734 15.2362 19.2424 13.7773 17.7554 13.0983C18.4119 12.301 18.6626 11.2683 18.4314 10.2661C19.2494 9.14568 20.5991 8.46154 22.0312 8.46154H23.8477C26.2708 8.46154 28.2422 10.3595 28.2422 12.6923V20.3077Z" fill="#4A7558"/>
                      </svg>

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
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333"/>
                      <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915"/>
                      </svg>
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
                      <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.5167 5.63811L19.9305 0.167897C19.7799 0.0587978 19.5983 0 19.4118 0C19.2253 0 19.0436 0.0587978 18.893 0.167897L12.7736 4.58117L7.63271 0.211472C7.47316 0.0750494 7.2695 2.50337e-06 7.05882 2.50337e-06C6.84815 2.50337e-06 6.64449 0.0750494 6.48494 0.211472L0.308471 5.46141C0.211615 5.54327 0.133861 5.64503 0.0805973 5.75964C0.0273335 5.87425 -0.000167054 5.99898 7.63455e-07 6.12518V14.8751C-6.30288e-05 14.99 0.0227162 15.1038 0.067036 15.21C0.111356 15.3162 0.176347 15.4127 0.258294 15.4939C0.34024 15.5752 0.437536 15.6396 0.544617 15.6836C0.651697 15.7275 0.766464 15.7501 0.882354 15.7501H8.82353V20.125C8.82347 20.2399 8.84625 20.3537 8.89057 20.4599C8.93489 20.5661 8.99988 20.6626 9.08182 20.7439C9.16377 20.8251 9.26107 20.8896 9.36815 20.9335C9.47523 20.9775 9.58999 21.0001 9.70588 21H29.1176C29.2335 21.0001 29.3483 20.9775 29.4554 20.9335C29.5625 20.8896 29.6598 20.8251 29.7417 20.7439C29.8237 20.6626 29.8886 20.5661 29.933 20.4599C29.9773 20.3537 30.0001 20.2399 30 20.125V15.7501C30 7.87516 27.5167 5.63811 27.5167 5.63811ZM1.76471 14.0001V6.52767L7.05882 2.02808L11.3069 5.63829L9.18715 7.16781C9.07444 7.24879 8.98271 7.35512 8.91949 7.47809C8.85628 7.60105 8.82339 7.73714 8.82353 7.87516V14.0001H1.76471ZM17.6471 19.25V12.2501H21.1765V19.25H17.6471ZM28.2353 19.25H22.9412V11.3751C22.9412 11.2602 22.9185 11.1464 22.8742 11.0402C22.8298 10.934 22.7648 10.8375 22.6829 10.7562C22.6009 10.675 22.5037 10.6105 22.3966 10.5666C22.2895 10.5226 22.1747 10.5001 22.0588 10.5001H16.7647C16.6488 10.5001 16.534 10.5226 16.427 10.5666C16.3199 10.6105 16.2226 10.675 16.1406 10.7562C16.0587 10.8375 15.9937 10.934 15.9494 11.0402C15.9051 11.1464 15.8823 11.2602 15.8824 11.3751V19.25H10.5882V8.32048L19.4118 1.95716L28.2353 8.32048V19.25ZM30 14.0001V7.87516C30.0002 7.73711 29.9673 7.60099 29.9041 7.47799C29.8409 7.35499 29.7491 7.24863 29.6364 7.16764L27.5167 5.63811L30 14.0001Z" fill="#4A7558"/>
                      </svg>
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
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333"/>
                      <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915"/>
                      </svg>
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
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.95152 0C7.35264 0 6.86719 0.485449 6.86719 1.08434V2.89136H2.16756C1.17105 2.89136 0.360352 3.70206 0.360352 4.69856V28.1925C0.360352 29.1891 1.17105 29.9998 2.16756 29.9998H27.8302C28.8267 29.9998 29.6374 29.1891 29.6374 28.1926V4.69862C29.6374 3.70212 28.8267 2.89136 27.8302 2.89136H23.4939V1.08434C23.4939 0.485449 23.0084 0 22.4095 0C21.8106 0 21.3252 0.485449 21.3252 1.08434V2.89136H9.03586V1.08434C9.03586 0.485449 8.55041 0 7.95152 0ZM21.3252 5.06003H9.03586V6.86748C9.03586 7.46637 8.55041 7.95182 7.95152 7.95182C7.35264 7.95182 6.86719 7.46637 6.86719 6.86748V5.06003H2.52902V10.1206H27.4688V5.06003H23.4939V6.86748C23.4939 7.46637 23.0084 7.95182 22.4095 7.95182C21.8106 7.95182 21.3252 7.46637 21.3252 6.86748V5.06003ZM2.52902 27.8311H27.4688H27.4688V12.2893H2.52902V27.8311ZM19.1582 21.6868H11.2064C10.6075 21.6868 10.1221 22.1722 10.1221 22.7711C10.1221 23.37 10.6075 23.8554 11.2064 23.8554H19.1582C19.7571 23.8554 20.2425 23.37 20.2425 22.7711C20.2425 22.1722 19.7571 21.6868 19.1582 21.6868ZM11.2064 16.6262H19.1582C19.7571 16.6262 20.2425 17.1116 20.2425 17.7106C20.2425 18.3095 19.7571 18.7949 19.1582 18.7949H11.2064C10.6075 18.7949 10.1221 18.3094 10.1221 17.7106C10.1221 17.1117 10.6075 16.6262 11.2064 16.6262Z" fill="#4A7558"/>
                        </svg>
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
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333"/>
                      <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915"/>
                      </svg>
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
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 14.9839C30 13.3412 28.868 11.9582 27.3432 11.5731V6.92865C28.868 6.54352 30 5.16059 30 3.51779C30 1.57805 28.422 0 26.4822 0C24.8459 0 23.467 1.12301 23.0756 2.63871H18.2875C17.8961 1.12301 16.5172 0 14.8809 0C13.2446 0 11.8657 1.12301 11.4743 2.63871H6.94834C6.55693 1.12301 5.17805 0 3.54176 0C1.60201 0 0.0239648 1.57811 0.0239648 3.51779C0.0239648 5.15057 1.14217 6.52682 2.65295 6.92162V11.574C1.1301 11.9604 0 13.3426 0 14.9839C0 16.6252 1.1301 18.0073 2.65295 18.3939V23.0462C1.14217 23.441 0.0239648 24.8173 0.0239648 26.45C0.0239648 28.3898 1.60201 29.9678 3.54176 29.9678C5.17805 29.9678 6.55693 28.8448 6.94834 27.3291H11.4743C11.8657 28.8448 13.2446 29.9678 14.8809 29.9678C16.5172 29.9678 17.8961 28.8448 18.2875 27.3291H23.0756C23.467 28.8448 24.8459 29.9678 26.4822 29.9678C28.422 29.9678 30 28.3897 30 26.45C30 24.8073 28.868 23.4243 27.3432 23.0392V18.3947C28.868 18.0096 30 16.6266 30 14.9839ZM26.4822 1.75822C27.4525 1.75822 28.2418 2.5476 28.2418 3.51779C28.2418 4.48799 27.4525 5.27736 26.4822 5.27736C25.512 5.27736 24.7226 4.48799 24.7226 3.51779C24.7226 2.5476 25.512 1.75822 26.4822 1.75822ZM14.8809 1.75822C15.8511 1.75822 16.6404 2.5476 16.6404 3.51779C16.6404 4.48799 15.8511 5.27736 14.8809 5.27736C13.9106 5.27736 13.1213 4.48799 13.1213 3.51779C13.1213 2.5476 13.9106 1.75822 14.8809 1.75822ZM1.78213 3.51785C1.78213 2.5476 2.57145 1.75828 3.5417 1.75828C4.51195 1.75828 5.30127 2.54766 5.30127 3.51785C5.30127 4.48805 4.51195 5.27742 3.54176 5.27742C2.57145 5.27742 1.78213 4.48805 1.78213 3.51785ZM1.75822 14.9839C1.75822 14.0136 2.54754 13.2244 3.51779 13.2244C4.48805 13.2244 5.27736 14.0137 5.27736 14.9839C5.27736 15.9541 4.48805 16.7435 3.51779 16.7435C2.54754 16.7435 1.75822 15.9541 1.75822 14.9839ZM3.54176 28.2095C2.5715 28.2095 1.78219 27.4202 1.78219 26.45C1.78219 25.4798 2.5715 24.6904 3.54176 24.6904C4.51201 24.6904 5.30133 25.4798 5.30133 26.45C5.30133 27.4202 4.51195 28.2095 3.54176 28.2095ZM16.6308 26.6341C16.5384 27.5181 15.789 28.2095 14.8809 28.2095C13.9106 28.2095 13.1213 27.4202 13.1213 26.45C13.1213 25.4798 13.9106 24.6904 14.8809 24.6904C15.7889 24.6904 16.5384 25.3819 16.6308 26.2658C16.6181 26.3252 16.6112 26.3868 16.6112 26.45C16.6112 26.5131 16.6181 26.5747 16.6308 26.6341ZM23.0756 25.5708H18.2875C17.8961 24.0551 16.5172 22.9321 14.8809 22.9321C13.2446 22.9321 11.8657 24.0551 11.4743 25.5708H6.94834C6.62871 24.333 5.65037 23.3572 4.41117 23.0411V18.3864C5.91961 17.99 7.0357 16.615 7.0357 14.9838C7.0357 13.3527 5.91967 11.9777 4.41117 11.5813V6.92666C5.65037 6.61043 6.62871 5.63473 6.94834 4.39687H11.4743C11.8657 5.91258 13.2446 7.03559 14.8809 7.03559C16.5172 7.03559 17.8961 5.91258 18.2875 4.39687H23.0756C23.3929 5.62541 24.359 6.5956 25.585 6.91922V11.5824C24.0785 11.9801 22.9644 13.3541 22.9644 14.9838C22.9644 16.6136 24.0785 17.9876 25.585 18.3853V23.0485C24.359 23.3721 23.3929 24.3422 23.0756 25.5708ZM28.2418 26.45C28.2418 27.4202 27.4525 28.2095 26.4822 28.2095C25.512 28.2095 24.7226 27.4202 24.7226 26.45C24.7226 25.4798 25.512 24.6904 26.4822 24.6904C27.4525 24.6903 28.2418 25.4797 28.2418 26.45ZM26.4822 16.7435C25.512 16.7435 24.7226 15.9541 24.7226 14.9839C24.7226 14.0137 25.512 13.2244 26.4822 13.2244C27.4525 13.2244 28.2418 14.0137 28.2418 14.9839C28.2418 15.9541 27.4525 16.7435 26.4822 16.7435Z" fill="#4A7558"/>
                      </svg>

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
                      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511Z" fill="#333333"/>
                      <path d="M12.8696 2.38511L7.32141 8.04289C7.08786 8.28128 6.71054 8.28128 6.47639 8.04289L0.928221 2.38511C0.590333 2.04097 0.590333 1.48106 0.928221 1.13631C1.26611 0.792178 1.8145 0.792178 2.15238 1.13631L6.8992 5.97623L11.6448 1.13631C11.9833 0.792178 12.5317 0.792178 12.8696 1.13631C13.2075 1.48106 13.2075 2.04097 12.8696 2.38511" stroke="#333333" strokeWidth="0.623915"/>
                      </svg>
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
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.356 5.0791H16.1021C15.6773 5.0791 15.333 5.42343 15.333 5.84814V13.2822H1.64404C1.21933 13.2822 0.875 13.6266 0.875 14.0513V26.356C0.875 26.7807 1.21933 27.125 1.64404 27.125H26.356C26.7807 27.125 27.125 26.7807 27.125 26.356V5.84814C27.125 5.42343 26.7807 5.0791 26.356 5.0791ZM16.8711 6.61719H25.5869V13.2822H16.8711V6.61719ZM2.41309 14.8203H15.333V16.3584H2.41309V14.8203ZM2.41309 17.8965H11.2314V25.5869H2.41309V17.8965ZM12.7695 17.8965H15.333V25.5869H12.7695V17.8965ZM16.8711 25.5869V14.8203H25.5869V25.5869H16.8711Z" fill="#4A7558"/>
                        <path d="M1.64404 11.1289H12.9233C13.3481 11.1289 13.6924 10.7846 13.6924 10.3599V8.30908C13.6924 8.08457 13.5943 7.87129 13.4238 7.72517L10.1035 4.8792V1.64404C10.1035 1.21933 9.75919 0.875 9.33447 0.875H5.23291C4.80819 0.875 4.46387 1.21933 4.46387 1.64404V4.8792L1.14355 7.72517C0.97313 7.87129 0.875 8.08457 0.875 8.30908V10.3599C0.875 10.7846 1.21933 11.1289 1.64404 11.1289ZM6.00195 2.41309H8.56543V4.46387H6.00195V2.41309ZM2.41309 8.66279L5.51741 6.00195H9.04998L12.1543 8.66279V9.59082H2.41309V8.66279Z" fill="#4A7558"/>
                        <path d="M19.1782 8.66797C18.7535 8.66797 18.4092 9.01229 18.4092 9.43701V10.9751C18.4092 11.3998 18.7535 11.7441 19.1782 11.7441C19.6029 11.7441 19.9473 11.3998 19.9473 10.9751V9.43701C19.9473 9.01229 19.6029 8.66797 19.1782 8.66797Z" fill="#4A7558"/>
                        <path d="M19.1782 16.3584C18.7535 16.3584 18.4092 16.7027 18.4092 17.1274V18.6655C18.4092 19.0902 18.7535 19.4346 19.1782 19.4346C19.6029 19.4346 19.9473 19.0902 19.9473 18.6655V17.1274C19.9473 16.7027 19.6029 16.3584 19.1782 16.3584Z" fill="#4A7558"/>
                        <path d="M8.92432 20.2036C8.4996 20.2036 8.15527 20.5479 8.15527 20.9727V22.5107C8.15527 22.9355 8.4996 23.2798 8.92432 23.2798C9.34903 23.2798 9.69336 22.9355 9.69336 22.5107V20.9727C9.69336 20.5479 9.34903 20.2036 8.92432 20.2036Z" fill="#4A7558"/>
                      </svg>
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
                      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5354 13.0391V12.4678C28.5354 11.4152 27.9905 10.4881 27.1685 9.95197V3.71947C27.1685 2.07967 25.8344 0.745605 24.1946 0.745605H5.80541C4.16561 0.745605 2.83148 2.07967 2.83148 3.71947V9.95191C2.00941 10.488 1.46449 11.4152 1.46449 12.4677V13.039C0.622734 13.2607 0 14.0283 0 14.9387V21.624C0 22.6758 0.830977 23.5369 1.87084 23.5859V24.377C1.87084 24.8615 2.26359 25.2543 2.74805 25.2543C3.2325 25.2543 3.62525 24.8615 3.62525 24.377V23.5882H26.3747V24.377C26.3747 24.8615 26.7674 25.2543 27.2519 25.2543C27.7363 25.2543 28.1291 24.8615 28.1291 24.377V23.5859C29.169 23.5369 30 22.6757 30 21.624V14.9387C30 14.0282 29.3773 13.2607 28.5354 13.0391ZM4.58596 3.71947C4.58596 3.04705 5.13299 2.50002 5.80541 2.50002H24.1946C24.867 2.50002 25.414 3.04705 25.414 3.71947V9.46558H24.2444V7.91941C24.2444 6.83719 23.364 5.9567 22.2817 5.9567H17.5615C16.4793 5.9567 15.5988 6.83719 15.5988 7.91941V9.46558H14.4012V7.91941C14.4012 6.83719 13.5207 5.9567 12.4385 5.9567H7.71832C6.63603 5.9567 5.75561 6.83719 5.75561 7.91941V9.46558H4.58596V3.71947ZM22.4899 7.91935V9.25728C22.4899 9.37213 22.3965 9.46553 22.2817 9.46553H17.5615C17.4466 9.46553 17.3532 9.37207 17.3532 9.25728V7.91935C17.3532 7.80451 17.4467 7.71111 17.5615 7.71111H22.2817C22.3965 7.71111 22.4899 7.80451 22.4899 7.91935ZM12.6468 7.91935V9.25728C12.6468 9.37213 12.5533 9.46553 12.4385 9.46553H7.71832C7.60348 9.46553 7.51008 9.37207 7.51008 9.25728V7.91935C7.51008 7.80451 7.60354 7.71111 7.71832 7.71111H12.4385C12.5533 7.71111 12.6468 7.80451 12.6468 7.91935ZM3.21896 12.4677C3.21896 11.7797 3.77871 11.22 4.46672 11.22H25.5333C26.2213 11.22 26.781 11.7797 26.781 12.4677V12.9744H3.21896V12.4677ZM28.2455 21.624C28.2455 21.7396 28.1514 21.8337 28.0357 21.8337H1.96424C1.84857 21.8337 1.75441 21.7396 1.75441 21.624V14.9387C1.75441 14.823 1.84852 14.7289 1.96424 14.7289H28.0358C28.1514 14.7289 28.2456 14.823 28.2456 14.9387V21.624H28.2455Z" fill="#4A7558"/>
                      </svg>
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

              {/* <FormGroup className='info-form px-3'>
                <div className='info-form-icons'>
                  <div className='info-form-icon'>
                    <i>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 14.7266C26 13.4665 24.9749 12.4414 23.7148 12.4414H21.2479C20.9335 11.5548 20.0868 10.918 19.0938 10.918H16.0469C15.0538 10.918 14.2072 11.5548 13.8927 12.4414H3.09766V3.80859C3.09766 2.54856 4.12278 1.52344 5.38281 1.52344H6.90625C7.93589 1.52344 8.80836 2.20812 9.09309 3.146C7.40609 3.53707 6.14453 5.05121 6.14453 6.85547V7.61719H13.7617V6.85547C13.7617 4.99342 12.4181 3.44028 10.6498 3.11188C10.3214 1.34352 8.7683 0 6.90625 0H5.38281C3.28275 0 1.57422 1.70854 1.57422 3.80859V12.5552C0.661324 12.8549 0 13.7147 0 14.7266C0 15.7384 0.661324 16.5983 1.57422 16.8979V19.2969C1.57422 21.29 2.67368 23.0309 4.29777 23.9458L3.85938 24.3842C3.56192 24.6816 3.56191 25.1639 3.85936 25.4614C4.15682 25.7589 4.63911 25.7589 4.93657 25.4614L5.87036 24.5276C6.20562 24.5938 6.5519 24.6289 6.90625 24.6289H19.0938C19.4481 24.6289 19.7944 24.5938 20.1296 24.5275L21.0634 25.4614C21.3609 25.7588 21.8432 25.7589 22.1407 25.4614C22.4381 25.1639 22.4381 24.6816 22.1407 24.3842L21.7023 23.9458C23.3263 23.0309 24.4258 21.29 24.4258 19.2969V16.8979C25.3387 16.5983 26 15.7384 26 14.7266ZM12.1078 6.09375H7.79848C8.11286 5.20706 8.96005 4.57031 9.95312 4.57031C10.9462 4.57031 11.7934 5.20706 12.1078 6.09375ZM15.2852 13.2031C15.2852 12.7831 15.6269 12.4414 16.0469 12.4414H19.0938C19.5138 12.4414 19.8555 12.7831 19.8555 13.2031V17.0117H15.2852V13.2031ZM2.28516 13.9648H13.7617V15.4883H2.28516C1.86514 15.4883 1.52344 15.1466 1.52344 14.7266C1.52344 14.3066 1.86514 13.9648 2.28516 13.9648ZM19.0938 23.1055H6.90625C4.80619 23.1055 3.09766 21.3969 3.09766 19.2969V17.0117H13.7617V18.5352H21.3789V17.0117H22.9023V19.2969C22.9023 21.3969 21.1938 23.1055 19.0938 23.1055ZM23.7148 15.4883H21.3789V13.9648H23.7148C24.1349 13.9648 24.4766 14.3066 24.4766 14.7266C24.4766 15.1466 24.1349 15.4883 23.7148 15.4883Z" fill="#4A7558"/>
                    </svg>

                    </i>
                  </div>
                  <div className='info-form-icon-name'>
                    Number of bathrooms
                  </div>
                </div>
                <div className='info-form-val'>
                  <NumericInput mobile className="form-control" value={counttwo} onChange={counttwo => setCounttwo(counttwo)} />
                </div>
              </FormGroup> */}

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