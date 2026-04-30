const CASE_PROGRESS_STORAGE_KEY = "clinical-bioinformatics-completed-cases";

export function getCompletedCaseSlugs(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(CASE_PROGRESS_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter((item) => typeof item === "string");
  } catch {
    return [];
  }
}

export function saveCompletedCaseSlugs(caseSlugs: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  const uniqueCaseSlugs = Array.from(new Set(caseSlugs));

  window.localStorage.setItem(
    CASE_PROGRESS_STORAGE_KEY,
    JSON.stringify(uniqueCaseSlugs)
  );
}

export function isCaseCompleted(caseSlug: string): boolean {
  const completedCaseSlugs = getCompletedCaseSlugs();

  return completedCaseSlugs.includes(caseSlug);
}

export function markCaseAsCompleted(caseSlug: string) {
  const completedCaseSlugs = getCompletedCaseSlugs();

  if (completedCaseSlugs.includes(caseSlug)) {
    return;
  }

  saveCompletedCaseSlugs([...completedCaseSlugs, caseSlug]);
}

export function getCaseProgress(totalCases: number) {
  const completedCaseSlugs = getCompletedCaseSlugs();
  const completedCases = completedCaseSlugs.length;

  const percentage =
    totalCases === 0 ? 0 : Math.round((completedCases / totalCases) * 100);

  return {
    completedCases,
    totalCases,
    percentage,
  };
}