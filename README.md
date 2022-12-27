# Blogging application - ECE Webtech project

This is a simple CRUD blog of articles and comments, where you can add articles and comments for articles. You can also delete articles when you're login and update it.

## Production

- Vercel URL: https://vercel.com/rgv176/web-tech-ragavi
- Supabase project URL: https://kfxndbjulmxbtyvtjbbi.supabase.co

## Usage

_how to start and use the application, run the tests, ..._

- Clone this repository, from your local machine:
  ```
  git clone ...
  cd ...
  ```
- Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm run dev
  ```
- Start Supabase
  ```bash
  cd supabase
  docker compose up ...
  ```

## Authors

- _rgv176: MAHENTHIRAN Ragavi email: ragavimahenthiran@gmail.com_

- _eptect-lab: NGASSA TSALA Claude_

## Tasks

**Project management:**

- Naming convention  
  _A: all the commits follow the convention_
- Project structure  
  _B: maybe separate the dynamic fetch comments file with deleted articles_
- Git  
  _A: No problems with Git_
- Code quality  
  _B: Some errors_
- Design, UX, and content  
  _B: very simple design_

**Application development:**

- Home page  
  _A: evrything needed in the Home Page_
- Login and profile page  
  _A: You can login and see your informations_
- New articles creation  
  _A: you can create new articles if you login_
- New comment creation  
  _B: You can create new comments if you're login BUT there is some issues with the deployment (in the localhost it worked perfectly)_
- Resource access control  
  _A: OAuth authentification with github and email_
- Article modification  
  _B: There is some issue with the deployment but in localhost it's ok_
- Article removal  
  _A: you can delete if you're login_
- Comment modification  
  _F: not done_
- Comment removal  
  _F: not done_
- Account settings  
  _C: you can change your password with password forgot_
- WYSIWYG integration  
  _Not used_
- Gravatar integration  
  _Not used_
- Light/dark theme  
  _A: you can change the theme as you want in the header_
- Accent color selection  
  _..._

## Bonus
