import React from 'react'
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css';
import { Container } from 'react-bootstrap';
const { Step } = Steps;


const steps = [
    {
      title: 'Sign up',
      content: 'First of all you need to sign up as a service provider to be able to join justclickgh for free  ',
    },
    {
      title: 'Email Confirmation',
      content: 'An email will be sent to the email provided during registration to confirm the email account. If email is not confirmed, account will be deactivated and deleted after 10 days',
    },
    {
      title: 'Know The Price Upfront',
      content: 'Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.',
    },
    {
      title: 'Setup your profile',
      content: 'On your profile page of your dashboard, set up your profile to confirm your exppertise and uploa neccassary documents',
    },
    {
      title: 'Wait for Aproval',
      content: 'Admins for justclick will confirm your account after profile set up has been completed. Account may not be confir,ed if profile provided is found to be fraud or does not meet the standard fo the company',
    },
    {
      title: 'You are part of us',
      content: 'always be online to check for job updates ( categories )',
    },
  ];


const StepsPart2 = ({card1,card2,card3}) => {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    return (
        <>
        <Container className = "bg-dark">
            <h2 style = {{color:"white"}} className = "text-center my-3 py-4">How it works For Creative Person</h2>
        <Steps   current={current}>
          {steps.map(item => (
            <Step style = {{color:"white"}} key={item.title} title={<p style = {{color:"white"}}>{item.title}</p>}  />
          ))}
        </Steps>
        <div className="steps-content ">

        <p style = {{color:"white"}} className = "container mx-auto my-5 text-center">
        {steps[current].content}
        </p>
        </div>
        <div  className="steps-action p-3">
          {current < steps.length - 1 && (
            <Button shape = "round" type="" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button shape = "round" type="" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button shape = "round" style={{ margin: '0 8px',backgroundColor:"green" ,color:"white"}} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        </Container>
      </>
    )
}

export default StepsPart2
