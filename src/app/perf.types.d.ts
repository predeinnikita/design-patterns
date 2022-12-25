export type PerfEntry = {
	id: string;
	name: string;
	parent: PerfGroupEntry | null;
	entries: PerfEntry[] | null;
	active: number;
	start: number | null;
	end: number | null;
	unit: 'ms' | 'KiB' | 'fps' | 'raw' | 'none';
	stop: (end?: number) => void;
}

export type PerfGroupEntry = PerfEntry & {
	_?: boolean; // collapsed
	add: PerfKeeper['add'];
	time: PerfKeeper['time'];
	timeEnd: PerfKeeper['timeEnd'];
	group: (name: string, start?: number) => PerfGroupEntry;
	mark: (name: string) => void;
}

export type KeeperOptions = {
	disabled: boolean;
	print: boolean;
	prefix: string;
	perf: Partial<Performance>;
	console: Partial<Console>;
	timeline: boolean;
	analytics: Array<(entry: PerfEntry) => void>;
	warn: (msg: string) => void;
}

export type PerfKeeper = {
	readonly entries: PerfEntry[];
	readonly perf: Pick<Performance, 'now'>;

	print(): void;
	disable(state: boolean): void;
	setAnalytics(list: KeeperOptions['analytics']): void;

	add(name: string, start: number, end: number): void;
	time(name: string): PerfEntry;
	time(name: string, executer: () => void): void;
	timeEnd(name: string): void;

	group(name: string, isolate: boolean): PerfGroupEntry;
	group(name: string, start?: number): PerfGroupEntry;
	group(name: string, start: number, isolate: boolean): PerfGroupEntry;
	groupEnd(name?: string, end?: number): void;
}