# .claude Directory

This directory contains configuration and context files for Claude Code.

## Structure

- **CLAUDE.md** - Main project guide with tech stack, patterns, and conventions
- **memory/** - Persistent memory files (user preferences, project context, feedback)
- **workflows/** - Custom workflow scripts for multi-agent orchestration
- **skills/** - Installed Claude Code skills

## Files

### CLAUDE.md
The primary reference document for this project. Contains:
- Project overview and tech stack
- Design system (colors, typography, patterns)
- Component architecture
- Development guidelines
- Common tasks and deployment checklist

This file is automatically loaded into Claude's context at the start of each session.

### memory/MEMORY.md
Index of memory files. Each memory captures:
- User preferences and working style
- Project-specific decisions and context
- Feedback on how to work better
- References to external resources

Memories persist across sessions and help Claude provide more personalized assistance.

### workflows/
Custom workflow scripts for complex, multi-step tasks that benefit from parallel agent orchestration.

### skills/
Installed Claude Code skills that extend functionality. Currently installed:
- ui-ux-pro-max (UI/UX design assistance)

## Usage

Claude Code automatically reads `CLAUDE.md` and `memory/MEMORY.md` at the start of each session. You don't need to do anything special - just work on your project and Claude will have the context it needs.

To update project guidelines, edit `CLAUDE.md` directly.
