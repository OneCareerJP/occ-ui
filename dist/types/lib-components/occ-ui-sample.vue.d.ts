interface SampleData {
    counter: number;
    initCounter: number;
    message: {
        action: string | null;
        amount: number | null;
    };
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<unknown> & SampleData, {
    increment(arg: Event | number): void;
    decrement(arg: Event | number): void;
    reset(): void;
}, {
    changedBy(): string;
}, {}, {} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {}, import("@vue/composition-api").ShallowUnwrapRef<unknown>, SampleData, {
    changedBy(): string;
}, {
    increment(arg: Event | number): void;
    decrement(arg: Event | number): void;
    reset(): void;
}, {}, {}, {}, {} & {}, {}, true>);
export default _default;
