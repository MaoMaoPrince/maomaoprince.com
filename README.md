# Black Desert Fishing migration notice

The site at https://maomaoprince.com points visitors to FishyStuff. The homepage and fallback show the full migration notice and quest link. The quest route shows munching MaoMao, the Triple Float Fishing Rod quest heading and a prominent guide URL, followed by a compact Discord invitation. Both layouts include a footer with the original FishyStuff and MaoMaoPrince branding.

| Old address | Destination |
| --- | --- |
| `/3x-tfr-quest` or `/3x-tfr-quest/` | https://fishystuff.fish/guides/3x-tfr-quest/ |
| `/` and unrecognised paths | https://fishystuff.fish/ and the quest guide above |

The notice uses `src/components/MovedNotice.astro` and the original animated `public/maomaoMunch.gif`. The fishing notice pages do not redirect automatically. `/discord` and `/fishcord` (with or without a trailing slash) redirect immediately to https://discord.com/invite/xRBqjyQ, with a clickable fallback and noindex metadata. The header Discord button uses this vanity route. Unrecognised paths use GitHub Pages' generated `404.html`, with HTTP status 404.

## Development and publishing

Run `npm install`, then `npm run dev`. Run `npm run build` and `npm run preview` to check the production build. Pushes to `main` use the existing GitHub Actions workflow to deploy `dist` to GitHub Pages.

Set the Pages custom domain to `maomaoprince.com` before updating DNS. `public/CNAME` is included in the build. At the DNS provider, configure the root domain with GitHub Pages' documented A records and `www` as a CNAME to `maomaoprince.github.io`. Remove conflicting web records, preserve email and other unrelated records, and enable Enforce HTTPS after the certificate is issued.

GitHub's setup instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

The old documentation sources remain in the repository for reference but are no longer published as routes.

## Footer artwork and typography

The footer uses two smooth water canvases: a background and a translucent foreground that covers the arm of MaoMao and approximately the bottom quarter of the FishyStuff mascot while keeping their mouths visible. Broad, smooth waves have a maximum displacement of 13.5px in normal mode and 16px in choppy mode. The mascots follow the same surface function at their horizontal positions, with gentle rocking based on its slope. MaoMao is on the left. Their names bob above their heads in regular weight. The water adds a subdued distant swell, depth shading, and a soft ambient reflection. The water uses antialiased paths with a resolution capped at twice the CSS size and requestAnimationFrame, pauses when the footer is offscreen or the tab is hidden, and stays still for reduced-motion preferences. Mascot positions are measured on resize and after fonts load, rather than on every frame.

All site text uses the system sans-serif font, with a prominent bold heading and readable links. No font download is needed for the current design. The heading uses a semibold weight and a wider content area so it fits on one line where space allows. Slightly brighter, irregularly scattered stars decorate the top of a muted night background; there is no moon.

The Discord logo is from Font Awesome Free (Fonticons, Inc.), licensed under CC BY 4.0. Its attribution is included in the SVG, and the license is in public/Discord-icon-LICENSE.txt.

The header places maomaoprince.com at the top left and the Discord invitation at the top right. Desktop layouts use a larger mascot, heading, and destination URLs; the two footer mascots have wider spacing. Narrow layouts keep the header and destinations within the viewport.

The supplied transparent public/maomaoprince.png is used for the floating MaoMao mascot, the small header mark, and the favicon. The homepage destination sits close to the main heading; the quest subsection uses a smaller title with the guide URL directly below it.

Search metadata uses the homepage title Home for Black Desert Fishing, route-specific descriptions, canonical HTTPS addresses, and Open Graph titles. robots.txt allows crawling and references the two-page sitemap.xml. The 404 notice is marked noindex. favicon.png is a square 96px version of the supplied PNG with transparent padding. Search engines decide when to recrawl and how to display the title after publishing.

The hero sits higher on the page to leave open space below it. The floating MaoMao has a resting counterclockwise rotation of 7 degrees, with wave-driven rocking layered on top.

Clicking the water toggles faster, choppier waves, with a gradual blend between modes. The invisible water button supports keyboard activation, exposes its pressed state, and leaves the mascot links clickable. Reduced-motion mode keeps the water still. The wave outline is translucent, and the hero mascot is slightly smaller with more space above the heading.

The original main swell and its harmonic share a travelling phase. Both mascots follow that surface. Choppy mode increases speed to 2.2 times normal and strengthens the crest harmonic.

The background swell follows the same main surface with a small phase offset. Footer mascot artwork keeps the same dimensions on mobile and desktop. The sky has 38 softly twinkling stars spread down across the hero area with staggered timing and occasional muted colour shifts. There is no comet. Reduced-motion preferences disable twinkling.

The night sky uses a dark space-like background with two small, faint pink and purple accents. A faint, tiled monochrome grain softens gradient banding without an animation loop. The water darkens toward the bottom. Hovering, focusing, or tapping the gold rod name opens a compact item preview. Escape or clicking outside dismisses it. The item stats and local icon come from https://bdocodex.com/us/item/16153/; the preview links back to that source and requires no third-party script or live request. The white brackets use regular weight and explicit spacing, with the rod name's tracking reset.


Contrast check: using conservative bright background bounds of #2a3c50 for sky and link panels and #304e60 for water, white headings are 11.29:1, gold item text 6.38:1, destination links 7.45:1, header site text 6.70:1, Discord text 7.02:1, and footer names 7.14:1. The dimmest tooltip metadata is 6.23:1 against #141923. Headings use weight 600 with the gold item at 700; brackets stay white and regular weight.

An occasional unframed 36px rod icon floats through the water with roughly its lower half submerged, a 38-degree clockwise resting tilt so the rod lies nearly along the surface, surface-driven bobbing, a gentle 2.5px buoyant bob, and an additional 10-degree rocking motion. It shares the water animation loop, crosses in 18 seconds with random quiet gaps after an initial 6-second delay, and is hidden for reduced motion. The decorative icon cannot intercept clicks.


Responsive sizing scales gradually from a 112px to 128px hero, 24px to 36px heading, and 16px to 24px destination links. The hero keeps its size on phones and short windows, with slightly tighter spacing; footer mascots retain their dimensions on mobile. Both routes were checked at 320, 375, 768, 1024, 1440, and 1920px widths, including a 1366x536 short window.

A transparent 48px banana can occasionally drift past instead of the rod (28% chance per passage), flipped horizontally with an 18-degree backward resting tilt. It takes 30 seconds to cross, rocks gently, and shares the surface bob and animation loop. A random 14–36 second quiet interval follows each object; reduced-motion preferences hide both objects. The supplied photo's white background was removed with built-in imagegen, preserving the banana, then resized to a 9.5 KB transparent WebP.
