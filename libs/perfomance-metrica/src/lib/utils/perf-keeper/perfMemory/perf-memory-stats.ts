import { createTimingsGroup, domReady } from "../perfKeeperNavigation/perf-navigation-utils";
import { PerfKeeper } from "../perfMetrica/perf.types";
import { BaseMemoryOptions, createInterval } from "./perf-memory-util";


export type MemoryStatsOptions = BaseMemoryOptions;

export function memoryStats(keeper: PerfKeeper, options: MemoryStatsOptions = {}) {
	const [setStats, sendStats] = createTimingsGroup(options.groupName || 'pk-memory', keeper, 'KiB');

	domReady(() => {
		createInterval('ready', options.intervals, (group) => {
			const memory = (performance as any).memory;

			if (memory) {
				const total = memory.totalJSHeapSize;

				setStats('total', 0, total);
				setStats('used', 0, memory.usedJSHeapSize);
				setStats('js', 0, memory.jsHeapSizeLimit);
				sendStats(group, 0, total, true);
			}
		});
	});
}