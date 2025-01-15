import { toast } from "react-toastify";

const AddProductMessage = () => {
    toast.success(' Add Product Succcessfully! ', {
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
export default AddProductMessage