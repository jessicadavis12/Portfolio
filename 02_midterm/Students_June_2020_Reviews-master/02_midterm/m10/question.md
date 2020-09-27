When a html form submits, where action attribute is missing, which of the following happen when the form submits ...

1. nothing happens, the form remains unsubmitted
1. the form clears its fields and moves to the root of the website
1. it makes a POST request to the same url of the website where the form is hosted
1. the request errors out, and you get a page not found error.

Reference: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data


Skipped - 0pts

even if there is no action or method (numbers API we built is an example), it is by default sent as a post request. This means 3 is incorrect.

a form will submit without an action or method (GET by default) - so 1 an 4 are incorrect. 

if there is no action defined then the form is submitted and sent to '/', the root
