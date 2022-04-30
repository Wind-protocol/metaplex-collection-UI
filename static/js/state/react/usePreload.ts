import { useEffect } from "react";
import { useStore } from "effector-react";
import type { IPreload } from "state/utils";

export function usePreload<TDone, TFail = Error>(
  { $node, effectFx }: IPreload<void, TDone, TFail>,
  deps?: unknown[]
): {
  data: TDone | null;
  fail: TFail | null;
  effectFx: () => Promise<TDone>;
} {
  const [data, fail, pending] = useStore($node);
  useEffect(() => {
    if (!data && !pending && !fail) {
      effectFx();
    }
  }, [data, pending, effectFx, ...(deps ?? [])]);
  return { data, fail, effectFx };
}
