// ** React Imports
import { useEffect, useState, Fragment, forwardRef } from 'react'

// ** Third Party Components
import Stepper from 'bs-stepper'
import classnames from 'classnames'
import { PropTypes } from 'prop-types'
// import { ChevronRight } from 'react-feather'

// ** Styles
import 'bs-stepper/dist/css/bs-stepper.min.css'
import '../../assets/scss/base/form-wizard.scss'

const Wizard = forwardRef((props, ref) => {
  // ** Props
  const { type, className, steps, separator, options, instance } = props

  // ** State
  const [activeIndex, setActiveIndex] = useState(0)

  // ** Vars
  let stepper = null

  // ** Step change listener on mount
  useEffect(() => {
    stepper = new Stepper(ref.current, options)

    ref.current.addEventListener('shown.bs-stepper', function (event) {
      setActiveIndex(event.detail.indexStep)
    })

    if (instance) {
      instance(stepper)
    }
  }, [])

  // ** Renders Wizard Header
  const renderHeader = () => {
    return steps.map((step, index) => {
      return (
        <Fragment key={step.id}>
            {index === 0 ? (
              <div className='address-logo'>
                <i>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29304 6.4595V11.1627H9.43304V5.03548L8.29304 6.4595Z" fill="#93795D"/>
                    <path d="M12.853 11.1627V6.45992L11.713 5.0359V11.1627H12.853Z" fill="#93795D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1282 0.213772C10.3564 -0.071257 10.7897 -0.0712573 11.0179 0.213771L21.0198 12.7076C21.3188 13.0811 21.0532 13.6348 20.575 13.6348H0.57107C0.0929241 13.6348 -0.172732 13.0811 0.126241 12.7076L10.1282 0.213772ZM2.15386 12.3037L10.573 1.78696L18.9922 12.3037H2.15386Z" fill="#93795D"/>
                    <path d="M2.97303 3.65145H5.91521L5.00182 4.79241H3.54303V6.61463L2.40303 8.03865V4.22193C2.40303 3.90686 2.65823 3.65145 2.97303 3.65145Z" fill="#93795D"/>
                    <path d="M3.54303 20.0051V14.7757H2.40303V20.5756C2.40303 20.8907 2.65823 21.1461 2.97303 21.1461H8.86304C9.17784 21.1461 9.43304 20.8907 9.43304 20.5756V14.7757H8.29304V20.0051H3.54303Z" fill="#93795D"/>
                    <path d="M11.713 20.5756V14.7757H12.853V20.0051H17.603V14.7757H18.743V20.5756C18.743 20.8907 18.4878 21.1461 18.173 21.1461H12.283C11.9682 21.1461 11.713 20.8907 11.713 20.5756Z" fill="#93795D"/>
                    <path d="M17.603 4.79241V6.61505L18.743 8.03907V4.22193C18.743 3.90686 18.4878 3.65145 18.173 3.65145H15.2305L16.1439 4.79241H17.603Z" fill="#93795D"/>
                  </svg>
                </i>
                <span className='address-logo-title'>
                  HOUSETABLE
                </span>
              </div>
            ) : (
              ''
            )}
            {index !== 0 && index !== steps.length ? <div className='line'>{separator}</div> : null}
            <div
              className={classnames('step', {
                crossed: activeIndex > index,
                active: index === activeIndex
              })}
              data-target={`#${step.id}`}
            >
              <button type='button' className='step-trigger'>
                <span className='bs-stepper-box'>
                  <span className='step-crossed-num'>
                    {step.icon ? step.icon : index + 1}
                  </span>
                  <i className='step-crossed-icon'>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.04297 0.211327L3.30013 4.274L0.985779 1.43836C0.757185 1.15653 0.400041 1.15653 0.171445 1.43836C-0.0571484 1.72019 -0.0571484 2.16051 0.171445 2.44234L2.88572 5.78875C3.00002 5.92966 3.14281 6.00006 3.28572 6.00006C3.42863 6.00006 3.57141 5.92966 3.68572 5.78875L8.82856 1.21531C9.05715 0.93348 9.05715 0.493161 8.82856 0.211327C8.62866 -0.0703809 8.25721 -0.0705038 8.04297 0.211327Z" fill="black"/>
                    </svg>
                  </i>
                </span>
                <span className='bs-stepper-label'>
                  <span className='bs-stepper-title'>{step.title}</span>
                  {step.subtitle ? <span className='bs-stepper-subtitle'>{step.subtitle}</span> : null}
                </span>
              </button>
            </div>
        </Fragment>
      )
    })
  }

  // ** Renders Wizard Content
  const renderContent = () => {
    return steps.map((step, index) => {
      return (
        <div
          className={classnames('content', {
            'active dstepper-block': activeIndex === index
          })}
          id={step.id}
          key={step.id}
        >
          {step.content}
        </div>
      )
    })
  }

  return (
    <div
      ref={ref}
      className={classnames('bs-stepper', {
        [className]: className,
        vertical: type === 'vertical',
        'vertical wizard-modern': type === 'modern-vertical',
        'wizard-modern': type === 'modern-horizontal'
      })}
    >
      <div className='bs-stepper-header'>{renderHeader()}</div>
      <div className='bs-stepper-header-bottom'></div>
      <div className='bs-stepper-content'>{renderContent()}</div>
    </div>
  )
})

export default Wizard

// ** Default Props
Wizard.defaultProps = {
  type: 'horizontal',
  separator: <div size={17} />,
  options: {}
}

// ** PropTypes
Wizard.propTypes = {
  type: PropTypes.string,
  instance: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  separator: PropTypes.element,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.any,
      content: PropTypes.any.isRequired
    })
  ).isRequired
}
