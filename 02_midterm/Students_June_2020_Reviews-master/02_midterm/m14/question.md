### Looking at the code below, what is the console log you would get (25%) and why (75%):

(Please view the rendered image below on github.com, not in vscode)

<img src="../images/julia.png" alt="" width="75%" style="display: block; margin: 5vh auto; border: 1px solid #666;">

1. undefined undefined
1. undefined 'Julia Roberts'
1. 'Julia Roberts' 'Julia Roberts'
1. 'Julia Roberts' undefined

4. getName isn't defined beyond the scope of the star variable code.  

Incorrect - 0pts

2) undefined Julia Roberts

Explanation:

calling starsName() causes the return of this.knownAs, where this in this case points to Global and hence it is not found and gives "undefined".

whereas calling star.getName() causes the function referred to, within the object to run, where this points to the star object and hence returns Julia Roberts.