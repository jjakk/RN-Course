import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PptlTmZVvnhLLNoQ3c7Np0FwnwToO8V6covfVJn7DYbppOVNZkMePcvcOtz1mWbjmzxnu3rqkYa2c1jHVjgeVDvneZIDq-7jvDFuB7inWP0fdewBLIQDuJZkcZt5YHYx'
    }
});


