**Goal:** This file is meant to document the limitations of the charts in the Posthog dashboard Activity over 2520 semester. 

## **Average duration spent on each page type**

### **Overview**

For each page type, this chart shows the average duration students spent on all pages that fall under the page type. It is meant to serve as an estimate of engagement with different page types. 

### **Filters:** 
Chart data is filterable by course week, date range and by student. Setting all filters to null will display duration across all students, for all weeks in AY25/26 Sem 2\. 

### **Limitations:**

#### 1\. Students idle on website  

As the current inactivity threshold is set to 900 seconds/15 minutes, this method will only split a session if the time gap between two consecutive events is greater than this threshold. Time gaps between two events may be barely below the threshold (i.e. \~14min), which will cause them to be counted in full as engagement time, even though the student may have been inactive for most of that interval. As there is currently no way to tell if students were actually active on the page (e.g. reading instead of switching to a non-website tab) or inactive (e.g. leaving the tab open & walking away), the best estimate is the time between events; which cannot distinguish sustained reading from a temporary absence that happened to end before the timeout. Hence, measured duration will be biased high.    
\*\*Note: The inactivity threshold is arbitrary, and was chosen based on what is assumed to be a reasonable amount of time for students to spend between triggering events. However, different events may have different inactivity thresholds depending on the element that triggered the event: for instance, students would be expected to spend more time on a nutshell with more text than a shorter nutshell.    

#### 2\. Last-event duration undercounting 

 This method uses min(timestamp) and max(timestamp) to get the first and last events in a session; duration is then calculated using the time difference between these events. However, there are some sessions where the last event is not a \`pageleave\` – in these cases, there is no marker for when the student actually left the page. If the student continues using the website for a while after triggering the last event, this trailing time is not captured by max(timestamp) and will be excluded from the total duration. As such, sessions with a non-pageview event as the last event may have undercounted durations. Currently, 1988/6947 sessions/sub-sessions have a non-pageleave event as the last event and may be affected.      

#### 3\. Threshold sensitivity  

Different inactivity thresholds will lead to different durations-per-session. Final durations will shift according to the threshold set – a 900-second threshold will lead to larger durations per session compared to a 600-second threshold, as the events will be split fewer times and hence retain the time gaps in the final duration. Total durations will also change – from previous tests, the 600-second threshold produced 6917.64 minutes spent on site across all students from the 2520 cohort, while the 900-second threshold produced 9587.00 minutes. The total duration for the 600-second threshold being smaller than the 900-second threshold is expected, as smaller thresholds will filter out more time gaps and split sessions more frequently.

In summary, the threshold selected has the potential issues: if it is too low, gaps where the student was actually engaging with the site will be filtered out (undercounting engagement). If it is too high, gaps where the student actually walked away will be credited as engagement and counted in total duration (overcounting engagement).   

- Solution: tabFocused events would make a student switching off tabs visible, which removes uncertainty around whether a gap was caused by the student switching off the tab (not engaging). Time spent with the tab unfocused could then be confidently identified, instead of being assumed using a threshold.    

\*\*Test results for 600s & 900s thresholds: https://drive.google.com/file/d/1aoGeCT6QLHlz9SAsh0LGGQTGSgQuPek7/view?usp=sharing  


## Total page visits to the pages from each page type 

### Overview

This chart shows the count of all pageview events triggered on the pages of each page type. 

### Filters: Chart data is filterable by course week and by date range. 

### Limitations:

**1. Different number of pages for each page type**

Each page type has a different amount of pages that belong to it (i.e. resources has 8 pages while schedule has 1 page). A page type may have more pageviews than another page type due to having more pages – as such, differences in page visits may reflect the website’s structure instead of the degree of engagement with each page type. 


## **Activity breakdown by event type**

### Overview

This chart breaks student activity down by event type. Each pie chart segment is a different event type, and shows the number of times that event type was triggered. 

### **Filters:** 
Chart data is filterable by course week and by date range. 

### **Limitations:**

#### 1\. Number of elements available on each page 

The elements that trigger certain event types (i.e. nutshells, external links) may be present on some pages and absent on others. Considering this, the chart is not able to be filtered by page, as it may produce misleading conclusions. However, certain pages may be accessed more heavily depending on the week, such as course info pages being more heavily utilized towards the start of the semester. Depending on which page was more commonly accessed that week, some events might not be present in certain weeks. This could explain the presence or absence of certain event types, rather than reflecting how much students were utilizing the available resources. As such, the chart may partially reflect the natural time sequence of page usage, rather than how heavily students utilized the available resources, which is what the chart is meant to show.  



## **Activity by days to due date (exercise assignments)**

### Overview

This chart maps student activity for each day in the window between the due date of an exercise and the closest previous due date. For instance, if Exercise 1 was due on 4 Jan & Exercise 2 due on 6 Jan, the chart for Exercise 2 would show the activity for each of the two days between 4 and 6 Jan. Student activity is defined as the number of events triggered on all exercise pages, resource pages and course information pages, within the exercise window. 

### **Filters:** 
Chart data is filterable by exercise type and by student. Filtering to a specific exercise will cause the chart to first compute the number of days between the exercise’s due date and the closest due date of a previous exercise; then for each day, the number of events triggered on those pages will be displayed as activity x days from the exercise due date.  

### **Limitations:** 

#### 1\. Exercises with the same due date

Some exercises have the same due date (e.g. Exercise 12 & Exercise 13-4). In these cases, their previous-exercise due dates are set to the same point – however, this means the activity windows for both exercises will be identical. As such, both exercises will count the same number of events on the same days, and their charts will show the same event count for each day. 

Under the current definition of days to due date, it is not possible to distinguish which activity/events triggered should belong to which exercise if both have the same due date, as any event that falls within the window will be equally attributed to both exercises.

**Result:** Activity is biased high. 

#### 2\. Some papers have overlapping due dates with exercises 

The charts for days to an exercise due date and days to a paper due date overlap in pages considered valid as preparing for assignments – in both charts, all events triggered on resources and course info pages are considered activity, with the only differentiating pages between charts being exercise pages for the exercise chart and paper pages for the paper chart. As such, if the windows for a certain exercise and a specific paper overlap, events triggered on the resources and course info pages within the window will be double counted as activity for both the exercise and paper. 

**Result:** Activity is biased high. 

#### 3\. Differing number of days to due date for each student 

The current chart shows student activity against the number of days remaining before an assignment is due. Because students can have different due dates, their windows vary in length – one student might have 14 days before an assignment, while the rest have 12\. This creates two problems:   
 

1. Students with longer windows have more days to generate activity, so they will appear more engaged than students with shorter windows, even when their actual behavior is similar.   
2. If the chart is filtered by exercise only, the x-axis will extend to the longest window for that exercise across all students. For instance, if only one student had 14 days while everyone else had 12, the chart will show bars from Day 0 to Day 14\. This will likely lead to low activity on days 13 and 14, which may be misleading, as the immediate conclusion would be that engagement was low on those days – however, the actual cause was that only one student was ever able to be active on those days. 

**Result:** Activity is biased low. 

