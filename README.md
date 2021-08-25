# sequentech.io static website

[This private repository](https://github.com/bodadeagusyfabi/bodadeagusyfabi) contains the 
static website deployed to [bodadeagusyfabi.github.io](https://bodadeagusyfabi.github.io).

It uses [Gatsby](https://www.gatsbyjs.org) to generate the static website and
it's automatically deployed when the master branch is pushed to the 
[Github repository](https://github.com/bodadeagusyfabi/bodadeagusyfabi) using Github Actions
CI/CD integration (configured using the file `.github/workflows/build.yml`) and we use 
Cloudflare and Github pages to serve the website.

# Develop

Code is written in Javascript and uses node 10.17 (see `.github/workflows/build.yml`
file). 

To develop install dependencies with:

`yarn install`

Then use the following command:

`yarn run gatsby develop`

To run the website at <https://localhost:8000> or compile with:

`yarn run gatsby build` 

And execute the compiled website afterwards with:

`yarn run gatsby serve` 

Making it accessible at <https://localhost:9000>.

# Deployment

As mentioned, we use Github Actions to automatically deploy to production when
you push changes to the master branch in the Github repository. It takes around
6 minutes for the Github Actions pipe job to finish building and then it's 
deployed.
