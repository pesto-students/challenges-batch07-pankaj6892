# Git Tasks insights

1. On using the command `git config --global core.editor "code --wait"` I found that the termial of vs code became git-cmd and now I am able to use git commands.

# Git Excercise insights

1. Before commit I have done `git add E:/pesto-study/challenges-batch07-pankaj6892/git-exercises/git-exercise/solution.md` to add the solution.md file as nothing was added.
   To peek under the hood .git directory, I tried going through tree command.
   As I am using Windows I was only able to see the list of object directories.
   So, I checked it from windows explorer and on soring by time modified I found that I have 4 new directories with one having more than one file.
   
2. Using the commands as per question I found that the commit I have made is stored with object directory `a9` and object `96bb77c129663178ffb5f3c2b5efbff877e92e'
   The type of object was shown as `tree`.
   Using the commands I learned on finding the type of object created on commit and printing the content which is encrypted to sha1 in my case.
   
3. Using the command `git ls-files -s` I found the list of files on staging. There were 13 files in the list.
   I learned to list the files in staging area.

4. using command `git reset` unstaged the changes and it gave a list of files that are unlisted.
   I learned to unstage the files that are in staging area.
   
5. I have done git stash using command `git stash push -m "my_solution"` which created a stash which I accessed using command `git stash list`
   Then I popped the created stash using its Id. The command I used `git stash pop stash@{0}`. Some how I also lost the changes I made in my solution.md file
   This removed the stash. I have checked the same by listing the stash once again
   So, I learned to create something with a unique name for future use and also to take it back to the working directory by popping it from the list of stashes.
   
6. I have used `git tag v1.0` to create a lightweight tag.
   I learned that lightweight is a pointer to specific commit. It is not a recommended pointer for long term use as it doesn't containg full object as annotated tags are.
   I have also used `git show v1.0` to see the pointer and found the information of my commit.
   
7. I have created a annotated tag using command `git tag -a v1.1 -m "My Solution Version 1.1"` and found that it also conatins message.
   using `git show v1.1` I found the details available in the tag.
   
8. For this task I have first created a branch with name feature using command `git branch feature` then switched to feature branch using command `git checkout feature`.
   Next, I added and commited the files.
   Next, I switched to master branch using command `git checkout feature` and then merged using command `git merge feature`.
   In this whole process I lost my file once from the directories and on merging were able to see all the details but lost some contents which was unsaved in solution file befor commiting.
   
9. for this I created file with same name in two branches but different content.
   On using merge as in step 8 I found an error of conflict.
   
10. I have used `git log` with different option like `origin..HEAD` `foo bar ^baz` to learn different log filters.

11. I have used the commands and found that the object directory is first 2 keys of sha of the commit and the object file is the rest. It is a SHA1 encoding.