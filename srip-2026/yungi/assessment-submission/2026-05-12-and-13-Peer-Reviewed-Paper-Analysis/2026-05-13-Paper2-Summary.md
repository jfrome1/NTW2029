# Summary of : Inferring Student Learning Behavior from Website Interactions
<br>
<h2>Overview of the paper</h2>
<p>
This study investigates how educators can use unobtrusive data collection (log files) to monitor student learning experiences in electronic environments where face-to-face feedback is impossible. The core premise is that actual behavior is a more reliable indicator of engagement than student-expressed opinions like the questionnaires.
</p>

<br>

<h2>Key Behavioral Inferences</h2>
<ul>
  <li>Task-Directed Behavior : Students use resources primarily for project completion and show a reluctance to engage with "extra" communication using tools in the website</li>
  <li>Procrastination Patterns : Usage frequency peaks significantly 1~2 weeks prior to the major assignment due dates, which means they procrastinated till then.</li>
  <li>Interaction Grade Correlation : There is no significant relationship between login frequency and their final grades. However, there is a significant positive correlation between actual engagement / interaction and their grades, meaning that the more they interacted with the materials for each page, the better grade they got.</li>
</ul>


<br>

<h2>Metrics Comparison: 2003 vs Our Current Project</h2>

<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-family: sans-serif; background-color: #161b22; color: #c9d1d9; border: 1px solid #30363d;">
  <thead>
    <tr style="background-color: #21262d; text-align: left;">
      <th style="padding: 12px; border-bottom: 2px solid #30363d;">Paper Metric (2003)</th>
      <th style="padding: 12px; border-bottom: 2px solid #30363d;">Definition</th>
      <th style="padding: 12px; border-bottom: 2px solid #30363d;">Modern Project Equivalent (PostHog/Astro)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid #30363d;">
      <td style="padding: 12px; font-weight: bold;">Session</td>
      <td style="padding: 12px;">Sequence from login to logout.</td>
      <td style="padding: 12px;">PostHog Session tracking.</td>
    </tr>
    <tr style="border-bottom: 1px solid #30363d;">
      <td style="padding: 12px; font-weight: bold;">Task</td>
      <td style="padding: 12px;">Time spent within one specific resource.</td>
      <td style="padding: 12px;">
        Time spent in <code style="background-color: #2f363d; padding: 2px 4px; border-radius: 4px;">openQuiz</code> or 
        <code style="background-color: #2f363d; padding: 2px 4px; border-radius: 4px;">openNutshell</code>.
      </td>
    </tr>
    <tr>
      <td style="padding: 12px; font-weight: bold;">Activity</td>
      <td style="padding: 12px;">A single interaction (click/read).</td>
      <td style="padding: 12px;">
        Events: <code style="background-color: #2f363d; padding: 2px 4px; border-radius: 4px;">read</code> (50% scroll), 
        <code style="background-color: #2f363d; padding: 2px 4px; border-radius: 4px;">internalLinkClick</code>.
      </td>
    </tr>
  </tbody>
</table>


<br>
<br>


<h2>Implications for Enhancing our Course</h2>
<p>
  <ul>
    <li>Avoiding the "Cool" UI Trap (as mentioned in the previous meeting) : We should focus the Nutshell/Quiz Components functionally essential to the curriculum's website.</li>
    <li>Differentiated Support : Since the "low achievers" stated in the paper needs additional support through templates, past projects, etc, maybe we can use the PostHog features that detect when a student is struggling and automatically recommend help resources? (But, how do we determine whether the student is having trouble or not?)</li>
    <li>Gender/Role Observations : We can analyze our user metadata to see if different student demographics interact with our learning modules in unique ways.</li>
  </ul>
</p>


<h3>Possible enhancement : Since the login frequency does not really affect the student's performance, we can focus more on making "productivity" related features?</h3>










