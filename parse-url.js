
  const url = require('url');
  const exampleUrl = 'http://localhost:8000/?name=Ringo&city=Liverpool,';
  
  const parsedUrl = url.parse(exampleUrl, true);
  
  
  console.log('Hello, <name> from <city>');
  console.log(parsedUrl.query); 
  
  const urlNoQuery = '/name';
  const urlNoQueryCity = '/city';
  const parsedUrlNoQuery = url.parse(urlNoQuery, true);
  const parsedUrlNoQueryCity = url.parse(urlNoQueryCity, true);
  
  console.log(parsedUrlNoQuery.query);
  console.log(parsedUrlNoQueryCity.query);