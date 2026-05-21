import { Text } from "@earendil-works/pi-tui";
import { theme } from "../theme/theme.ts";

export function formatMessageTimestamp(timestamp: number | string | undefined): string | undefined {
	if (timestamp === undefined) {
		return undefined;
	}
	const date = new Date(timestamp);
	if (Number.isNaN(date.getTime())) {
		return undefined;
	}
	const pad = (value: number) => String(value).padStart(2, "0");
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function createMessageTimestamp(timestamp: number | string | undefined, paddingX: number): Text | undefined {
	const formattedTimestamp = formatMessageTimestamp(timestamp);
	if (!formattedTimestamp) {
		return undefined;
	}
	return new Text(theme.fg("dim", formattedTimestamp), paddingX, 0);
}
