import React from 'react'
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css';
import { Container } from 'react-bootstrap';
const { Step } = Steps;


const steps = [
    {
      title: 'First',
      content: 'It works as it is expected to. Many of which we are still trying to figure it out. Only Gog knows when we are going to finish withe project but it is well',
    },
    {
      title: 'Second',
      content: 'It works as it is expected to. Many of which we are still trying to figure it out. Only Gog knows when we are going to finish withe project but it is well',
    },
    {
      title: 'Last',
      content: 'It works as it is expected to. Many of which we are still trying to figure it out. Only Gog knows when we are going to finish withe project but it is well',
    },
  ];


const CustomSteps = ({card1,card2,card3}) => {

    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    return (
        <>
        <Container>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}  />
          ))}
        </Steps>
        <div className="steps-content">

        {steps[current].content}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur ex ad nemo inventore rerum quo, incidunt magnam laborum accusantium provident minima fugiat quidem nam eligendi aliquam repellat reprehenderit praesentium.</p>
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        </Container>
      </>
    )
}

export default CustomSteps
