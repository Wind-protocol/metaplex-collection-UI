import { combine } from "effector";
import { createEntry } from "state/utils";

export function createProgressTools<T, TContent>(
  getContent: (state: T) => TContent,
  defaultState: T
) {
  const $collection = createEntry<string>("defaultState");
  const $progress = createEntry<T>(defaultState);
  const $progressContent = $progress.$node.map(getContent);

  const $progressIsOpen = $progress.$node.map((progressState) =>
    progressState === defaultState ? false : true
  );

  const $progressCollectionId = $collection.$node.map(
    (collectionId) => collectionId
  );

  return {
    $progress,
    $collection,
    $progressIsOpen,
    $progressContent,
    $progressCollectionId,
    $progressMeta: combine(
      $progressContent,
      $progressIsOpen,
      $progressCollectionId,
      (content, isOpen, collectionId) => ({ ...content, isOpen, collectionId })
    ),
  };
}
