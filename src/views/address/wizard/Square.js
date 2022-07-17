import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Label, Input, FormGroup, Container, Button } from 'reactstrap'

const Square = ({ stepper, type }) => {

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
      <Container className='Square'>
        <Form onSubmit={handleSubmit(onSubmit)} className='form-house-address'>
          <h3 className='what-your-addr'>What is your address?</h3>
          <FormGroup className='mt-5'>
            <Label className='form-label house-addr'>
              Address
            </Label>
            <Input
              type='text'
              name={`addr-${type}`}
              id={`addr-${type}`}
              className='house-addr-input'
              placeholder='1 Main Rd, California'
              required
            />
          </FormGroup>
          <div className='d-flex justify-content-between paganation-position'>
            <Button className='btn-prev btn-white' outline disabled>
              <span className='prev-text'>Back</span>
            </Button>
            <Button type='submit' color='primary' className='btn-next btn-primary'>
              <span className='next-text'>Next</span>
            </Button>
          </div>
        </Form>
      </Container>
    </Fragment>
  )
}

export default Square
