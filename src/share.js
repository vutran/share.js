/**
 * Share.js
 *
 * @copyright Copyright (c) 2013 Vu Tran
 * @version 1.0.4
 * @link https://github.com/vutran/share.js
 * @author Vu Tran <vu@vu-tran.com>
 * @website http://vu-tran.com/
 */

var share = (function(x, $) {

  /**
   * @access private
   */
  var _endpoint = {
    email : {
      url : 'mailto:?subject={TEXT}&body={DESC}%20{URL}'
    },
    facebook : {
      url : 'http://www.facebook.com/share.php?u={URL}'
    },
    googleplus : {
      url : 'https://plus.google.com/share?url={URL}'
    },
    pinterest : {
      url: 'http://pinterest.com/pin/create/button/?url={URL}&description={DESC}&media={IMAGE}'
    },
    tumblr : {
      url : 'http://www.tumblr.com/share?v=3&u={URL}'
    },
    twitter : {
      url : 'https://twitter.com/intent/tweet?url={URL}&text={TEXT}'
    },
    reddit : {
      url : 'http://reddit.com/submit?url={URL}&text={TEXT}'
    },
    linkedin : {
      url : 'http://www.linkedin.com/cws/share?url={URL}&summary={DESC}'
    },
    myspace : {
      url : 'http://www.myspace.com/index.cfm?fuseaction=postto&t={TEXT}&c={DESC}&u={URL}'
    }
  };

  /**
   * @access private
   */
  var _events = {
    /**
     * share toggle onclick callback function
     *
     * @param Event e
     * @return void
     */
    onClickShareToggle : function(e) {
      e.preventDefault();
      var
        theAnchor   = $(this),
        opts        = {
          network   : theAnchor.data('network'),
          url       : theAnchor.attr('href'),
          text      : theAnchor.data('text'),
          desc      : theAnchor.data('desc'),
          image     : theAnchor.data('image')
        },
        url         = _getShareUrl(opts);

        // Open the popup
        _popup(url);
    }
  };

  /**
   * Retrieve the share URL
   *
   * @access private
   * @param object opts
   * @param string opts.network
   * @param string opts.url
   * @param string opts.text
   * @param string opts.desc
   * @return string
   */
  var _getShareUrl = function(opts) {
    var url = false;
    $.each(_endpoint, function(network, el) {
      if(network === opts.network) {
        url = el.url;

        if(typeof opts.url !== 'undefined') { url = url.replace('{URL}', encodeURIComponent(opts.url)); }
        else { url = url.replace('{URL}', ''); }

        if(typeof opts.text !== 'undefined') { url = url.replace('{TEXT}', encodeURIComponent(opts.text)); }
        else { url = url.replace('{TEXT}', ''); }

        if(typeof opts.desc !== 'undefined') { url = url.replace('{DESC}', encodeURIComponent(opts.desc)); }
        else { url = url.replace('{DESC}', '');  }

        if(typeof opts.image !== 'undefined') { url = url.replace('{IMAGE}', encodeURIComponent(opts.image)); }
        else { url = url.replace('{IMAGE}', '');  }
      }
    });
    return url;
  };

  /**
   * jQuery document ready callback function
   *
   * @access private
   * @return void
   */
  var _onDocumentReady = function() {
    $(document).on('click', '.share-toggle', _events.onClickShareToggle);
  };

  /**
   * Handles the popup dialog box
   *
   * @access private
   * @param string url
   * @return void
   */
  var _popup = function(url) {
    var
      width     = 600;
      height    = 500;
      left      = (screen.width) ? (screen.width - width) / 2 : 0;
      top       = (screen.height) ? (screen.height - height) / 2 : 0;
    window.open(url, '_blank', 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top + ',location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0');
  };

  $(_onDocumentReady);

  // Export as Node module
  if(typeof module !== "undefined" && module.exports) { module.exports = x; }

  // Export as AMD module
  if(typeof define === "function" && define.amd) { define(x); }

  // Return The Object
  return x;

}(share || {}, jQuery));