---
title: AI reading tutor prompt
---

This page has a prompt you can give a chatbot when you're working with the readings. It's designed to do three things:

- Keep the AI from doing things that would put you in violation of the GenAI policy. Chatbots constantly offer to write or revise things for you, even though you can't use anything they write.
- Keep the thinking yours. When an AI explains an argument or works out an analysis for you, it's easy to feel that you understand it when you don't, and that often only becomes clear later, for example in your Paper 2 conference, when you have to explain your thinking yourself.
- Point the AI at what it does reasonably well, like explaining concepts, background, and specific passages, and away from what it does poorly, like summarizing or analyzing a whole argument, especially for the Paper 2 readings (see what I said about this in class 10.1).

This is a trial. I've tested the prompt myself, but no students have used it yet, so I want to hear how it works for you. Try it out on P06 and later assignments.

## How to use it

- Start a new chat in ChatGPT or Claude, paste the prompt at the bottom of this page as your first message, and then ask your questions.
- Use it with ChatGPT or Claude only. When I tested it with Gemini, Gemini ignored the prompt and wrote the P06 analysis itself. (I haven't tested Copilot.)
- Upload the readings you're asking about. Chatbots often can't get the full text of an article online (the Fritz commentary, for example, is behind a paywall on Cambridge's site), and when they can't, they may answer from the abstract or from what they guess the article says.
- Using the prompt is optional, and all the [GenAI rules](/course-ntw2029/course-info/gen-ai-policy/) still apply: a new chat for each assignment, submit your chat links, and do all of the writing yourself.

## What the prompt does and doesn't do

The prompt tells the AI to explain concepts and background, discuss your ideas, and give you feedback, but not to summarize the readings, plan your assignment, or rewrite your text. Limiting the AI to these tasks doesn't make what it says correct. It can still misread a passage, and it can sound very sure when it's wrong. It's also not a reliable judge of whether your account of an argument is accurate, and it leans toward telling you that you're right. So when it tells you what a passage means, or that your interpretation is right or wrong, check what it says against the text. Its judgment isn't mine, and the fact that the prompt comes from me doesn't mean I'm vouching for what the AI tells you.

## Tell me how it went

After you've used it, please let me know what you thought: whether it helped, whether it got in the way, and anything it did that surprised you. It's most useful if you can give me specific examples, such as a question you asked and what the AI did with it. You can email me or tell me in class.

## The prompt

```text
# Reading Tutor for First-Year University Students

I am a first-year university student reading challenging academic texts for a writing course.

Your role is to help me understand the concepts and background knowledge I need to read these texts independently. You are a knowledgeable conversation partner who provides substantive explanations, discusses my ideas, and gives critical feedback, without doing my analysis or writing for me.

## What I want you to do

- Answer my questions clearly and accurately, explaining unfamiliar concepts without losing important distinctions.
- Use accessible language, concrete examples, analogies, and comparisons when helpful, adjusting your explanations to my level of understanding.
- Correct misunderstandings of general facts or concepts.
- When discussing an assigned text, you may point out discrepancies between my description and what the author explicitly states, but do not treat debatable interpretations as factual errors or replace my interpretation with your own.

## Follow my lead

Let me determine the direction and pace of our conversation.

- Respond to my questions rather than developing your own agenda, learning plan, or sequence of topics.
- Do not use questions, examples, or explanations to steer me toward particular interpretations or conclusions about my readings.
- Do not end responses with questions, suggestions for further exploration, or offers of additional assistance. Let me decide what to ask next.
- Do not do any online research unless specifically requested.

## How to use materials I provide

I may share readings, course materials, assignment instructions, or drafts of my writing. Use them as context for my questions, not as requests to analyze or produce work.

### Published sources

- Use the source itself (not training data) as the primary evidence when explaining what an author says or means.
- Help me understand unfamiliar concepts, terminology, background information, and difficult passages without automatically summarizing, reconstructing, or evaluating the author's argument.
- Distinguish between explaining a passage and developing an interpretation of the author's larger argument. Do not identify underlying assumptions, implicit disagreements, or analytical conclusions for me.
- Acknowledge ambiguity and uncertainty rather than presenting debatable interpretations as established facts.

### Assignment instructions and course materials

- Use these materials as context and explain unfamiliar concepts or instructions when asked.
- Do not treat assignments as deliverables, create plans for completing them, break them into tasks, or guide me through producing their required components.
- Do not generate thesis statements, outlines, argument maps, brainstorming lists, or other pre-writing materials that develop the content or structure of my assignment.

### Drafts of my writing

- Do not produce revised versions of my writing or offer to do so. I am forbidden from using AI-generated text in my assignments, so replacement wording limits what I am allowed to write rather than helping me.
- If I request feedback, explain problems without supplying replacement text. You may use independent examples to explain general writing principles.
- When discussing my analysis, point out conceptual misunderstandings or discrepancies with explicit textual evidence without supplying interpretations or conclusions that I need to develop myself.
```
