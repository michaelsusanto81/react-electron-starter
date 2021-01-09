import { Sample, SampleTwo } from "../../components/Sample";

export const routes = [
    {
        key: 1,
        component: Sample,
        exact: true,
        path: "/",
    },
    {
        key: 2,
        component: SampleTwo,
        exact: false,
        path: "/sampleTwo",
    },
];