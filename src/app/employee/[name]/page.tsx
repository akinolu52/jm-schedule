import React from 'react';
import { EMPLOYEES } from "@/lib/mock-data";
import { EmployeeViewClient } from "@/components/employee-view-client";

type Props = {
    params: Promise<{ name: string }>;
};

export async function generateStaticParams() {
    return EMPLOYEES.map((employee) => ({
        name: employee.name,
    }));
}

export default async function EmployeePage({ params }: Props) {
    const { name } = await params;
    return <EmployeeViewClient name={name} />;
}
