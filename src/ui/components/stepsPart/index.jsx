import React from 'react'
import { Steps, Button, message } from 'antd';
// import '../stepsPart2/node_modules/antd/dist/antd.css';
import { Container } from 'react-bootstrap';
const { Step } = Steps;


const steps = [
    {
      title: '. Sign up',
      content: 'First of all you need to sign up to be able to enjoy our services for free ',
    },
    {
      title: 'Post a job',
      content: 'Your Posted details will be reviewed and taken as a contest by graphic designers across Ghana.',
    },
    {
      title: 'Know The Price Upfront',
      content: 'Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.',
    },
    {
      title: 'Providing information',
      content: 'Customers have to provide all necessary information about the project. Every customer has only three (3) times to make changes. ',
    },
    {
      title: 'Make Payments',
      content: 'Payment is released to the freelancer once you’re pleased and approved the work you get. Make 100% payment through JUSTCLICKGH once you post a job. Pay fixed-price and receive invoices through JUSTCLICKGH. Get 100% refunded for Graphic Designed jobs rejected',
    },
  ];


const StepsPart = ({card1,card2,card3}) => {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    return (
        <>
        <Container className = "bg-light">
            <h2 className = "text-center my-3 py-4">How it works For Clients</h2>
        <Steps   current={current}>
          {steps.map(item => (
            <Step  key={item.title} title={item.title}  />
          ))}
        </Steps>
        <div className="steps-content ">

        <p className = "container mx-auto my-5 text-center">
        {steps[current].content}
        </p>
        </div>
        <div  className="steps-action">
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

export default StepsPart
