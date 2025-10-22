# Course Design Folder Reorganization Plan v7

**Purpose:** Systematic evaluation of all instruction/context files to identify duplication, conflicts, compliance issues, and improvement opportunities. AI makes recommendations only - user implements changes.

**Created:** 2025-10-21  
**Last Updated:** 2025-10-22  
**Status:** Phase 4 In Progress - refine instructor feedback complete, qti complete, grading papers complete, post-class feedback complete

---

## CRITICAL: AI Role and Limitations

### What AI Does

- **Evaluate files** against criteria documents
- **Identify issues:** duplication, conflicts, outdated content, compliance problems
- **Make recommendations:** what to keep, revise, relocate, or archive
- **Create new versions:** when revisions needed AND sufficient data exists
- **Update tracking:** document all evaluations and recommendations in this file

### What AI Does NOT Do

- **NO moving files or folders** - user handles all file operations
- **NO deleting files** - user decides what to archive
- **NO modifying original files** - only create new versioned copies
- **NO reorganizing folder structure** - only recommend changes
- **NO creating revisions without sufficient data** - must ask user how to proceed if data gaps exist

### User Implements

- Move files to old/ or other folders as recommended
- Delete obsolete versions after verifying new versions
- Update project-ntw2029-course-design-instructions with file changes
- Update Project Knowledge when standard files are revised

---

## How to Use This Document

### Starting a New Chat Session

When beginning work on this reorganization project:

1. Read this entire document first
2. Check "Progress Tracking" section to see what's been completed
3. Check "Next Actions" section for current task
4. Update "Current Session" with date and task
5. After completing work, update Progress Tracking and Next Actions

### During Work

- Add completed evaluations to Progress Tracking immediately
- Note any discoveries in "Findings & Patterns" section
- Update Next Actions queue as priorities shift
- Document recommendations clearly for user implementation

### Context Transfer

If chat reaches token limit:
1. Update all tracking sections with current status
2. Export chat and save to temp/ folder
3. Start new chat with: "Continue reorganization work from _reorganization_plan.md"

---

## Evaluation Approach Change (2025-10-22)

**Original approach:** Evaluate all files, document all findings, then revise in batch
**Problem:** Would generate 35,000-50,000 words of documentation (unmanageable)

**New approach (effective immediately):**
- Evaluate file → if needs revision, create v[N+1] immediately
- Document only high-level summary in Progress Tracking table
- Keep "Recommendation" field brief (1-2 sentences)
- Detailed evaluation rationale stays in conversation, not plan document

---

## Evaluation Scope

### Complete File Inventory Required

**Evaluate ALL files in ALL locations:**

1. **Root-level files** (completed Phase 1)
   - All .md files in G:\Dropbox (Personal)\JD\101 GenAI\ntw2029 course design\

2. **Subfolder files** (Phase 4 - in progress)
   - ai transcript analysis/
   - grading papers/
   - post-class feedback processing/
   - qti quiz questions/
   - refine instructor feedback to students/
   - yi fan exchange/
   - 2420 p2 paper grading examples/
   - p1 - model essay and quality requirements/
   - p2 revision/
   - research reports/
   - temp/ (scan for files needing organization)

