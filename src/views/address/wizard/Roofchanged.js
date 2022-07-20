import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Input, FormGroup, Col, Button, Container } from 'reactstrap'

const Roofchanged = ({ stepper, type }) => {
  const [roofYear, setRoofYear ] = useState(0)

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
      <Container id='roofchangeAddr'>
        <h3 className='info-content-title text-center mb-5'>When was the last time your roof was replaced?</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup tag={Col} md='6'>
            <Input
              type='number'
              name={`year-${type}`}
              id={`year-${type}`}
              className='roof-year-input'
              placeholder='YYYY'
              value={roofYear}
              onChange={e => setRoofYear(e.target.value)}
              autoFocus
              required
            />
          </FormGroup>
          <div className='d-flex justify-content-between paganation-position'>
            <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
              <span className='align-middle d-sm-inline-block d-none'>Back</span>
            </Button>
            <Button type='submit' color='primary' className='btn-next' disabled={roofYear > 2022 || roofYear <1990 ? true : false}>
              <span className='align-middle d-sm-inline-block d-none'>Next</span>
            </Button>
          </div>
        </Form>
      </Container>
      
    </Fragment>
  )
}

export default Roofchanged
