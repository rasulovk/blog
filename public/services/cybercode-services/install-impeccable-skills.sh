#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./install-impeccable-skills.sh /path/to/download.zip [plain|prefixed|all] [target_dir]
#   ./install-impeccable-skills.sh ~/Downloads/your-impeccable.zip plain
#
# Examples:
#   ./install-impeccable-skills.sh ~/Downloads/impeccable-style-universal.zip
#   ./install-impeccable-skills.sh ~/Downloads/impeccable-style-universal-prefixed.zip prefixed
#   ./install-impeccable-skills.sh ~/Downloads/impeccable.zip all

ZIP_PATH="${1:-}"
MODE="${2:-plain}"                         # plain | prefixed | all
TARGET_DIR="${3:-$HOME/.copilot/skills}"  # Copilot user skills folder

if [[ -z "$ZIP_PATH" ]]; then
  echo "Error: missing zip path"
  echo "Usage: $0 /path/to/file.zip [plain|prefixed|all] [target_dir]"
  exit 1
fi

if [[ ! -f "$ZIP_PATH" ]]; then
  echo "Error: zip file not found: $ZIP_PATH"
  exit 1
fi

if ! command -v unzip >/dev/null 2>&1; then
  echo "Error: unzip is not installed"
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "Error: rsync is not installed"
  exit 1
fi

case "$MODE" in
  plain|prefixed|all) ;;
  *)
    echo "Error: mode must be one of: plain, prefixed, all"
    exit 1
    ;;
esac

WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

mkdir -p "$TARGET_DIR"

echo "Extracting zip..."
unzip -q "$ZIP_PATH" -d "$WORK_DIR"

# Find provider skill roots inside archive
mapfile -t SKILL_ROOTS < <(
  find "$WORK_DIR" -type d \
    \( -path "*/.agents/skills" -o -path "*/.github/skills" -o -path "*/.claude/skills" \) \
    | sort -u
)

if [[ "${#SKILL_ROOTS[@]}" -eq 0 ]]; then
  echo "Error: no skills roots found in zip (.agents/skills, .github/skills, .claude/skills)"
  exit 1
fi

installed=0

for root in "${SKILL_ROOTS[@]}"; do
  while IFS= read -r -d '' skill_dir; do
    skill_name="$(basename "$skill_dir")"

    case "$MODE" in
      plain)
        [[ "$skill_name" == i-* ]] && continue
        ;;
      prefixed)
        [[ "$skill_name" != i-* ]] && continue
        ;;
      all)
        ;;
    esac

    # Must contain SKILL.md to be a valid skill
    [[ -f "$skill_dir/SKILL.md" ]] || continue

    mkdir -p "$TARGET_DIR/$skill_name"
    rsync -a --delete "$skill_dir/" "$TARGET_DIR/$skill_name/"
    installed=$((installed + 1))
  done < <(find "$root" -mindepth 1 -maxdepth 1 -type d -print0)
done

if [[ "$installed" -eq 0 ]]; then
  echo "No skills installed (mode=$MODE). Try mode=all."
  exit 1
fi

echo "Installed $installed skills into: $TARGET_DIR"
echo "Next: reload VS Code window, then type / in chat (for plain mode you should see /audit)."