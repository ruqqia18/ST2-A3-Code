# Read Me

## How to use Github?
repo: repository
1. You need to have an account on github. Create an **account** using this link: https://github.com/join
2. The main goal of using github is that you can work well in teams or as individually also. It helps in tracking individual team member progress. You can also raise and close issues. If you face any issue, you can get a community support also by making your repo public. You can also save your projects here. For working individually, you can create your private repo. Later, you can add collaborators in it.
3. Github can be used either with terminal or github desktop. So, in order to use any of them. You need to have git. You can download it from here: https://git-scm.com/download/win
4. Welcome to Git!
5. I will just share the way in which you can work with the git **terminal** on **Windows**.
6. Someone in your team initiate the creation of project. So, there's a need to clone that project in your local repo. Here I am sharing the way in which you can clone my repo. But keep in mind you need to become collaborator of my repo. Open terminal by entering cmd on the search menu. Now enter this command. git clone https://github.com/ruqqia18/ST2-A3-Code.git If you haven't done authentication, then it will redirect you to authentication Page. Here you will authenticate your github. After Authenticating, the files will begin to import on your local repo.
7. So, now you have a local repo of this repository.
8. Two basic commands are used frequently: git push (means you are adding changes in the repo, you are added in) and git pull (means you are getting changes from the repo). Git pull is also called as merge request. 
9. Here's how push and merge request works:
10. Run these commands:
11. git checkout -b my-new-branch //here you can name the branch by your name, -b will be used when you are creating branch for the first time
12. git add .
13. git commit -m "My commit message" //The message can be related to the change you made.
14. git push origin my-new-branch
15. ...
remote: To create a merge request for my-new-branch, visit:
remote:   https://gitlab.example.com/my-group/my-project/merge_requests/new?merge_request%5Bsource_branch%5D=my-new-branch
//This link is dynamic. 
16. So share this link in the slack channel. So, that everyone can accept this request on their local machines. The changes will then be reflected everywhere likewise.
17. **Remember:** You can raise issue, whenever you face any issue while working on github or any other part of the project.

In this Project:
1. We have done unit Testing using Nightwatch.
2. We have done api testing.
3. We have done unit testing.


## How to run test on nightwatch framework?
1. Navigate into the repo directory using vscode.
2. Enter this: npx nightwatch tests/FirstTest.js
3. It will ask you install nightwatch.
4. Hit enter.
5. After installation of nightwatch,
6. again run npx nightwatch tests/FirstTest.js
7. It will begin to run the test.
