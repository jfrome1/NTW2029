# Course Design Folder Reorganization Plan v8

**Purpose:** Systematic evaluation of all instruction/context files to identify duplication, conflicts, compliance issues, and improvement opportunities. AI makes recommendations only - user implements changes.

**Created:** 2025-10-21  
**Last Updated:** 2025-10-22  
**Status:** Phase 4 Near Complete - only ai transcript analysis/ remaining

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

## Current Session

**Date:** 2025-10-22  
**Task:** Phase 4 - subfolder file evaluations  
**Status:** Completed all folders except ai transcript analysis/ (largest folder, saved for last)  
**Next:** ai transcript analysis/ - many files

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

### Phase 4: Subfolder File Evaluation (NEAR COMPLETE)

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

#### yi fan exchange/ (27 files - COMPLETE - duplication check only)

| Status | Date | Recommendation | Brief Rationale |
|--------|------|----------------|-----------------|
| All files | 2025-10-22 | Keep as active reference | Case-specific materials for active student situation (Oct 2025), no duplication with root-level contexts |

#### Reference Folders (COMPLETE - light evaluation)

| Folder | Files | Date | Recommendation | Brief Rationale |
|--------|-------|------|----------------|-----------------|
| p1 - model essay and quality requirements | ~30 files | 2025-10-22 | Keep as reference | Well-organized P1 grading materials, rubrics, model essays, no duplication |
| p2 revision | ~12 files | 2025-10-22 | Keep as reference | Active P2 revision project materials, well-organized subdirectories |
| 2420 p2 paper grading examples | 13 files | 2025-10-22 | Keep as reference | Historical examples from previous term (2024/2025 S2) |
| research reports | ~18 files | 2025-10-22 | Keep as reference | Already evaluated in Phase 3, contains research reports and analysis |

#### temp/ (10 files - COMPLETE - scan only)

| Status | Date | Recommendation | Brief Rationale |
|--------|------|----------------|-----------------|
| Various working files | 2025-10-22 | User review needed | Contains superseded versions (p1-analysis v4-v7), transcript-cleaning-instructions may need permanent home |

**Remaining Folder:**
- [ ] ai transcript analysis/ (many files - largest folder)

---

## Next Actions

### Immediate

1. Evaluate ai transcript analysis/ folder (many files)
2. Move to Phase 5 after completion

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
- Review temp/ folder for superseded versions and files needing permanent homes
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
- Well-organized reference folders with subdirectories (p1, p2, old/ for archiving)

### Issues Discovered

- Some conversation artifacts mixed with instruction files (Phase 1 - addressed)
- Research/planning documents at root level (Phase 1 - relocated)
- Minor overlaps between context files (handled via cross-references)
- Instruction files missing compliance elements: XML structure, examples, tool specs, success criteria (Phase 4 - being addressed)
- Orchestrator instruction files too brief for reliable execution (qti-conversion-instructions - revised to v3)
- **AI instruction files sometimes lack sufficient data for accurate revision** - solution: add data gap note to v1, defer full revision
- **Conversation transcripts benefit from reorganization** into structured analysis documents (grading feedback audio strategy)
- **temp/ folder accumulates superseded versions** - needs periodic review

### Patterns to Watch For (ai transcript analysis/)

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
- [ ] All active subfolder files evaluated (only ai transcript analysis/ remaining)
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
- **Light evaluation for reference folders:** Check for obvious issues, no detailed analysis needed

---

## Version History

- v8: Completed all folders except ai transcript analysis/; evaluated yi fan exchange (27 files), reference folders (p1, p2, 2420 examples, research reports), and temp/ (10 files)
- v7: Added data sufficiency assessment step to evaluation process; AI must verify sufficient data exists before creating revisions; if insufficient, add data gap note to v1; completed grading papers/ folder (5 files), completed post-class feedback processing/ (1 file)
- v6: Completed qti quiz questions folder (4 files), updated tracking table, added pattern about brief orchestrator files
- v5: Updated with Phase 4 progress (refine instructor feedback complete, qti partial), changed evaluation approach to immediate revision with brief documentation
- v4: Added reference documents list, structured output format (3-part assessment), explicit requirement to read files not assume content
- v3: Major revision - clarified AI only makes recommendations, never moves/deletes files; expanded scope to require evaluation of ALL files in ALL subfolders
- v2: Phase 1 complete - all 7 root-level files evaluated, decisions documented
- v1: Initial planning document
