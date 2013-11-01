share.js
========

Share you website on multiple third-party social networks.

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

1. Create a new anchor tag with a `share-toggle` class.
2. Specify the `href` attribute for the URL you want to share. (Ex: http://website-to-share.com)
3. Specify the custom data attributes for sharing to specific social networks.

## Data Attributes

| Attribute | Description | Applies To |
| :--- | :--- | :--- |
| data-network | The network to share to (please refer to the available networks; must be all lower case) | All |
| data-text | The title or text you want to enter when sharing | Email, Twitter, Reddit, MySpace |
| data-desc | The description you want to enter when sharing | Email, LinkedIn, Pinterest, MySpace |
| data-image | The image you want to enter when sharing | Pinterest |

## Notes

For some social networks such as Facebook, you may have to use [Open Graph](http://ogp.me/) tags to specify the title, image, and description you want to be displayed when a user shares the URL.

# Usage Examples

## Facebook
```
<a class="share-toggle" href="http://website-to-share.com/" data-network="facebook">Share on Facebook!</a>
```

## Twitter

```
<a class="share-toggle" href="http://website-to-share.com/" data-network="twitter" data-text="Check this website out!">Share on Twitter!</a>
```

## Pinterest

```
<a class="share-toggle" href="http://website-to-share.com/" data-network="pinterest" data-text="Check this website out!" data-image="http://website-to-share.com/images/sample.png">Share on Pinterest!</a>
```