/**
 * Project IDs follow the same rules as Firebase / Google Cloud:
 * 6-30 characters, lowercase letters, digits and hyphens,
 * must start with a letter and must not end with a hyphen.
 */
export const PROJECT_ID_PATTERN = /^[a-z][a-z0-9-]{4,28}[a-z0-9]$/;

export function isValidProjectId(id: string): boolean {
  return PROJECT_ID_PATTERN.test(id);
}
