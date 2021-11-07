---
path: "/blog/giag2021-web1-challenge-guide"
date: "2021-10-13"
author: "Ben Silverman"
title: "GIAG 2021 Web 1 Challenge Guide"
tags: ["walkthrough"]
---

This guide is for the Web 1 challenge of our 2021 _Give It A Go_ workshop!

You can find the challenge [here](http://server.cybersoc.co.uk/challenges/web/1) in case you'd like to attempt it first before reading the rest of this page.

---

## The challenge

This challenge presents us with the following content:

![](/posts/2021-10-13-giag2021-web1-writeup/challenge-screen.png)

We can enter an IP address into the input field, and the utility will return a reponse containing how long it took to pin the address. Pretty straightforward! We're going to need to find some kind of key in this

## Hint #1

<details>
  <summary><b>Click here to reveal.</b></summary>
  <p>Think about how the utility might be running in the backend.</p>
  <p>How would you going about pinging an IP address if you wanted to?</p>
</details>

## Hint #2

<details>
  <summary><b>Click here to reveal.</b></summary>
  <p>You can chain Linux commands together with operators like <code>&&</code> and <code>||</code></p>
  <p>How could that be used in this context?</p>
</details>

## Hint #3

<details>
  <summary><b>Click here to reveal.</b></summary>
  <p>The command the server is running essentially looks like this:</p>
  <p><code>exec("ping [your input here]")</code></p>
  <p>How can you take advantage of this?</p>
</details>

<br />

---

## Full Walkthrough

If you've used the hints above and are still at a bit of a loss, don't worry! We've written a full walkthrough of the challenge so you can still complete it and learn something new. Hopefully we'll do something like this again another time and you'll be able to use this new knowledge to your advantage!

<details>
  <summary><b>Click here to reveal.</b></summary>
  <p>As shown in Hint #3, the server runs something called an <code>exec()</code> command to ping the IP address we provide. This creates a shell on the server, executes the command, and sends the result of that command back to the server, where it then gets sent back to us in the browser.</p>
  <p>The way we can take advantage of this is by including something <i>other</i> than an IP address in that input field; it'll get passed through to the shell and run just like any other command would.</p>
  <p>Like Hint #2 says, if we provide an IP address as the first part of our input but then <i>chain</i> another command onto the end, we can get the server to run it and return even more stuff than it's supposed to. Try using the code below as you input:
  <p><code>0.0.0.0 && echo Hello!</code></p>
  <p>You should see something else appear at the end of the response:</p>
  <img src="/posts/2021-10-13-giag2021-web1-writeup/command-example.png" alt="A screenshot showing an input field and a response message."/>
  <p>This might be enough help for you to carry on by yourself, now, so feel free if that's the case!</p>
  <p>Continuing on, though, we can see that it's possible to get the server to run commands of our choosing. Very powerful indeed!</p>
  <p>To list the files in the same directory as the server, you can use <code>0.0.0.0 && ls</code> as your input. See how they get added to the end of the response?</p>
  <p>After doing that, you might notice a <code>key.txt</code> sitting there. How about we try and <a href="https://linuxize.com/post/linux-cat-command/" target="_blank"><code>cat</code></a> that and see what it says?</p>
  <p>Enter <code>0.0.0.0 && cat key.txt</code> and we're done. Well done on finding the key! 😄</p>
  <p>Hopefully this walkthrough helped in explaining how the attack we just did worked. If you still would like a little more help, grab one of our committee members and they'll be sure to explain anything else they can.</p>
</details>
