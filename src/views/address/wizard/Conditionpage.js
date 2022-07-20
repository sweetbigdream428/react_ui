import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Label, Input, FormGroup, Container, Button } from 'reactstrap'

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
      <Container id='addressAddr'>
        <Form onSubmit={handleSubmit(onSubmit)} className='form-house-address'>
          <h3 className='what-your-addr'>Condition</h3>
          <FormGroup className='mt-5'>
            <Label className='form-label house-addr'>
            Condition
            </Label>
          </FormGroup>
          <div className='d-flex justify-content-between paganation-position'>
            <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
              <span className='align-middle d-sm-inline-block d-none'>Back</span>
            </Button>
            <Button color='primary' className='btn-next'>
              <span className='align-middle d-sm-inline-block d-none'>Next</span>
            </Button>
          </div>
        </Form>
      </Container>
    </Fragment>
  )
}

export default ConditionPage
