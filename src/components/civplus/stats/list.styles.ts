import { css } from "@emotion/react";

export const listStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    overflowX: "hidden"
});

export const listEntryStyles = css({
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    gap: "10px",
    whiteSpace: "nowrap",
    width: 300,
    cursor: "pointer",
    transition: "background-color .3s",
    ":hover": {
        backgroundColor: "var(--color-primary-2)"
    }
});