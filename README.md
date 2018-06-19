# CyberSoc Website

![alt text](https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/22894412_123880668306774_8794945457711343195_n.png?_nc_cat=0&oh=2ea77164e0498c56734e796272c241c2&oe=5BB0F695)

The website for cyberSoc

### Installation

Running the webserver requries nodejs and npm.
For [Mac and Windows](https://nodejs.org/en/download/)
For [linux install instructions](https://nodejs.org/en/download/package-manager/)

To start the webserver, change directory into cyberSocWebSite/app and run
```sh
npm start
```
### Facebook event scraping
If you want to, you can install the python dependencies to scrape events from the facebook page. (Linux only)

Firstly install the python requirements using the requirements.txt in the root of the repo.

```sh
pip install -r requirements.txt --no-index --find-links file:///tmp/packages
```
For selenium to work it requires the latest [chrome driver](http://chromedriver.chromium.org/) to be placed in the path (/usr/bin)
and the chromium browser to be installed using:

```sh
sudo apt-get install chromium-browser
```
Running cron.py located in /cyberSocWebsite/app/pythonScripts/cron.py will add a cron job to run the even scraping code daily. (This is meant for when the actual website is hosted)

### ToDo List

- [X] Add relevant html pages
- [ ] Add images and information
- [x] Add events page which automatically pulls events from cyberSoc facebook page
- [ ] Add blog post page which allows committee members to publish blog posts 
- [ ] Add more here












