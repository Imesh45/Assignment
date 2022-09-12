import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/',
    headers: {'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch'}
  });

  export default instance;