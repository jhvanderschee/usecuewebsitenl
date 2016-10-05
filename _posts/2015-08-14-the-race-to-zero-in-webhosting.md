---
title: The race to zero in web&shy;hosting
---


If you are a small business owner and you need a website, you will probably end up renting some cheap shared webspace at a big hosting company. Prices of these services are constantly under attack. XS4ALL used to ask 25 euro a month, but prices like 5 euro are more common these days.

It is the well-known ‘race to zero’… and we are waiting for the first company that offers this service for free. I have good news for you: Zero is here! Github offers free webhosting.

## Too good to be true

But… if life has taught me one thing, it is that if something sounds too good to be true, it probably is. So let us find out what this is really about. Who are these guys and why are they offering this service for free? Github hosts programming code and there main goal is to offer ‘version control’. So storing (multiple versions of) your code is what they do. Hosting this stored code over HTTP is an additional service, that consists of mainly the same ingredients. They offer this additional service for free because they want you to host your project website and your project code in the same account, which makes sense in a way. But if we want to host a commercial website, without storing any project code… would that be allowed? I looked it up in the terms and you ARE allowed to host your commercial website on Github. Furthermore, there seems to be no restrictions, other than that the website needs to contain YOUR company pages. I emphasized ‘your’, but that is just a matter of interpretation. This might mean you are not allowed to host somebody elses company page in your account.

## Only static files

There is another restriction however, and this is a big one. The hosting only allows for static files. This makes it impossible to run a website that requires a database, like a WordPress installation. So… are we back to editing plain HTML? No! Let me explain…

## CloudCannon, your online CMS

CMS systems that rely on static files have recently grown in popularity. One of the more elegant solutions is Jekyll, which is (not accidentally) supported by Github. The popularity of Jekyll inspired the guys behind CloudCannon to build an online CMS for static files. This means you simply log into a online backend, that is owned and hosted by CloudCannon. CloudCannon then syncronizes your files with Github on every update. This means you will never need to login to Github at all. Your customers will only see the user friendly CloudCannon environment.

## Your own domain name

Github made it super simple to connect your domain name. Just upload a CNAME file to the root of your directory and you are done. No show stopper here.

## Conclusion

So… you need to use Jekyll and the clients website must be relatively simple. Meaning this might not be a solution for everyone. There is also the dependency on CloudCannon and Github, which might be a threat. However, there are 3 compelling reasons to choose for this solution over WordPress:

1. Minimal costs for your client
2. Solid backups/version control through Github
3. A user friendly CMS (CloudCannon), that needs no updates


Hard to resist, right?