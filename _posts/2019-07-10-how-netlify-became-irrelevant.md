---
title: How Netlify became irrelevant
---

Launching a new product or feature is a good thing... except when it is not, like it is the case with the [new analytics product](https://www.netlify.com/blog/2019/07/10/netlify-analytics---accurate-insights-without-performance-impacts/) from Netlify. 

First of all, the new product launch of Netlify makes it easier to compare them to their biggest competitor (when it comes to Jekyll websites): CloudCannon. Netlify and CloudCannon both offer static website hosting on a CDN with analytics (through log analysis). Both will process your forms with an optional captcha and both offer a CMS for your static website. The main difference is their pricing.

Netlify

- price: 9 dollar per month per website
- the fee is for the analytics only
- 100 forms per month per site (+19 dollar per month if you need more)

CloudCannon

- price: 25 dollar per month for unlimited websites
- analytics are included
- unlimited forms

Comparing these two options suddenly became very easy. Only if you want a single website with limited form submissions you should choose Netlify. 

Secondly, CloudCannon has a more mature product than Netlify. Until today we could have thought that the lack of analytics in Netlify was due to its immaturaty. We could have hoped (or expect) that Netlify would add this missing feature sooner or later. Now we know it wants you to pay a premium for it. Making a big fuss about a paid feature your competitor introduced long ago (for free), is not very smart. With this move Netlify loses (a lot of) its credibility. By trying to cash on such a basic functionality, Netlify also damages the trust of its clients. By 'basic' I mean 'non-optional'. If you want analytics, GDPR and ad-blockers limit your choices to log-analysis and Google Search Console. GDPR states that third party JS solutions require explicit user approval (which you will not get in most cases). 

A developer jokingly congratulated Matt Biilmann from Netlify with 'selling the users log records back to them'. One website with analytics at Netlify suddenly became just as expensive as a whole VM with CloudFlare (CDN) in front of it (which includes server logs). It also became clear that Netlify is WAY more expensive than CloudCannon. If you thought that Netlify was a smart and free choice for small websites, you must be willing to pass on analytics, which I guess you do not.