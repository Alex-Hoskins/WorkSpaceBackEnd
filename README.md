# WorkSpaceBackEnd

This directory is the backend to a web application called WorkSpace where remote workers can connect with flexible workspaces. Flexible work is in high demand and this application strives to bring more options, allowing workers to have an office close to home but without all the distractions. WorkSpace strives to make remote work even better! 

The backend is deployed using Heroku and it connects to the WorkSpace frontend repository. You can view them by clicking the links below.

#### Link to backend repository: https://workspacebackend.herokuapp.com/api/workspace
#### Link to project: https://workspace-zeta.vercel.app/
<br/>
<a href='https://workspace-zeta.vercel.app/' target='_blank'><img src='https://lh3.googleusercontent.com/JLyLl0gMfixeVgTzWgQvLsQGQHtUiRIWeoYXx71Lra9zoaLWBL-tLuI08ICiXNfB11GtY2ImLXXPWM_3Pj94izeVnKgqUiSxNsDZHDU_65y5ZjAQBZBl7zgQZiBfLvx4_JNm40qNsg=w600' alt='WorkSpace'/></a>

## How It's Made:
**Tech used:** Node, Express, JavaScript, PostgreSQL, JSON Web Tokens, Heroku

The backend API was created with Node/Express, with endpoints that send and receive user & workspace data. We utilized a PostgreSQL database, complete with seed, migration, and dotenv files. React-thunk was utilized so that the actions could be more dynamic and have a broader use. We installed axios and used it to make CRUD requests.

## Optimizations: 

I utilized react in order to make large, reusable components. I started creating a filter so that users could more easily navigate to a workspace that fits their needs. I want to expand on this filter and optimize beyond MVP.

## Lessons Learned:  

**1)** There is a lot of boilerplate code when using redux. Every time you wanted to create a new action you had to touch three files in order to get the action to work. This seems repetitive and not very DRY. Next time I will explore context API a bit more but Redux got the job done in this project.

**2)** Due to the large amounts of components, it was tricky making sure all of the routing was correct. I wanted to make sure when you clicked on a WorkSpace, or any specific component, that the route corresponed correctly. This allows the forward and back arrows to work correctly when you are navigating the history on the browser. 

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**African Marketplace:** https://vercel.com/alex-hoskins/african-marketplace

**Portfolio:** https://alexrhoskins.com/
