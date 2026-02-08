import { Loops } from "@devwithbobby/loops";
import { components } from "./_generated/api.js";
import {internalAction, mutation} from "./_generated/server";
import { v } from "convex/values";
import {internal} from "./_generated/api";

const loops = new Loops(components.loops);

export const addContact = internalAction({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        return await loops.addContact(ctx, { email: args.email });
        },
});

export const createUser = mutation({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        const tokenIdentifier = crypto.randomUUID();
        await ctx.db.insert("users", {email: args.email, tokenIdentifier: tokenIdentifier});

        await ctx.scheduler.runAfter(
            0,
            internal.addUser.addContact,
            { email: args.email},
        );

        },
});