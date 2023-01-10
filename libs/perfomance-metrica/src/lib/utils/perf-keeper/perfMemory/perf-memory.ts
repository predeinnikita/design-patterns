import { PerfKeeper } from "../perfMetrica/perf.types";
import { measureMemory } from "./perf-measure-memory";
import { memoryStats } from "./perf-memory-stats";


export function memory(keeper: PerfKeeper) {
	memoryStats(keeper, {
		groupName: 'pk-memory-stats',
	});
	measureMemory(keeper, {
		groupName: 'pk-memory-measure',
	});
}