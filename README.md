# Cloud Resume Challenge - Frontend

This repo contains the current Frontend code for the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

## Description

A resume page built using Next.js and TailwindCSS. 
The page also includes a visitor counter which updates at every visit. Its value is stored in a DynamoDB table and dynamically retrieved via API Gateway and Lambda. 

## Frontend Architecture

- Resume page created with Next.js and TailwindCSS.
- GitHub Action workflow runs the build process, exports the static content and automatically uploads it to AWS.
- Two S3 buckets hosting the static content.
- CloudFront Distribution to serve content to end users
- Custom DNS domain name provided via Route53

