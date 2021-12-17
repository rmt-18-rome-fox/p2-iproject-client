import Swal from 'sweetalert2'
const prompt = (status, message) => {
    if (status === 'Success') {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
        })
    }
}