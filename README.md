# WorkSpaceBackEnd

This directory is the backend to a web application called WorkSpace where remote workers can connect with flexible workspaces. Flexible work is in high demand and this application strives to bring more options, allowing workers to have an office close to home but without all the distractions. WorkSpace strives to make remote work even better! 

The backend is deployed using Heroku and it connects to the WorkSpace frontend repository. You can view them by clicking the links below.

#### Link to backend repository: https://workspacebackend.herokuapp.com/api/workspace
#### Link to project: https://workspace-zeta.vercel.app/
<br/>
<a href='https://workspace-zeta.vercel.app/' target='_blank'><img src='https://lh3.googleusercontent.com/JLyLl0gMfixeVgTzWgQvLsQGQHtUiRIWeoYXx71Lra9zoaLWBL-tLuI08ICiXNfB11GtY2ImLXXPWM_3Pj94izeVnKgqUiSxNsDZHDU_65y5ZjAQBZBl7zgQZiBfLvx4_JNm40qNsg=w600' alt='WorkSpace'/></a>

## How It's Made:
**Tech used:** Node, Express, JavaScript, PostgreSQL, JSON Web Tokens, Heroku

The backend API was created with Node/Express, with endpoints that send and receive user & workspace data. We utilized a PostgreSQL database, complete with seed, migration, and dotenv files. This is a CRUD app that is meant to create, read, update, and delete information. We also have an auth router that allows us to authenticate users.

## Optimizations: 

I utilized middleware in order to seperate concerns and keep my code DRY (Don't repeat yourself). I have middleware sectioned in different files according to their usecases. The entire application is modular in nature with different files for the server, routers, middlewares, models, seeds, configuration, etc...

## Lessons Learned:  

**1)** It is critical to get your database information correct. Take your time in the beginning to figure out the structure of the application so it makes sense. It could be a headache going back to fix a database structure that is faulty.

**2)** Reusing middleware is the way to go! It is much easier to pull middleware functions from a centralized location, rather than rewriting code. This make the code more readable, reusable, and clean. It's all around better. 

## Examples:
Take a look at these other examples that I have in my own portfolio:

**African Marketplace:** https://vercel.com/alex-hoskins/african-marketplace

**Portfolio:** https://alexrhoskins.com/
