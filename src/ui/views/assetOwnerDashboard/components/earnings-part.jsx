import { Breadcrumb, Button, Form, Card, Input, InputNumber, Modal, Select, Statistic,  message, notification, Result } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from '../../../../utils/hooks/use_form'
// import banks from '../../../../utils/supported_banks/banks.json'
import axios from 'axios'
import { banks } from '../../../../utils/supported_banks/banks'
import { momo } from '../../../../utils/supported_banks/momo'
import getAuthToken from '../../../../utils/get_auth_token'
import { createPaymentRecpeintPath, verify_payment_account } from '../../../../utils/network_utils/endpoints'
// import {err} from '../../../../utils/ui_utils/custom_toast'
const EarningsPart = () => {

    
const [values, handleChange] = useForm({
    amount:0
})
const [state,setState] = useState({
cashout_modal_visible:false,
cur_form_page:1,
// bank_list:[],
account_type:"momo",
verify_loading:false,
bank_code:"",
account_name:"",
bank_code_error:[],
account_number_error:[],
succes_modal_visible:false,
failed_modal_visible:false,
initiate_modal_visible:false,
succes_message:"Your account has been resolved succesfully",
create_recieptient_loading:false,



})

const [accInfo,setInfo] = useState({
acc_name:"",
acc_number:""
})


useEffect(() => {
}, [])



const cancelCahoutModal = ()=>{
    setState({
        ...state,
        cashout_modal_visible:false
    })
}

const showCashoutModal = ()=>{
    setState({
        ...state,
        cashout_modal_visible:true
    })
}
const cashout = ()=>{
    if(state.cur_form_page === 1){
        setState({
            ...state,
            cur_form_page: 2
        })
    }else{
        setState({
            ...state,
            cashout_modal_visible:false
        })

    }
}

const toglenLoading = ()=>{
    setState({
        ...state,
        verify_loading:!state.verify_loading
    })
}


 const verifyAccount = e=>{
    e.preventDefault()
toglenLoading()
    const token = getAuthToken()
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
            
        }
    // const data = {
    //     bank_code:state.bank_code,
    //     account_number:values.account_number
    // }
    const fd  = new FormData()
    fd.append('bank_code',state.bank_code)
    fd.append('account_number',values.account_number)
    // console.log(data);
    axios.post(verify_payment_account,fd,config).then(res=>{
        console.log(res.data.data);
        setInfo({
            ...accInfo,
            acc_name:res.data.data.account_name,
            acc_number:res.data.data.account_number
        })
        setState({
            ...state,
            verify_loading:false,
            account_name:res.data.data.account_name,
            cashout_modal_visible:true,
        })
        console.log(state.acc_name);
        showSuccessModal()
    }).catch(error=>{
        setState({
            ...state,
            verify_loading:false
        })
        if(error.response){
            console.log(error.response);
            if(error.response.status ===400){

            }else{
                notification.error({
                    title:"Account not resolved",
                    description:error.response.data.message
                })
            }
            
        }else if(error.request){
            notification.error({
                title:"Network error",
                description:"Check internet connection and try again"
            })
        }
    })

}

// const showInitaiteModal = ()=>{
//     setState({
//         ...state,
//         initiate_modal_visible:true
//     })
// }
   
    const handleCreateRecipient =(e)=>{
        e.preventDefault()
        const token = getAuthToken()
        if (token === null){
            notification.error({
                description:"Session has expired \n Please login"
            })
        }else{
            setState({
                ...state,
                create_recieptient_loading:true
            })
            const config = {
                headers : {
                    "Content-Type":'application/json',
                    "Authorization":`Bearer ${token}`
                }
            }
            const fd  = new FormData()
            fd.append("bank_code",state.bank_code)
            fd.append("name",accInfo.acc_name)
            fd.append("account_number",accInfo.acc_number)
            // fd.append('amount',values.amount)
            
            axios.post(createPaymentRecpeintPath,fd,config).then(res=>{
                setState({
                    ...state,
                    reciepient:res.data.data.recipient_code,
                    initiate_modal_visible:false,
                    create_recieptient_loading:false
                })
               
                    
            }).catch(err=>{
                setState({
                    create_recieptient_loading:false,
                    cur_form_page:state.cur_form_page ,
                })
                console.log(err.response);
                if(err.response){
                    console.log(err.response);
                    // message.error("Error occured")
                    notification.error({
                        description:err.response.data.detail
                    })
                    
                }else if(err.request){
                    message.error("Network Error, Check inernet connection and try again")
                }
            })
        }
       
    }


