import { DefaultLayout } from "@/src/app/shared/defaultLayout/defaultLayout";
import { AdminLayout } from "@/src/app/shared/adminLayout/adminLayout";

const layouts = {
    default: DefaultLayout,
    admin: AdminLayout,
};

interface Props {
    children: React.ReactNode;
}

export const LayoutWrapper: React.FC<Props> = (props: Props) => {
    // const Layout = layouts[ ToDo: GetLayout -> maybe through rtk ];
    const Layout = null;

    if (Layout != null) {
        return <Layout {...props}>{props.children}</Layout>;
    }
    return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};
