import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Label, Input, FormGroup, Col, Button } from 'reactstrap'

const Roofchanged = ({ stepper, type }) => {

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
        <h5 className='mb-0'>infomation</h5>
        {/* <small className='text-muted'>Enter Your Account Details.</small> */}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup tag={Col} md='6'>
          <Label className='form-label' for={`email-${type}`}>
            infomation
          </Label>
          <Input
            type='email'
            name={`email-${type}`}
            id={`email-${type}`}
            placeholder='1 Main Rd, California'
            required
          />
        </FormGroup>
        <div className='d-flex justify-content-between paganation-position'>
          <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Roofchanged