const initTansactionModal = <Modal visible = {state.initiate_modal_visible}  

footer = {[]}
>
                <h5 className = "text-center my-3" >INITIATE TRANSACTION </h5>
                <p className = "ml-5 pl-3" >Enter Amount you wish to cashout. <br/>
               Amount should not be less than GHS 20.00 
                </p>
                <Form>
                    <Form.Item label = "Amount"  >
                        <Input 
                        value = {values.amount}
                        onChange = {handleChange}
                        style = {{height:"45px",borderRadius:"10px"}} type = "number"  max = {state.earnings} min = {0} />
                    </Form.Item>
                    <Button onClick = {handleCreateRecipient} shape = "round" style = {{marginLeft:"4.5em",width:"87%",height:"50px",color:"green",borderColor:"green"}}>Submit</Button>
                </Form>
</Modal>
    const cahoutModal =<Modal 
    onCancel = {cancelCahoutModal}
    onOk = {cashout}
    visible = {state.cashout_modal_visible}
    title = {<h5 className = "text-center" >Verify account</h5>}
    footer={[
        <Button  style = {{color:"red"}} key="back" onClick={cancelCahoutModal}>
          Cancel
        </Button>
      ]}
    >,

      {
          state.cur_form_page === 1?(
              <>
              {/* <Progress type = "circle" /> */}
    <Form   
        id = "cashout-form"
       layout="vertical"
        >
            <Form.Item label = "Account type"  help = "Choose to be paid to momo or theough bank account" >
                <Select
                value = {state.account_type}
                onChange = {(value)=>{
                    setState({
                        ...state,
                        account_type:value
                    })
                }}
                >
                    <Select.Option value = "momo" > Mobile money </Select.Option>
                    <Select.Option value = "bank" > Bank Account</Select.Option>
                </Select>

            </Form.Item>



            <Form.Item
            name = "momo"
            rules = {[
                {
                    required:true,
                    message:"This field is required"
                }
            ]}

            hidden = {state.account_type !== 'momo'} label = "Network Operator" className="Item">
                <Select showSearch placeholder = "Select Network operator"
                onChange = {value=>{
                    setState({
                        ...state,
                        bank_code:momo.filter(item=>item.name ===value)[0].code
                    })
                }} >   
                {
                    momo.map(momo=>(
                        <Select.Option value = {momo.name} >
                            {momo.name}
                        </Select.Option>
                    ))
                }
                </Select>
                </Form.Item>


            
            <Form.Item 
            name = "bank"
            rules = {[
                {
                    required:true,
                    message:"This field is required"
                }
            ]}
            
            hidden = {state.account_type !== "bank"} label = "Choose bank" className="Item">
                <Select showSearch placeholder = "Select by bank code"
                // filterOption = {(input,option)=> option.options.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                onChange = {value=>{
                    setState({
                        ...state,
                        bank_code:banks.filter(item=>item.name ===value)[0].code
                    })
                }} >   
                {
                    banks.map(bank=>(
                        <Select.Option value = {bank.name} >
                            {`${bank.name}`}
                        </Select.Option>
                    ))
                }
                </Select>
                </Form.Item>

                <Form.Item 
                name = "account_number"
                    rules = {[
                        {
                            required:true,
                            message:"This field is required"
                        }
                    ]}
                label = "Account Number">
                    <Input  name = "account_number" value = {values.account_number} onChange = {handleChange} placeholder = "Enter account number"/>
                </Form.Item>

                <Button loading = {state.verify_loading } onClick = {verifyAccount} style = {{width:"100%",height:"50px", marginLeft:"auto",borderColor:"green",color:"green" }} shape = "round" htmlType = "submit">Verify Account</Button>
        
            </Form>
              </>
          ):(
              <>
                <Form>
                    <Form.Item label = "Amount"  >
                        <InputNumber  max = {state.earnings} min = {0} />
                    </Form.Item>
                </Form>
              </>
          )
      }

  
    </Modal>

