FROM mcr.microsoft.com/playwright:v1.36.2-jammy

WORKDIR /app


COPY package.json /app/
COPY tests/ /app/tests/
COPY data/ /app/data
COPY locators /app/locators
COPY pages/ /app/pages
COPY playwright.ci.config.ts /app/

RUN npm install