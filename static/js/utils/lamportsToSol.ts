import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function lamportsToSol(lamports: number) {
  return lamports / LAMPORTS_PER_SOL;
}
