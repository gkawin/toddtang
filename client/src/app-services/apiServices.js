import axios from 'axios'

export default axios.create({
  baseURL: 'https://us-central1-toddteng-bbdc7.cloudfunctions.net/apiV1',
  timeout: 10000,
})