3. **Exclude from evaluation:**
   - old/ (archive - don't evaluate)
   - Zoom downloads - 2410/ (raw data - don't evaluate)
   - transcript_analysis/ (marked for archiving - don't evaluate)

---

## Reference Documents for Evaluation

### Root-Level Files to Check Against

**For Duplication Detection (check if subfolder duplicates these):**
- course-overview-context-v5.md (course design, teaching philosophy, institutional constraints)
- student-challenges-context-v2.md (student writing challenges)
- grading-process-context-v2.md (feedback methods, instructor psychology)
- project-website-context-v7.md (technical infrastructure)
- teaching-info-management-context-v3.md (information management, cognitive load)

**For Compliance Checking (check if subfolder files follow these):**
- assignment-template-v10.md (assignment structure)
- course-page-criteria-v6.md (webpage creation standards)
- nutshell-vs-anchor-links-v3.md (link formatting decisions)
- JF_Frome_writing_style-v5.md (writing style)

**External Guide:**
- G:\Dropbox (Personal)\JD\101 GenAI\user settings and AI guidance\ai-instruction-writing-guide-v[latest].md (instruction file structure)

**Website Files (for accuracy checking):**
- C:\Dev\repos\NTW2029\src\content\docs\course-ntw2029\course-info\*
- C:\Dev\repos\NTW2029\src\content\docs\course-ntw2029\assignments\*
- C:\Dev\repos\NTW2029\src\content\docs\course-ntw2029\schedule.md

### Cross-Reference Verification

**Check if subfolder files:**
- Properly reference relevant root-level files
- Have scope statements distinguishing from root-level files
- Don't contradict information in root-level files

**Summary:** Check every subfolder file against all 5 root-level context files (duplication), 4 standard files (compliance), and the external instruction guide (if it's an instruction file).

---

## Evaluation Process

### Required Steps for Each File

1. **Use filesystem:list_directory** to get file list in folder
2. **Use filesystem:read_text_file** to actually read each file being evaluated
3. **Use filesystem:read_text_file** to read relevant reference documents (don't assume content based on filenames)
4. **Compare** file content against reference documents
5. **If revision needed:** Assess data sufficiency before creating revision (see below)
6. **Document briefly** in Progress Tracking table

### Data Sufficiency Assessment (Required Before Revision)

**When revision is recommended, STOP and evaluate:**

Do I have sufficient data to make accurate, useful additions?

**For each planned addition, check:**

1. **Scope statements** - Do I know when/where this file should be used?
2. **Examples** - Do I have actual examples demonstrating the guidelines?
3. **Success criteria** - Do I have validation standards or can derive from existing content?
4. **Tool specifications** - Do I know required output format/method?
5. **Good/bad examples** - Do I have contrasting examples showing violations?

**Decision logic:**

```
IF missing critical data (scope, examples, output format):
    → ASK USER how to proceed
    → Document in tracking table: "Needs revision - awaiting user data"
    → Continue to next file
    
IF have sufficient data OR can derive from existing content:
    → Create v[N+1] immediately
    → Document in tracking table
```

**Examples of insufficient data:**
- Instruction file for "P2" but unclear if P2 means Paper 2, stage P2, or both
- Style guidelines with no example outputs showing compliance
- Process instructions with no output format specification
- Validation rules with no contrasting good/bad examples

**Examples of sufficient data:**
- File has clear examples but missing XML structure (can add structure)
- File has good process but missing success criteria (can derive from steps)
- File describes workflow but missing error handling (can add based on process)

### Brief Documentation Format

For each file evaluated, add one row to Progress Tracking table:

| File | Date | Action Taken | Brief Rationale |
|------|------|--------------|-----------------|
| filename.md | 2025-10-22 | Keep current | Technical reference, accurate |
| filename.md | 2025-10-22 | Revised to v3 | Added examples, fixed compliance issues |
| filename.md | 2025-10-22 | Needs revision - awaiting data | Missing scope clarification and example outputs |
| filename.md | 2025-10-22 | Recommend delete | Duplicates website content |

---

## Evaluation Criteria for ALL Files

**Check every file for:**

1. **Duplication**
   - Content duplicating root-level context files
   - Content duplicating other subfolder files
   - Content duplicating website files
   - Redundant information across multiple locations

2. **Compliance** (instruction files only)
   - Follows ai-instruction-writing-guide-v[latest].md criteria
   - Has appropriate structure for file type
   - Contains required elements (BLUF, control flow, success criteria, etc.)
   - Follows relevant standard files (assignment-template, course-page-criteria, etc.)

3. **Accuracy**
   - Outdated information (contradicts current website/practice)
   - Version drift (workflow files with conflicting versions)
   - Factual errors or stale references
   - Contradicts information in root-level context files

4. **Necessity**
   - Provides unique value not available elsewhere
   - Could be merged with related files
   - Still relevant to current workflows
   - Properly cross-references related files

5. **Organization**
   - File in appropriate subfolder
   - Clear purpose and scope statements
   - Proper cross-references to related files
   - Version numbering consistent

---

## Strategy Overview

### Phase 1: Root-Level Files ✅ COMPLETE

**Evaluated:** 7 files  
**Decisions:** 2 archive recommendations, 1 relocate recommendation, 4 keep with minor updates  
**Status:** Complete - see Progress Tracking

### Phase 2: User Implementation ✅ COMPLETE

**User manually implemented:**
- Moved conversation artifacts to old/
- Moved research methodology to research reports/
- Updated folder guide

### Phase 3: Folder Status Audit ✅ COMPLETE

**Evaluated:** 4 folders with "Unclear" status  
**Decisions:** Reclassified all folders (2 active, 1 reference, 1 archive)  
**Updated:** folder_guide-v2.md created  
**Status:** Complete - all folder statuses resolved

### Phase 4: Comprehensive File Evaluation (CURRENT)

**Goal:** Evaluate ALL files in ALL active subfolders for duplication, compliance, accuracy, necessity, and organization

**Approach:**
1. List all .md files in each subfolder
2. Read each file and relevant reference documents
3. Evaluate each file against all criteria
4. If revision needed: assess data sufficiency
5. If sufficient data: create v[N+1] immediately
6. If insufficient data: ask user how to proceed
7. Document briefly in Progress Tracking table
8. Continue to next file/folder

**Subfolders to evaluate:**
- [x] refine instructor feedback to students/ (2 files - COMPLETE)
- [x] qti quiz questions/ (4 files - COMPLETE)
- [x] grading papers/ (5 files - COMPLETE)
- [x] post-class feedback processing/ (1 file - COMPLETE)
- [ ] ai transcript analysis/ (many files - save for later)
- [ ] temp/ (scan only)
- [ ] Reference folders (light evaluation)
- [ ] yi fan exchange/ (duplication check only)

### Phase 5: Final Review (FUTURE)

**Goal:** Consolidate findings and create implementation plan

**Approach:**
1. Review all recommendations
2. Identify cross-cutting issues
3. Prioritize revisions by impact
4. Create summary report for user

---

## Current Session

**Date:** 2025-10-22  
**Task:** Phase 4 - subfolder file evaluations  
**Status:** Completed refine instructor feedback (2 files), qti (4 files), grading papers (5 files), post-class feedback (1 file)  
**Next:** Evaluate remaining smaller folders before ai transcript analysis/

---

## Progress Tracking

### Phase 1: Root-Level Files (COMPLETE)

| File | Date | Recommendation | Rationale | User Action |
|------|------|----------------|-----------|-------------|
| context for evaluating lecture notes.md | 2025-10-21 | Archive | Conversation artifact, not instruction file | User moved to old/ |
| context-transfer-course-page-simplification.md | 2025-10-21 | Archive | Duplicates course-page-criteria-v6.md and website content | User moved to old/ |
| course-overview-context-v5.md | 2025-10-21 | Keep | Unique meta-context about course design, teaching philosophy | Verify facts current |
| data-sources-decision-mapping-v1.md | 2025-10-21 | Relocate | Research methodology document, not operational instruction | User moved to research reports/ |
| grading-process-context-v2.md | 2025-10-21 | Keep | Unique internal context for AI workflow assistance | Consider streamlining Section 1 |
| project-website-context-v7.md | 2025-10-21 | Keep | Unique technical infrastructure documentation | Verify technical details current |
| student-challenges-context-v2.md | 2025-10-21 | Keep | Detailed challenge breakdown, well cross-referenced | None |
| teaching-info-management-context-v3.md | 2025-10-21 | Keep | Unique focus on information management challenges | Verify term 2510 info current |

### Phase 3: Folder Status Audit (COMPLETE)

| Folder | Old Status | New Status | Rationale | User Action |
|--------|------------|------------|-----------|-------------|
| transcript_analysis/ | Unclear | Archive | Superseded by ai transcript analysis/ | User should move to old/ |
| refine instructor feedback to students/ | Unclear | Active | Files created Sept 2025, active workflow | Updated in guide |
| research reports/ | Unclear | Reference | Research papers and analysis materials | Updated in guide |
| yi fan exchange/ | Unclear | Active | Current student case (Oct 2025) | Updated in guide |

### Phase 4: Subfolder File Evaluation (IN PROGRESS)

**Completed Folders:**

#### refine instructor feedback to students/ (2 files - COMPLETE)

| File | Date | Action Taken | Brief Rationale |
|------|------|--------------|-----------------|
| student-feedback-refinement-instructions-v1.md | 2025-10-22 | Revised to v2 | Added XML structure, examples, tool specs, success criteria, BLUF for compliance |
| transcription-patterns-tracker-v1.md | 2025-10-22 | Keep current | Living reference tracker, appropriately minimal, cross-referenced by instructions |

#### qti quiz questions/ (4 files - COMPLETE)

| File | Date | Action Taken | Brief Rationale |
|------|------|--------------|-----------------|
| qti-canvas-format-guide-v1.md | 2025-10-22 | Keep current | Technical format reference, well-structured, accurate for QTI 2.1 |
| qti-conversion-instructions-v2.md | 2025-10-22 | Revised to v3 | Added BLUF, process steps, examples, validation, tool specs, error handling for compliance |
| qti-conversion-guide-v2.md | 2025-10-22 | Keep current | Algorithm specification (pseudocode), referenced by v3 instructions, well-structured |
| qti-validation-v2.md | 2025-10-22 | Keep current | Algorithm specification (pseudocode), referenced by v3 instructions, comprehensive rules |

#### grading papers/ (5 files - COMPLETE)

| File | Date | Action Taken | Brief Rationale |
|------|------|--------------|-----------------|
| challenges in grading papers.md | 2025-10-22 | Recommend archive | 2-line note, conversation artifact |
| Claude-Efficient Grading Methods for Student Papers-v2.md | 2025-10-22 | Keep current | Reference doc with strategies, current for term 2510 |
| Claude-Efficient Grading Methods for Student Papers.md | 2025-10-22 | Recommend archive | Original conversation, superseded by v2 |
| Claude-Improving Specificity of Grading Feedback.md | 2025-10-22 | Reorganized to analysis-v1 | Created structured analysis from conversation transcript |
| custom Instructions for Generating paper 2 p2 Feedback in my voice.md | 2025-10-22 | Revised to v1 with data gap note | Added note listing missing data for full compliance revision |

#### post-class feedback processing/ (1 file - COMPLETE)

| File | Date | Action Taken | Brief Rationale |
|------|------|--------------|-----------------|
| feedback-summary-instructions.md | 2025-10-22 | Revised to v1 with data gap note | Missing scope, feedback source format, output format, success criteria |

**Pending Folders:**
- [ ] ai transcript analysis/ (many files)
- [ ] temp/ (scan only)
- [ ] Reference folders (light evaluation)
- [ ] yi fan exchange/ (duplication check only)

---

## Next Actions

### Immediate

1. Continue to smaller remaining folders before ai transcript analysis/
2. yi fan exchange/ (duplication check)
3. Reference folders (2420 p2 examples, p1 model essay, p2 revision, research reports) - light evaluation
4. temp/ (scan for files needing organization)
5. Save ai transcript analysis/ for last (largest folder)

### After Phase 4 Complete

1. Review all findings and recommendations
2. Identify patterns across all evaluations
3. Create prioritized implementation list
4. Generate summary report

### User Implementation Tasks

**Already completed:**
- Moved conversation artifacts to old/
- Moved data-sources-decision-mapping-v1.md to research reports/
- Updated folder guide
- Reviewed and confirmed v2 revision of student-feedback-refinement-instructions

**Pending (user decides when):**
- Move transcript_analysis/ to old/
- Delete obsolete v1/v2 files after confirming new versions work
- Update project instructions if qti-conversion-instructions path changes
- Update Project Knowledge when standard files are revised
- Archive grading papers conversation artifacts (challenges.md, original efficient methods)
- Optionally provide data for full revisions of files with data gap notes (custom Instructions, feedback-summary-instructions)

---

## Findings & Patterns

### What Worked Well (Phases 1, 3, & 4)

- Files with explicit "When to Use This Document" sections
- Clear cross-references to related documents
- Separation of concerns (technical, pedagogical, student challenges)
- Version history tracking in files
- Scope statements distinguishing file purposes
- Living tracker documents (transcription-patterns-tracker) that evolve with use
- Algorithm specifications as separate reference files (conversion-guide, validation)

### Issues Discovered

- Some conversation artifacts mixed with instruction files (Phase 1 - addressed)
- Research/planning documents at root level (Phase 1 - relocated)
- Minor overlaps between context files (handled via cross-references)
- Instruction files missing compliance elements: XML structure, examples, tool specs, success criteria (Phase 4 - being addressed)
- Orchestrator instruction files too brief for reliable execution (qti-conversion-instructions - revised to v3)
- **AI instruction files sometimes lack sufficient data for accurate revision** - solution: add data gap note to v1, defer full revision
- **Conversation transcripts benefit from reorganization** into structured analysis documents (grading feedback audio strategy)

### Patterns to Watch For (Remaining Phase 4)

- Workflow files with multiple versions - check for version drift
- Duplicate content across subfolders
- Instruction files not following ai-instruction-writing-guide criteria
- Files in temp/ needing permanent homes
- Outdated references to old workflows
- Brief orchestrator files needing expansion for reliability
- Instruction files needing user input before full revision possible

---

## Success Criteria

### Phase 1 Complete When: ✅
- [x] All root-level files evaluated
- [x] Recommendations documented
- [x] No pending classifications

### Phase 2 Complete When: ✅
- [x] User implemented Phase 1 recommendations

### Phase 3 Complete When: ✅
- [x] All folder statuses verified
- [x] folder_guide updated

### Phase 4 Complete When:
- [ ] All active subfolder files evaluated
- [ ] All evaluations documented in Progress Tracking table
- [ ] Revised versions created where sufficient data exists
- [ ] Data gap notes added where data insufficient
- [ ] Brief rationales documented

### Phase 5 Complete When:
- [ ] Final review conducted
- [ ] Summary report created
- [ ] Implementation priorities established

### Overall Project Complete When:
- [ ] All phases complete
- [ ] User implements final recommendations
- [ ] project-ntw2029-course-design-instructions updated
- [ ] This document archived with final status

---

## Notes

- **Version numbering:** When creating revised files, increment version (v10 → v11)
- **No file operations:** AI only creates new versions, user moves/deletes files
- **Comprehensive evaluation:** Must check ALL files in ALL subfolders
- **Brief documentation:** Keep Progress Tracking entries to 1-2 sentences
- **Read files:** Always use filesystem tools to actually read files, never assume content
- **Immediate revision:** Create v[N+1] files immediately when issues found AND sufficient data exists
- **Data sufficiency:** When data gaps exist, add note to v1 listing missing data rather than creating incomplete revision
- **Reference vs instruction files:** Algorithm/pseudocode specs are reference documents, don't require ai-instruction-writing-guide compliance

---

## Version History

- v7: Added data sufficiency assessment step to evaluation process; AI must verify sufficient data exists before creating revisions; if insufficient, add data gap note to v1; completed grading papers/ folder (5 files), completed post-class feedback processing/ (1 file)
- v6: Completed qti quiz questions folder (4 files), updated tracking table, added pattern about brief orchestrator files
- v5: Updated with Phase 4 progress (refine instructor feedback complete, qti partial), changed evaluation approach to immediate revision with brief documentation
- v4: Added reference documents list, structured output format (3-part assessment), explicit requirement to read files not assume content
- v3: Major revision - clarified AI only makes recommendations, never moves/deletes files; expanded scope to require evaluation of ALL files in ALL subfolders
- v2: Phase 1 complete - all 7 root-level files evaluated, decisions documented
- v1: Initial planning document
