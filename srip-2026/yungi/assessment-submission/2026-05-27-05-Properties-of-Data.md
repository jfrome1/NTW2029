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
- Property : link, text
- Type : Both String
- What it tells us : The external URL destination, the visible link text
- It is useful for knowing which external resources (docs, articles, videos) students are actually following up on.


### 4) openNutshell

- Trigger : Student expands a Nutshell
- Property : page, text
- Type : Both String
- What it tells us : Which page the Nutshell is on, The title/label of the Nutshell that was opened


### 5) inactiveNutshell

- Trigger : A Nutshell has been open but the student stopped interacting with it.
- Property : text, duration
- Type : String, Number
- What it tells us : Which Nutshell went inactive, How long (in ms/seconds) the Nushell was open before going inactive
- Since closeNutshell was not measured well (only 2 events recorded), inactiveNutshell with its "duration" property is your best signal for how long a student engaged with a Nutshell



### 6) closeNutshell

- Trigger : Student explicitly closes a Nutshell
- Property : page, text, duration
- Type : String, String, Number
- What it tells us : Which page the Nutshell is on, Which Nutshell was closed, How long the Nutshell was open before being closed


### 7) tabFocused

- Trigger : The course site's browser tab comes into focus (student switches back to it).

| Property | Type | What it tells you |
| :--- | :--- | :--- |
| `page` | String | Which page was focused |
| `timeFocused` | Number | How long (in seconds) the tab was focused in this window |
| `timeHidden` | Number | How long the tab was hidden/away before this focus |
| `totalTimeOpen` | Number | Total time the tab has been open since it was loaded |
| `isInitial` | Boolean | Whether this is the first focus event for this tab load |



### 8) tabUnfocused

- Trigger : The student switches away from the course site tab.

| Property | Type | What it tells you |
| :--- | :--- | :--- |
| `page` | String | Which page was unfocused |
| `timeFocused` | Number | How long the student was focused on this tab before leaving |
| `totalTimeOpen` | Number | Total time the tab has been open |
| `isInitial` | Boolean | Whether this was the first focus window |

- tabFocused and tabUnfocused are paired events, so together they let you calculate an actual active attention time per page, which is a much stronger signal than just "was the tab opened or not".



### 9) rageclick

- Trigger : PostHog auto-detects a student rapidly clicking the same spot multiple times
- Property : $el_text, $event_type
- Type : Both String
- What it tells us : the text of the element being rage-clicked, the type of interaction (click)

- So, 218 rage click across 57 students in our data is a meaningful UX fiction signal. The $el_text property tells you what they were frustratedly clicking on.



### 10) openQuiz and closeQuiz

- Trigger : Student opens or closes a quiz component
- This does not have a custom property yet.


