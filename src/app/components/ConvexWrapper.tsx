"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export const ConvexWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ConvexProvider client={client}>{children}</ConvexProvider>;
};
