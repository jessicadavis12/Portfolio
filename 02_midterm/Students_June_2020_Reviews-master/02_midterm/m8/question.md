### A picture has been uploaded to your node-express based restful api?  Which of the following would you use to access the picture?

1. req.params.pic
2. req.body
3. req.query.pic
4. res.locals.pic

Skipped - 0pts

Due to the image, it consists of a large amount of data. Therefore you would have to send it as a post. When using post method, you have to reference req.body 

params and query refer to data sent through url and you cannot send an omage through url

locals does not exist.