const handleSuccessModalOk = ()=>{
    
}

const handleSuccessModalClose= ()=>{
    setState({
        ...state,
        succes_modal_visible:false,
        // acc_name:"",
        // acc_number:""
    })
}

const showSuccessModal = ()=>{
    setState({
        ...state,
        cashout_modal_visible:false,
        succes_modal_visible:true
    })
}

const success_notification =  <Modal
                            
                            visible = {state.succes_modal_visible}
                            onOk = {handleSuccessModalOk}
                            onClose = {handleSuccessModalClose}
                            footer ={[]}
                            >
                            <Result
                                status="success"
                                title="Account Verified"
                                subTitle={<>
                                <p>Your account has been resolved succesfully. <br/> Check detail to confirm account details and proceed</p>
                                <p><b>Account Name: </b>{accInfo.acc_name} </p>
                                <p><b>Account Number: </b>{accInfo.acc_number} </p>
                                
                                </>}
                                extra={[
                                <Button 
                                loading = {state.create_recieptient_loading}
                                onClick = {handleCreateRecipient}
                                shape = "round" style = {{color:"green",borderColor:"green",width:"200px"}} key="console">
                                    Proceed
                                </Button>,
                                <Button onClick = {handleSuccessModalClose} shape = "round" style = {{color:"red",borderColor:"red",width:"200px"}}  key="cancel">Cancel</Button>,
                                ]}
                            />
                    </Modal>

const handleFailedModalClose = ()=>{
    setState({
        ...state,
        failed_modal_visible:false
    })
}


// const showFialedsModal = ()=>{
//     setState({
//         ...state,
//         failed_modal_visible:true
//     })
// }
const failed_notification =  <Modal
                            
                            visible = {state.failed_modal_visible}
                            onOk = {handleSuccessModalOk}
                            onClose = {handleFailedModalClose}
                            footer ={[]}
                            >
                            <Result
                                status="error"
                                title="Account Resolving failed"
                                subTitle={<>
                                <p>Account with the credentials:.</p>
                                <p><b>Account Name: </b>{state.acc_name} </p>
                                <p><b>Account Number: </b>{accInfo.acc_number} </p>
                                <p>Failed to resolve <br/> Make sure to input the correct account number </p>
                                
                                </>}
                                extra={[
                                <Button shape = "round" style = {{color:"green",borderColor:"green",width:"200px"}} key="console">
                                    Try again
                                </Button>,
                                <Button onClick = {handleFailedModalClose} shape = "round" style = {{color:"red",borderColor:"red",width:"200px"}}  key="cancel">Cancel</Button>,
                                ]}
                            />
                    </Modal>

    return (
        <div style = {{height :"100vh"}}>
            {console.log(state)}
            {success_notification}
            {cahoutModal}
            {initTansactionModal}
            {failed_notification}
            < Breadcrumb className = "p-3" >
                <Breadcrumb.Item>
                    Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Earnings
                </Breadcrumb.Item>
            </Breadcrumb>

            
                    <Container>

                    <Row>
                        <Col xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                                <Statistic
                                title = "All Earnings"
                                />
                            </Card>
                            
                        </Col>
                            <Col xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                               <Statistic
                                title = "Total Cashouts"
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Card className = "my-3" title = "Current Earning" >
                        <div className="text-center">
                            <h3>Current earned: 0.00</h3>
                        </div>
                        <div className="p-5">
                                <Button onClick = {showCashoutModal} shape = "round" className = "mx-auto" style ={{width:"100%",height:"50px",borderColor:"green"}} >Cashout</Button>
                        </div>
                    </Card>

                    </Container>

              

            
        </div>
    )
}

export default EarningsPart
