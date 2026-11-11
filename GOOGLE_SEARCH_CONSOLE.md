# Search Console checklist for mscs7.github.io

## Current screenshots (11 November 2026)

- `https://mscs7.github.io/sitemap.xml` opens as XML in Chrome. The warning about missing styling is normal and **not** a parsing error.
- In Search Console, `/sitemap.xml` says **Couldn't fetch / Unknown**, with 0 discovered URLs. This reflects the status of Google's last sitemap request and does not alone identify the specific cause. Click the sitemap row and inspect the detailed error.
- For `/projects/wpscope/`, **URL is not on Google / URL is unknown to Google**, but **Indexing requested** appears. That is not evidence of a `noindex` or robots block. Search Console has not yet confirmed that the URL is indexed.
- The homepage's **LIVE TEST** had shown “URL is available to Google.” A successful live test is different from Google's actual index status.

## What to do in Search Console

1. Confirm the exact property prefix is `https://mscs7.github.io/`.
2. Keep the existing `sitemap.xml` submission; don't repeatedly submit it on the same day.
3. Open the existing sitemap entry to inspect its detailed status.
4. Verify `https://mscs7.github.io/robots.txt` permits crawling and lists the correct sitemap.
5. Test the homepage and key project URLs with URL Inspection → TEST LIVE URL.
6. Request indexing for the homepage and a few priority pages once; then give Google time to crawl them.
7. Return in several days to look for the sitemap processing status and index coverage.
8. If there is a specific persistent error, use Search Console's details and live inspection to identify blocking, redirects, HTTP errors or XML parsing problems before changing files.

**Do not delete and re-add the sitemap repeatedly.** It may be pending processing. Google's documentation says crawling can take days to weeks and indexing is not guaranteed by a sitemap.

## What the ZIP preserves

The original `robots.txt` and `sitemap.xml` from the prior update are included unchanged. The sitemap lists 16 URLs; they all correspond to `index.html` files in the supplied local preview (13 work pages, homepage, two showcases). Because we could not fetch the live site directly from the public web tool, this validation is not proof of how Googlebot sees your production site.

Useful official guides:
- https://support.google.com/webmasters/answer/7451001
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors
