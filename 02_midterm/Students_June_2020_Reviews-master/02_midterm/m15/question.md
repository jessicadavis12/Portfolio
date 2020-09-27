### Looking at the code below, what is the alert message you would get (25%) and why (75%), if you ran this code on a browser:

(Please view the rendered image below on github.com, not in vscode)

<img src="../images/test.png" alt="" width="70%" style="display: block; border: 1px solid #666; margin: 5vh auto;">

1. 1
1. 2
1. (nothing would happen)
1. foo    


1. the console.log was called when the function was returning 1.  The function was not called again after it was returning 2. 

Incorrect - 0pts

2

Explanation:

In the definition phase foo is defined and then redefined.

In the execution phase the second version of foo is invoked and 2 is returned.