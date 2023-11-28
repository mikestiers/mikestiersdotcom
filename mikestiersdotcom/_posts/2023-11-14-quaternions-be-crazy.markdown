---
layout: post
title:  "quaternions be crazy"
date:   2023-11-14 12:14:11 -0400
categories: random
---

quaternions are pretty interesting.  i'm not going to pretend i fully understand them, but it's kind of a funny thing about math and game dev.  you need to be aware of it, but you don't actually have to be well-versed in it.  i frequently see people type "quaternion.identity" in their code and when pressed for an explanation, it's usually "that's just what you usually do".

so i wanted to try and dumb it down to a sentence that is better than "that's just what you do" for in the future when someone maybe asks me why i'm doing it.  so first off, quaternion.identity is just 1 so i think of it like "i need to provide a rotation value but i don't want it rotated, so multiply this thing by 1, so don't really do anything to it".  think of it like you want this thing to appear and you don't want it to rotate at all from the original orientation of the model. why "identity" though?  because it's an [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix) and it's just one of those magical matrix transformations like the [clockwise rotation matrix, counter-clockwise rotation matrix, etc...](https://en.wikipedia.org/wiki/Rotation_matrix).

but what's the deal with that word quaternion?  i haven't really explained it very well, have i?  i should feel like a big dumb faker, right?  yeah, i thought so too, but then i read the unity api docs and it said this:

<img src="/images/quaternions.png" alt="google" class="responsive-image">

such a casual flex in the documentation, right?  now i don't feel so bad.  but don't let that stop you from learning.  you're not alone.

[visualizing quaternions](https://eater.net/quaternions)