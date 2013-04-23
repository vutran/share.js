/**
 * Share
 *
 * @version 1.0.0
 *
 * #Usage Example
 *
 * ## Facebook
 * <a href="http://website-to-share.com/" data-network="facebook">Share on Facebook!</a>
 *
 * ## Twitter
 * <a href="http://website-to-share.com/" data-network="twitter" data-text="Check this website out!">Share on Twitter!</a>
 */

var share = (function(x, $) {

  /**
   * @access private
   */
  var _endpoint = {
    email : {
      url : 'mailto:?subject={TEXT}'
    },
    facebook : {
      url : 'http://www.facebook.com/share.php?u={URL}'
    },
    googleplus : {
      url : 'https://plusone.google.com/_/+1/confirm?hl=en&url={URL}'
    },
    pinterest : {
      url: 'http://pinterest.com/pin/create/button/?url={URL}&description={DESC}'
    },
    tumblr : {
      url : 'http://www.tumblr.com/share?v=3&u={URL}'
    },
    twitter : {
      url : 'https://twitter.com/intent/tweet?url={URL}&text={TEXT}'
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
      var theAnchor = $(this);
      var opts = {
        network : theAnchor.data('network'),
        url : theAnchor.attr('href'),
        text : theAnchor.data('text'),
        desc : theAnchor.data('desc')
      };
      var url = _getShareUrl(opts);
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
   */
  var _getShareUrl = function(opts) {
    $.each(_endpoint, function(network, el) {
      if(network === opts.network) {
        var url = el.url;

        if(typeof opts.url !== 'undefined') { url = url.replace('{URL}', opts.url); }
        else { url = url.replace('{URL}', ''); }

        if(typeof opts.text !== 'undefined') { url = url.replace('{TEXT}', encodeURIComponent(opts.text)); }
        else { url = url.replace('{TEXT}', ''); }

        if(typeof opts.desc !== 'undefined') { url = url.replace('{DESC}', encodeURIComponent(opts.desc)); }
        else { url = url.replace('{DESC}', '');  }

        // Open the popup
        _popup(url);
        return false;
      }
    });
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
   * Asynchronously load a new JS file into the HTML head
   *
   * @access private
   * @param string file
   * @return void
   */
  var _loadJS = function(file) {
    var d = document;
    var h = d.getElementsByTagName('head')[0];
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.language = 'javascript';
    s.async = true;
    s.src = file;
    h.appendChild(s);
  };

  /**
   * Handles the popup dialog box
   *
   * @access private
   * @param string url
   * @return void
   */
  var _popup = function(url) {
    var width = 600;
    var height = 500;
    var left = (screen.width) ? (screen.width - width) / 2 : 0;
    var top = (screen.height) ? (screen.height - height) / 2 : 0;
    window.open(url, '_blank', 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top + ',location=0,menubar=0,resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0');
  };

  $(_onDocumentReady);

  return x;

}(share || {}, jQuery));