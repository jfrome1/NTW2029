So, again, Kristen helped me find where the function that was defined for the read event was, and realized that there was a function called the handleScroll().

What this does is that when the page is loaded, a variable called the screen height is measured, which is the total height of the entire screen. Then, a variable called scrollY is measured if the user starts scrolling. Finally, there is the viewport_height, that measures the amount of page, relative to the total page, that is shown as the page is loaded.

These three variables are measured in pixels, so when the user scrolls down more than 50% of the total pixel (screen height), the read event gets triggered.

However, for small pages like Exercise 13 page, where scrolling is limited even for my big computer, the total amount of pixels (screen height) was 850px, while the view_port height was 836px, which is already 98% of the page shown once the page is loaded. So, the read event becomes triggered despite the user not scrolling at all.


