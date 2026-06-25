## **Activity by days to due date (exercises)**

**Overview**

In Posthog, the 'Activity across days to an exercise due date' chart maps student activity for each day in the window between the due date of an exercise and the closest previous due date. For instance, if Exercise 1 was due on 4 Jan & Exercise 2 due on 6 Jan, the chart for Exercise 2 would show the activity for each of the two days between 4 and 6 Jan. Student activity is defined as the number of events triggered on all exercise pages, resource pages and course information pages, within the exercise window. Other variables recorded include the total number of unique students that triggered activity within the given window, and the maximum number of days to due date any student had for that assignment.  

**Filters:** Chart data is filterable by exercise type and by student. Filtering to a specific exercise will cause the chart to first compute the number of days between the exercise’s due date and the closest due date of a previous exercise; then for each day, the number of events triggered on those pages will be displayed as activity x days from the exercise due date.  

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


#### 4\. First exercise lacks previous due date  

The first exercise is not preceded by a previous exercise, and hence does not have a valid window. The chart ends up using the start of semester date as the previous due date, hence the window for the first exercise is (start of semester, exercise due date]. This is misleading, as activity seen around the start of semester date is likely to include exploratory activity, and not preparation for the assignment. 

**Result:** Activity is biased high (for the first assignment). 

