var React = require('react');
var ShareItem = require('./ShareItem.js');

console.debug(ShareItem);

React.render(
    <div>
        <ShareItem url="https://github.com/vutran/share.js" label="Share on Email" network="email" text="Check this out!" desc="Share you website on multiple third-party social networks." />
        <br/>
        <ShareItem url="https://github.com/vutran/share.js" label="Share on Facebook" network="facebook" text="Check this out!" desc="Share you website on multiple third-party social networks." />
        <br/>
        <ShareItem url="https://github.com/vutran/share.js" label="Share on Twitter" network="twitter" text="Check this out!" desc="Share you website on multiple third-party social networks." />
        <br/>
        <ShareItem url="https://github.com/vutran/share.js" label="Share on Pinterest" network="pinterest" text="Check this out!" desc="Share you website on multiple third-party social networks." />
        <br/>
    </div>,
    document.getElementById('content')
);
