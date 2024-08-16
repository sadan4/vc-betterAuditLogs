/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

import { LogEntry } from "./types";

function isNotOnboardingEntry(e: LogEntry){
    const x = e.target?.id === e.user?.id
        && e.changes[0].key === "$add"
        && e.actionType === "UPDATE"
        && e.action === 25

    return typeof x === "boolean" ? !x : true;
}
export default definePlugin({
    name: "BetterAuditLogs",
    description: "",
    authors: [
        {
            name: "sadan",
            id: 521819891141967883n
        }
    ],
    patches: [
        {
            find: "renderActionQuickSelectItem",
            replacement: {
                match: /let{logs/,
                replace: "$self.patchLogs(arguments[0]);$&"
            }
        }
    ],

    patchLogs(props: {
        logs: LogEntry[]
    }) {
        props.logs = props.logs.filter(isNotOnboardingEntry);
    }
});
