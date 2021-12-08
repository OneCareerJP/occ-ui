interface SampleData {
    counter: number;
    initCounter: number;
    message: {
        action: string | null;
        amount: number | null;
    };
}
declare const _default: import("vue-demi").DefineComponent<{}, {}, SampleData, {
    changedBy(): string;
}, {
    increment(arg: Event | number): void;
    decrement(arg: Event | number): void;
    reset(): void;
}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, import("vue-demi").EmitsOptions, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
