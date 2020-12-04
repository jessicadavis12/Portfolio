## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command)?
Consider how to do this without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

a> git revert {commit_id}'    reverting  commit means to create a new commit that usdoes all the changes that were made in the bad commit. 
The bad commit remains, but it nolonger affects the current master any any future commits ontop of it.
b. local  git branch -d feature-collaboraton
remote
    - git remote prune origin --dry-run
    -git remote prune origin 


Good - 3/3
=======
### Feedback:

Most of the answer is correct except the very last one.

The git prune command is an internal housekeeping utility that cleans up unreachable or "orphaned" Git objects. Unreachable objects are those that are inaccessible by any refs. Any commit that cannot be accessed through a branch or tag is considered unreachable. git prune is generally not executed directly. Prune is considered a garbage collection command and is a child command of the git gc command.

To remove from remote, you would use ...

git push origin --delete old_branch_name




Score: 
2.25/3.0

