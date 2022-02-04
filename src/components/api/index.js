import axios from 'axios';
import swal from 'sweetalert';

export default function getToken(email, password) {
    const data = {
        email,
        password
    }
    return axios.post('http://challenge-react.alkemy.org/', data)
    .then(result => {
        const {token} = result.data;
        return {token};
    }).catch(error => swal('Ha ocurrido un error :(', error.message, 'error'));
}