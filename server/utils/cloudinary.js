import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlokhninm', 
  api_key: 'Use_Your_API_Key', 
  api_secret: 'eoEYUnziDk2h87Qov8eCJqXUsTUisajnm' 
});


cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
