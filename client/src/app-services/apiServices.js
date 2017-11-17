import axios from 'axios'

export default axios.create({
  baseURL: 'https://us-central1-toddteng-bbdc7.cloudfunctions.net/api',
  timeout: 10000,
  header: {
  }
})
