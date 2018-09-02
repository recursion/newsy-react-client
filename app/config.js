
const devURL = 'http://localhost:3000/v1';
const prodURL = 'https://newsy.recursionslaboratory.com/v1';

const config = {
  // this should be changed to wherever the newsy api server is running
  // for development I usually use 'http://localhost:3000/v1'
  url: (process.env.NODE_ENV === 'development') ? devURL : prodURL
};

export default config;
