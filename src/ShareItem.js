var React = require('react');

/**
 * <ShareItem />
 */
class ShareItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var shareUrl = this.getUrl(this.props);
        return <a href={shareUrl} onClick={this.popup.bind(this)}>{this.props.label}</a>;
    }

    popup(e) {
        e.preventDefault()
        var
          width     = 600,
          height    = 500,
          left      = (screen.width) ? (screen.width - width) / 2 : 0,
          top       = (screen.height) ? (screen.height - height) / 2 : 0;
        window.open(this.getUrl(this.props), '_blank', 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top + ',location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0');
    }

    getNetworks() {
        return [
            {
                network: 'email',
                url: 'mailto:?subject={TEXT}&body={DESC}%20{URL}'
            },
            {
                network: 'facebook',
                url: 'http://www.facebook.com/share.php?u={URL}'
            },
            {
                network: 'googleplus',
                url: 'https://plus.google.com/share?url={URL}'
            },
            {
                network: 'pinterest',
                url: 'http://pinterest.com/pin/create/button/?url={URL}&description={DESC}&media={IMAGE}'
            },
            {
                network: 'tumblr',
                url: 'http://www.tumblr.com/share?v=3&u={URL}'
            },
            {
                network: 'twitter',
                url: 'https://twitter.com/intent/tweet?url={URL}&text={TEXT}'
            },
            {
                network: 'reddit',
                url: 'http://reddit.com/submit?url={URL}&text={TEXT}'
            },
            {
                network: 'linkedin',
                url: 'http://www.linkedin.com/cws/share?url={URL}&summary={DESC}'
            },
            {
                network: 'myspace',
                url: 'http://www.myspace.com/index.cfm?fuseaction=postto&t={TEXT}&c={DESC}&u={URL}'
            }
        ];
    }

    /**
     * Retrieve the share URL
     *
     * @param string params.network
     * @param string params.url
     * @param string params.text
     * @param string params.desc
     * @param string params.image
     */
    getUrl(params) {
        var network = false;
        // Check default params
        if ( typeof params.url === 'undefined') {
            params.url = '';
        }
        if ( typeof params.text === 'undefined') {
            params.text = '';
        }
        if ( typeof params.desc === 'undefined') {
            params.desc = '';
        }
        if ( typeof params.image === 'undefined') {
            params.image = '';
        }
        // Iterate through all networks
        this.getNetworks().forEach(function(value, index) {
            // Skip if network doesn't match
            if (params.network !== value.network) {
                return;
            }
            network = value;
        });
        // Set default return value
        var retVal = '';
        if (network) {
            // Replace values
            retVal = network.url
                .replace('{URL}', encodeURIComponent(params.url))
                .replace('{TEXT}', encodeURIComponent(params.text))
                .replace('{DESC}', encodeURIComponent(params.desc))
                .replace('{IMAGE}', encodeURIComponent(params.image));
        }
        return retVal;
    }

}

module.exports = ShareItem;
