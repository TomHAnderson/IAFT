// ==UserScript==
// @name           Internet Archive File Types
// @namespace      www.archive.org
// @description    A script to show you which file types are available for each identifier
// @include        https://archive.org/search.php*
// @include        https://archive.org/details/*
// @include        https://*.archive.org/search.php*
// @include        https://*.archive.org/details/*
// @include        http://archive.org/search.php*
// @include        http://archive.org/details/*
// @include        http://*.archive.org/search.php*
// @include        http://*.archive.org/details/*
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_addStyle
// @grant          GM_wait
// @version        3.0.3
// @author         Tom Anderson <tom.h.anderson@gmail.com>
// ==/UserScript==

/**
 * Do auto updating first
 * see http://userscripts.org/scripts/review/20145
 */
var IAFT_script_number = 107166;

try
{
    function updateCheck(forced)
    {
        // Checks once a day (24 h * 60 m * 60 s * 1000 ms)
        if ((forced) || (parseInt(GM_getValue('SUC_last_update', '0')) + 86400000 <= (new Date().getTime())))
        {
            try
            {
                GM_xmlhttpRequest(
                {
                    method: 'GET',
                    url: 'http://userscripts.org/scripts/source/' + IAFT_script_number + '.meta.js?' + new Date().getTime(),
                    headers: {'Cache-Control': 'no-cache'},
                    onload: function(resp)
                    {
                        var local_version, remote_version, rt, script_name;

                        rt=resp.responseText;
                        GM_setValue('SUC_last_update', new Date().getTime()+'');
                        remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);
                        local_version=parseInt(GM_getValue('SUC_current_version', '-1'));
                        if(local_version!=-1)
                        {
                            script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];
                            GM_setValue('SUC_target_script_name', script_name);
                            if (remote_version > local_version)
                            {
                                if(confirm('There is an update available for "'+script_name+'."\nWould you like to go to the install page now?'))
                                {
                                    GM_openInTab('http://userscripts.org/scripts/show/'+IAFT_script_number);
                                    GM_setValue('SUC_current_version', remote_version);
                                }
                            }
                            else if (forced)
                                alert('No update is available for "'+script_name+'."');
                        }
                        else
                            GM_setValue('SUC_current_version', remote_version+'');
                    }
                });
            }
            catch (err)
            {
                if (forced)
                    alert('An error occurred while checking for updates:\n'+err);
            }
        }
    }
    GM_registerMenuCommand(GM_getValue('SUC_target_script_name', '???') + ' - Manual Update Check', function()
    {
        updateCheck(true);
    });
    updateCheck(false);
}
catch(err)
{}

var script = document.createElement("script");
script.src = "https://raw.githubusercontent.com/TomHAnderson/IAFT/master/main.js";
document.getElementsByTagName("head")[0].appendChild(script);