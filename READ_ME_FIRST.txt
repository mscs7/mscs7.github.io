SUHAIL PORTFOLIO - CONTACT + SCROLL + GOOGLE PATCH

WHAT THIS FIXES
- LinkedIn and GitHub contact icons: site-config.js supplies actual public URLs.
- Kerala text: site-config.js overrides profile.location with Dubai, United Arab Emirates.
- Modern navigation: thin red native scrollbar plus a fixed clickable rail with 6 section dots on desktop.
- Google discoverability: static SEO metadata + robots.txt + sitemap.xml.

SAFE UPDATE INSTRUCTIONS
1. Back up https://github.com/mscs7/mscs7.github.io (Code > Download ZIP).
2. Extract this patch ZIP.
3. Upload the SIX website files to the ROOT of that repository, beside your existing content.js. Keep READ_ME_FIRST.txt on your computer.
4. Overwrite index.html, app.js and styles.css. Add site-config.js, robots.txt and sitemap.xml.
5. DO NOT DELETE/REPLACE content.js, work-content.js, work/ or projects/.
6. Commit changes to the branch used by GitHub Pages.
7. Check GitHub Actions, then hard-refresh https://mscs7.github.io/ (Ctrl+Shift+R).
8. Verify four contact cards (Gmail, Outlook, LinkedIn, GitHub), Dubai location,
   and red section navigation dots (visible on desktop widths above 1199px).

EDIT LATER
Edit site-config.js: profile.location, links.linkedin or links.github.
Because site-config.js runs AFTER content.js, these values override the editor's content.js values.
You can remove site-config.js later if you set your current content.js values correctly.

GOOGLE SEARCH CONSOLE
Go to https://search.google.com/search-console
Add the URL-prefix property https://mscs7.github.io/
Verify ownership using Google's provided HTML file: upload it to the site root and verify.
Under Sitemaps, submit sitemap.xml. Under URL inspection, inspect the homepage
and select Request indexing. Google indexing is not guaranteed or immediate.

IMPORTANT
- Your existing Python WP Scope and ScopeForge source code is unaffected.
- The site's tools showcase pages remain in projects/ (do not delete).
- The red dots are accessible links. Native browser scrollbar remains usable.
- The SEO sitemap lists two existing showcase routes: confirm both work after publishing.
