# Black Desert Fishing migration notice

The site at https://maomaoprince.com points visitors to FishyStuff. The homepage, quest route and fallback notice share the same content: the new home, an explicit Triple Float Fishing Rod quest guide link, and the MaoMaoPrince fishing community Discord invitation from the guide.

| Old address | Destination |
| --- | --- |
| `/3x-tfr-quest` or `/3x-tfr-quest/` | https://fishystuff.fish/guides/3x-tfr-quest/ |
| `/` and unrecognised paths | https://fishystuff.fish/ and the quest guide above |

The notice uses `src/components/MovedNotice.astro` and the original animated `public/maomaoMunch.gif`. There is no automatic redirect. Unrecognised paths use GitHub Pages' generated `404.html`, with HTTP status 404.

## Development and publishing

Run `npm install`, then `npm run dev`. Run `npm run build` and `npm run preview` to check the production build. Pushes to `main` use the existing GitHub Actions workflow to deploy `dist` to GitHub Pages.

Set the Pages custom domain to `maomaoprince.com` before updating DNS. `public/CNAME` is included in the build. At the DNS provider, configure the root domain with GitHub Pages' documented A records and `www` as a CNAME to `maomaoprince.github.io`. Remove conflicting web records, preserve email and other unrelated records, and enable Enforce HTTPS after the certificate is issued.

GitHub's setup instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

The old documentation sources remain in the repository for reference but are no longer published as routes.
