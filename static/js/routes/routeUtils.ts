import type { useParams } from "react-router-dom";

type Params = ReturnType<typeof useParams>;

type Variables = "collectionId";

export function extractRouteVariable(
  name: Variables,
  params: Params
): string | undefined;
export function extractRouteVariable(
  name: Variables,
  params: Params,
  required: true
): string;
export function extractRouteVariable(
  name: Variables,
  params: Params,
  required: boolean
): string | undefined;
export function extractRouteVariable(
  name: Variables,
  params: Params,
  required?: boolean
): string | undefined {
  if (required && !(name in params)) {
    throw new Error(`Must use :${name} in route`);
  }
  return params[name];
}
