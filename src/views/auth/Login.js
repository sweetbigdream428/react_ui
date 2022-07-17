import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {
    Row,
    Col,
    Container,
    CardTitle,
    Form,
    Input,
    FormGroup,
    Label,
    Button
} from 'reactstrap'
import loginImg from '../../assets/images/auth/login.png'

const Login = () => {
    const [email, setEmail] = useState('admin@housetable.com')
    const [password, setPassword] = useState('admin@housetable.com')
    const { handleSubmit } = useForm()

    const onSubmit = data => {
        alert('submitted')
    }

    return (
        <div className="auth-loginpage">
            <Row className='auth-inner m-0'>
                <Col className='d-flex align-items-center login-form mt-md-0 mt-5' lg='6' sm='12'>
                    <Container className='d-flex justify-content-center'>
                        <div className='auth-login-col'>
                            <CardTitle tag='h2' className='font-weight-bold sigin-text'>
                                Sign In
                            </CardTitle>

                            <Form className='auth-login-form mt-4' onSubmit={handleSubmit(onSubmit)}>
                                <FormGroup>
                                    <Label className='form-label font12' for='login-email'>
                                    Email
                                    </Label>
                                    <Input
                                    autoFocus
                                    type='email'
                                    value={email}
                                    id='login-email'
                                    className='height47 letter1'
                                    name='login-email'
                                    placeholder='john@example.com'
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <div className='d-flex justify-content-between'>
                                    <Label className='form-label font12' for='login-password'>
                                        Password
                                    </Label>
                                    </div>
                                    <Input
                                    type="password"
                                    value={password}
                                    id='login-password'
                                    className='height47'
                                    name='login-password'
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <Button type='submit' className='mt-4 bg-primary height47 font12 letter13' block>
                                    Sign in
                                </Button>
                            </Form>
                            <FormGroup className='d-flex justify-content-between align-items-center mt-3'>
                                <FormGroup className='d-flex align-items-center'>
                                    <Input type='checkbox' className='font12 mt-0' id='remember-me'/>
                                    <Label className='font12 mb-0' for='remember-me'>
                                        &nbsp; Remember Me
                                    </Label>
                                </FormGroup>
                                <Link to='#' className='text-decoration-none mb-3'>
                                    <span className='text-primary font12 letter3'>Forgot Password?</span>
                                </Link>
                            </FormGroup>
                            <FormGroup className='text-center go-register'>
                                <Link to='#' className='text-decoration-none'>
                                    <span className='font12 text-black'>
                                        Don't have an account yet?
                                    </span>
                                </Link>
                            </FormGroup>
                        </div>
                    </Container>
                </Col>
                <Col className='d-lg-flex align-items-center login-back d-none' lg='6' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center'>
                        <img className='img-fluid img-auth' src={loginImg} alt='Login' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login
