import {toast} from "react-toastify";
const options = {
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
};

export const  customSuccessToast = (message) =>{
    toast.success(message, options); 

}


export const  customErrorToast = (message) =>{
    toast.error(message, options); 

}