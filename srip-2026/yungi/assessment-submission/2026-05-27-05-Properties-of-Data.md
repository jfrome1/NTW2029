# What is a property?

- Piece of metadata attached to that event that describes the context of *how, where, or what* like : which page, which link, how long were they focused, etc.

- Every event automatically gets a set of standard properties from PostHog (browser, URL, device, location, etc.). On top of that, our site's code sends custom properties that are specific to what that event means for the NTW course.

- The custom properties help us analyze the events happening in the website.


# Our team's custom properties analyzed by AI

### 1) read
- Trigger : Student scrolls past 50% of a page - fired once per page load
- Property : page
- Type : String
- What it tells us : Which page the student read past 50%
- With $pathname, we can identify which pages students are actually consuming


### 2) internalLinkClick
- Trigger : Student clicks a link that stays within the course website
- Property : link, text
- Type : both String
- What it tells us : the destination URL they clicked toward, the visible link text they clicked
- So, link tells us the path taken, text tells us what the student "intended" to click on


### 3) externalLinkClick

- Trigger : Student clicks a link leaving our site entirely
