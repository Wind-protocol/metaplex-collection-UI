import { createEffect } from "effector";
import { useEvent, useStore } from "effector-react";
import { useMemo } from "react";
import { createProgressTools } from "utils/createProgressTools";
import { CollectionFormProps } from "components/forms/MigrateToCollectionForm";
import { submitCreateCollectionFx } from "state/collection";

export enum ProgressStatus {
  Default,
  Migrating,
  Success,
  Error,
  ErrorRetry,
}

export enum ECollectionProgress {
  minting,
  preparing_assets,
  uploading_assets,
  preparing_token_transactions,
  signing_metadata_transaction,
  sending_transaction_to_solana,
  waiting_for_initial_confirmation,
  waiting_for_final_confirmation,
  updating_metadata,
  signing_token_transaction,
  checking_for_existing_collection_authority,
  approving_collection_authority,
  revoking_collection_authority,
  migrating_collection,
  migrating_success,
  migrating_error_retry,
  migrating_error,
}

export function getContent(state: ECollectionProgress | null) {
  switch (state) {
    case ECollectionProgress.minting:
      return {
        title: "Minting",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.preparing_assets:
      return {
        title: "Preparing Assets",
        subtitle: "Approve the transaction from your wallet",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.uploading_assets:
      return {
        title: "Uploading Assets",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.preparing_token_transactions:
      return {
        title: "Preparing Transactions",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.signing_metadata_transaction:
      return {
        title: "Signing Metadata Transaction",
        subtitle: "Approve the transaction from your wallet",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.sending_transaction_to_solana:
      return {
        title: "Sending Transactions to Solana",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.waiting_for_initial_confirmation:
      return {
        title: "Waiting for Initial Confirmation",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.waiting_for_final_confirmation:
      return {
        title: "Waiting for Final Confirmation",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.signing_token_transaction:
      return {
        title: "Signing Token Transaction",
        subtitle: "Approve the transaction from your wallet",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.checking_for_existing_collection_authority:
      return {
        title: "Searching for Collection Authority",
        subtitle:
          "This process could take a while, do not close or refresh this page.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.approving_collection_authority:
      return {
        title: "Adding an Approved Collection Authority",
        subtitle: "Approve the transaction from your wallet.",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.revoking_collection_authority:
      return {
        title: "Revoking Approved Collection Authority",
        subtitle: "Approve the transaction from your wallet",
        status: ProgressStatus.Default,
      };
    case ECollectionProgress.migrating_collection:
      return {
        title: "Migrating Collection",
        subtitle: "This process could take a while, please wait.",
        status: ProgressStatus.Migrating,
      };
    case ECollectionProgress.migrating_success:
      return {
        title: "Congrats! Your collection has been successfully migrated!",
        subtitle: "",
        status: ProgressStatus.Success,
      };
    case ECollectionProgress.migrating_error_retry:
      return {
        title: "An error occurred while migrating your Collection",
        subtitle: "`Would you like to retry migrating your Collection?",
        status: ProgressStatus.ErrorRetry,
      };
    case ECollectionProgress.migrating_error:
      return {
        title: "An error occurred while migrating your Collection",
        subtitle: "We cannot migration this collection.",
        status: ProgressStatus.Error,
      };
    default:
      return {
        title: "",
        subtitle: "",
        status: ProgressStatus.Default,
      };
  }
}

function createLocalState() {
  const { $progressMeta, $progress, $collection } = createProgressTools(
    getContent,
    null as ECollectionProgress | null
  );

  const updateProgressFx = createEffect(
    (sstate: ECollectionProgress | null) => {
      $progress.set(sstate);
    }
  );

  const setCollectionIdFx = createEffect((collectionId: string) => {
    $collection.set(collectionId);
  });

  const submitFx = createEffect(async (data: CollectionFormProps) => {
    await submitCreateCollectionFx({
      data,
      updateProgress: updateProgressFx,
      setCollectionId: setCollectionIdFx,
    });
  });

  const closeModalFx = createEffect(() => {
    $progress.set(null);
  });

  return {
    submitFx,
    closeModalFx,
    updateProgressFx,
    setCollectionIdFx,
    $progressMeta,
    $progress,
  };
}

export const useLocalState = () => {
  const state = useMemo(() => createLocalState(), []);
  const progressMeta = useStore(state.$progressMeta);
  const onSubmit = useEvent(state.submitFx);
  const updateProgress = useEvent(state.updateProgressFx);
  const setCollectionId = useEvent(state.setCollectionIdFx);
  const closeModal = useEvent(state.closeModalFx);
  return {
    onSubmit,
    updateProgress,
    setCollectionId,
    closeModal,
    progressMeta,
  };
};
