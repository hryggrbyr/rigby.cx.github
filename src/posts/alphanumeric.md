---
layout: book
Collection: Books
date: 2021-04-27
published: true

---
![](/images/95e12c25267b4054.jpg)Today I had to send an "\`ID\`" in the body of my POST request. It turns out that the API doesn't care what the value is - it just needs to be alphanumeric (a-z, A-Z, 0-9), exactly 18 characters long, and not already in the system.

So I decided to generate a random string<sup>*</sup>!

## Shut up already and give me the code!

`const randomString = (len = 1) => new Array(len*2).fill(1000).map((x) => Math.ceil(x * Math.random()).toString(36).charAt(0)).filter(Boolean).sort(() => Math.random() - 0.5).map((x,i) => i % 2 === 0 ? x.toUpperCase() : x).join('').substr(0,len)`

## Now, let's break that down!

There's a lot going on in that one line!

Firstly, we create an `Array` with twice as many "characters" as we need.

Then we `fill` each item in the array with the number 1000.

For each of those items (`.map()`), we randomise the number by multiplying it by a randomly generated number between 0 and 1 (`x * Math.random()`). This is then converted into a two-character string. We only need the first character so let's grab that with `charAt(0)`. You could also use `[0]` as shorthand.

Now we have an Array of twice as many random alphanumeric characters as we asked for.

Just to be on the safe side, we remove any empty or falsey values using `.filter(Boolean)` - this will get rid of any zeroes but meh 🤷‍♀️