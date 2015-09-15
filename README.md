share.js
========

Share you website on multiple third-party social networks.

Now as a ReactJS component, and webpack for bundling assets.

# Available Sharing Networks
* Email
* Facebook
* Google+
* Pinterest
* Tumblr
* Twitter
* Reddit
* LinkedIn
* MySpace

# Implementation

````
<ShareItem network="facebook" url="https://google.com/" label="Share on Facebook" />

<ShareItem network="email" url="https://google.com/" label="Share via Email" text="This is the subject" desc="This is the body" />

````

## Notes

For some social networks such as Facebook, you may have to use [Open Graph](http://ogp.me/) tags to specify the title, image, and description you want to be displayed when a user shares the URL.

# Change Log

## 2.0.0
- Redeveloped as a ReactJS component
- Switched out Grunt for webpack

## 1.0.5
- Added `bower.json`
- Updated `package.json`
- Updated package version: `grunt` and `grunt-contrib-uglify`
- Recompiled the build