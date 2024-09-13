import { z } from 'zod';
import { instance } from '@shared/trpc-instance';

export const farewellRouter = instance.router({
  farewell: instance.procedure
    // This is the input schema of your procedure
    // 💡 Tip: Try changing this and see type errors on the client straight away
    .input(
      z
        .object({
          name: z.string(),
        })
        .nullish(),
    )
    .output(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        text: `goodbye ${input?.name ?? 'world'}`,
        // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
      };
    }),
});
