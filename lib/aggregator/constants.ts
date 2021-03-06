export const MAX_CONCURRENCY = Number.isNaN(Number(process.env.NEXT_AGGREGATOR_MAX_CONCURRENCY))
  ? 50
  : Number(process.env.NEXT_AGGREGATOR_MAX_CONCURRENCY);
export const SLICE_AMOUNT = Number.isNaN(Number(process.env.NEXT_AGGREGATOR_SLICE_AMOUNT))
  ? undefined
  : Number(process.env.NEXT_AGGREGATOR_SLICE_AMOUNT);
export const P_MAP_OPTIONS = {
  concurrency: MAX_CONCURRENCY,
};
