import { useRef, useState } from 'react'
import Wizard from '../../components/wizard'
import Addrstep from './wizard/Addrstep'
import Information from './wizard/Information'
import Uploadpic from './wizard/Uploadpic'
import Recommendations from './wizard/Recommendations'
import Square from './wizard/Square'
import Roofchanged from './wizard/Roofchanged'
import Renovate from './wizard/Renovate'

const Address = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'address',
      title: 'Address',
      subtitle: '',
      content: <Addrstep stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'information',
      title: 'Information about home',
      subtitle: '',
      content: <Information stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'uploadpic',
      title: 'Upload pictures',
      subtitle: '',
      content: <Uploadpic stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'renovate',
      title: 'What renovate',
      subtitle: '',
      content: <Renovate stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      subtitle: '',
      content: <Recommendations stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'square',
      title: 'Square footage',
      subtitle: '',
      content: <Square stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'roofchanged',
      title: 'When the roof was changed',
      subtitle: '',
      content: <Roofchanged stepper={stepper} type='wizard-horizontal' />
    }]
  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default Address
