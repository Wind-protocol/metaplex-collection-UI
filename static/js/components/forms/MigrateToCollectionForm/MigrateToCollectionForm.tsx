/* eslint-disable @typescript-eslint/no-misused-promises */

import { Button, Divider, Stack, Textarea } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "components/smart/Wallet";
import { $user } from "state/wallet";
import { FileUpload } from "components/FileUpload";
import { FormField } from "components/FormField";
import { PageHead } from "components/PageHead";
import { CollectionFormProps } from "./types";
import { WalletTransaction } from "components/WalletTransaction";
import { useEffect, useState } from "react";
import { useSolToUsd } from "state/react/useCurrency";
import { useStore } from "effector-react";
import { AddCollectionItems } from "components/CollectionItems";

interface Props {
  onSubmit: SubmitHandler<CollectionFormProps>;
  defaultValues?: CollectionFormProps;
  title: string;
  buttonText: string;
  disabled?: boolean;
  collectionId?: string;
}

export const MigrateToCollectionForm: React.FC<Props> = ({
  onSubmit,
  collectionId,
  title,
  buttonText,
  defaultValues,
  children,
  disabled,
}) => {
  const user = useStore($user);
  const { convert } = useSolToUsd();
  const methods = useForm<CollectionFormProps>({
    mode: "onChange",
    defaultValues,
  });

  const [mintListSize, setMintListSize] = useState(0);

  useEffect(() => {
    if (defaultValues) {
      for (const [key, value] of Object.entries(defaultValues)) {
        methods.setValue(key as keyof typeof defaultValues, value as string);
      }
    }
  }, [defaultValues]);

  const solPrice = !collectionId ? 0.01 : 0.0001;
  const usdPrice = convert(solPrice);

  const setMintList = (newMintList: string[]) => {
    methods.setValue("mintList", newMintList);
    setMintListSize(newMintList.length);
  };

  const isCreateCollectionButtonDisabled = () => {
    return disabled || !methods.formState.isValid || mintListSize === 0;
  };

  return (
    <>
      <PageHead title={title} subtitle={children} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={8}>
            {collectionId && (
              <FormField
                id="collectionId"
                title="Collection NFT Address"
                options={{
                  required: collectionId != undefined,
                  value: collectionId,
                }}
              />
            )}
            {!collectionId && (
              <>
                <FormField
                  id="name"
                  title="Name"
                  placeholder="Enter a collection name"
                  options={{ required: !collectionId, disabled }}
                />
                <FormField
                  id="symbol"
                  title="Symbol"
                  placeholder="Enter a collection symbol"
                />
                <FormField
                  id="logoImg"
                  title="Logo"
                  description="We recommend choosing a PNG, JPG, SVG or a GIF that is at least 600x600 (1:1) pixels and under 100kb in file size."
                  options={{ disabled }}
                  controlledInputFactory={({ field, fieldState }) => (
                    <FileUpload
                      value={field.value ? (field.value as string) : undefined}
                      isInvalid={fieldState.invalid}
                      onFileChange={field.onChange}
                      disabled={disabled}
                      variant="logo-preview"
                    />
                  )}
                />
                <FormField
                  id="description"
                  title="Description"
                  placeholder="Share a little bit about your collection."
                  options={{ disabled }}
                  customInputFactory={(register) => <Textarea {...register} />}
                />
              </>
            )}
            <FormField
              id="mintList"
              title="Add Collection Items (Required)"
              description="To migrate to your new Collection, add individual NFTs, or use the Verified Creator ID and/or CSV file to import them automatically. You can ONLY import NFTs you have Update Authority on."
              controlledInputFactory={() => (
                <AddCollectionItems setMintList={setMintList} />
              )}
            />
            <Divider />
            <WalletTransaction sol={solPrice} usd={usdPrice ?? 0}>
              {user != null ? (
                <Button
                  isDisabled={isCreateCollectionButtonDisabled()}
                  type="submit"
                  size="lg"
                  variant="primary"
                >
                  {buttonText}
                </Button>
              ) : (
                <WalletModalProvider>
                  <WalletMultiButton
                    style={{ minHeight: 48, height: "100%" }}
                  />
                </WalletModalProvider>
              )}
            </WalletTransaction>
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};
