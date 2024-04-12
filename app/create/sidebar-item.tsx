
type Props = {
    title: string;
}

export const SidebarItem = ({title}:Props) => {
    return (
        <div className="flex justify-center h-30 mb-4 rounded-lg shadow-sm shadow-slate">
                {title}
        </div>
    );
};

