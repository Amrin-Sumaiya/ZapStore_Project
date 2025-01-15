import { toast } from "react-toastify";

const RemoveProductMessage = () => {
    toast.success(' Remove Product Succcessfully! ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })
}
export default RemoveProductMessage