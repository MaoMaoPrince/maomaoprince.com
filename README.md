# Black Desert Fishing migration notice

The site at https://maomaoprince.com points visitors to FishyStuff. The homepage and fallback show the full migration notice and quest link. The quest route shows munching MaoMao, the Triple Float Fishing Rod quest heading and a prominent guide URL, followed by a compact Discord invitation. Both layouts include a footer with the original FishyStuff and MaoMaoPrince branding.

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

## Footer artwork and typography

The footer has a small animated blue pixel-water canvas with the surface above the two mascots. It renders at a four-pixel grid and ten frames per second; reduced-motion preferences show a still surface.

The MaoMaoPrince wordmark uses Ready P9 by Scott Lawrence (bleullama), with browser-synthesised bold weight. The unmodified font is licensed under Creative Commons Attribution–ShareAlike 3.0, with its original attribution and license at `public/ReadyP9-LICENSE.txt`. Source: https://fontstruct.com/fontstructions/show/579021/ready_p9. License: https://creativecommons.org/licenses/by-sa/3.0/.
