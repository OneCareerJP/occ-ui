export interface Props {
    title: boolean;
    lineClamp: number;
    level: number;
    visual: string;
    color: string;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    tagLevel: import("@vue/composition-api").ComputedRef<string>;
}> & import("@vue/composition-api").Data, {}, {}, {}, {} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    tagLevel: import("@vue/composition-api").ComputedRef<string>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {}, {}, true>);
export default _default;
