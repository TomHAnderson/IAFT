Internet Archive File Types
===========================
This helps you download media from archive.org. Archive.org is essentially a big file system, like a closet full of 5 1/4" disks in petabyte sized shoe boxes, indexed with string identifiers. Every identifier may have any number of files associated with it. Not all files associated with every identifier are listed on the detail page. This app solves that problem by giving direct links to every file for every identifier. IAFT also integrates with Lossless Legs and the etree sites db & bt and gives links to their details about the current identifier. 

INSTALL
-------
http://userscripts.org/scripts/show/107166

RELEASES
--------
3.0.1 - Support for https

3.0.0 - This release reformats the archive's detail pages to be much easier to grok.  Ratings are moved out of details and hidden with a link to show them.  The media player is moved to the streaming box on the left and dynamically resized based on the content, so it works with movies too.  'Boxes' of information are retitled for brevity.

2.2.5 - Other db sources (without an archive identifier) now open in the lightbox

2.2.4 - Moved other sources to their own block.  Include sources on the archive and sources on db which are not on the archive. 

2.2.3 - Added links to all other sources for the same date.  Mouse over the I icon to see db's source summary

2.2.2 - A bug fix for 2.2.1.  Actions (upload) no longer displayed.  This has been fixed.

2.2.1 - Dynamic colors would 'spill' into other IAFT blocks in search.  This fix adds the identifier to the IAFT block classes so colors can be assigned to specific blocks instead of globally.

2.2.0 - Only show upload on audio collections.

2.1.9 - Added dynamic colors based on the collection, mediatype, and identifier of the current identifier to better match archive.org color scheme.

2.1.8 - Lightbox close button class name correction.  ESC works now.

2.1.7 - A more complete fix for the archive change. Also include a link to the directory files are located in at the top of a file listing.

2.1.6 - A fix for a change at archive.org.

2.1.5 - More visual integration and bug fix for iframed urls

2.1.4 - Visual integration with details page

2.1.3 - Added a close button icon X on lightbox

2.1.2 - Files are now sorted

2.1.1 - All file details are now included in file lists

2.1.0 - Added file size, last update, and md5 to file details list

2.0.8 - Lightbox stylized and resized when window is resized

2.0.7 - Furthur stylized file lists

2.0.6 - Stylized file lists

2.0.5 - Added an ALL button to show all files.

2.0.4 - Re-added add to db. There was a problem with cache server 404 caching including session identifiers. Please send us sources with no db listing.

2.0.3 - Removed the add to db button.

2.0.2 - Changed css so IAFT matches archive.org color scheme for audio.

2.0.1 - Added peer counts to torrent icons.

2.0.0 - Added Lossless Legs (http://www.shnflac.net) support.

1.9.9 - Rethought wget approach and removed. I found a very good browser based approach and give instructions on how to use it in the file dialog. The about button is gone, replaced with a link on IAFT (c) line.

1.9.8 - Added wget batch scripts to each file list. If you can work from the command line and have wget you can copy the text in the textarea and use it as a batch of commands to download every file in the list. This is a very efficient way to download multiple files.

1.9.7 - Added file counts to each extension icon.

1.9.6 - Bug fix for search page introduced in 1.9.5

1.9.5 - Removed buttons when an icon file is not found and replaced with a generic ARC icon but position the extension so it appears like a normal icon.

1.9.4 - Yahoo stopped redirecting correctly so I put a new method in place to fetch the correct url for the xml and that fixes Yahoo.

1.9.3 - IAFT was breaking IA's ability to use jQuery. This bug is fixed in this version. Also the line "This audio is available in streaming format" has been removed because IAFT oftentimes allows you to download the SHN/FLAC files using direct links.

1.9.2 - Large icons are now used in file detail lists. bt.etree.org links work once again. Adding sources to db correctly refreshes IAFT.

1.9.1 - This is strictly a code refactor to bring IAFT into an OO paradigm.

1.9.0 - Filetypes now works on the details page for any archive entry. Easy to access at the top of the page.

1.8.9 - A more refined about box. Add to db links only show after you open the details. This will be developed to check whether the artist and show exist on db before showing you the add to db dialog. This is the last in the 1.8 series. Expect better code organization in 1.9.x and furthur integration with db.etree.org. I hope we can include Lossless Legs too.

1.8.8 - All links in IAFT now open in the lightbox. You can open archive details and db sources while staying on the search page. The messageboxes when a source fails to upload to db have been fixed.

1.8.7 - Added the ability to upload sources directly from the archive to db.etree.org.
