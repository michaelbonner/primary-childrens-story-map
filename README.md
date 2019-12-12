# Primary Children's Hospital Patient Stories Map

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

An interactive map showing some of Primary Children's Hospital's patient stories

### Access Locally

Pulldown a local copy of this Github repository

```
$ git clone https://github.com/michaelbonner/primary-childrens-story-map.git
$ cd primary-childrens-story-map
$ npm i
$ netlify dev # or ntl dev
```

This uses [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```
