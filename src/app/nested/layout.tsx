import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const dynamic = 'force-dynamic';

export default function layout({ children }: Props) {
    return <div>{children}</div>;
}
