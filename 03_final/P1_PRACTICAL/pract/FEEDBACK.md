I gave you 50% (18/35) credit for attempting and getting an app up and running. However, requirements were not met:

1) index.ejs - you have a type on line 13 with your class which prevents the action from even being triggered. 

2) If you remove this, you will still get an error because your endpoint is missing a '/' separating your lookup and your req.query.title. This causes an error whihc is not handled and causes the req-res cycle to continue to run. Need to stop that process when error. 

3) no button or checkbox added to create a favorites

4) no separate url to see favorites

5) where are the comments in your server.js? I see see a few generic ones (from class) but we want to see you truly understand what all the code is doing and why.


If you have more time, I truly believe you can max this out and get full credit. 