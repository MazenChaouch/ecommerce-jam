"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
export const BreadcrumbComp = () => {
  const pathname = usePathname();
  const path = pathname.split("/");

  return (
    <div className="container block py-4">
      <Breadcrumb>
        <BreadcrumbList className="sm:text-base">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="[&>svg]:size-3 sm:[&>svg]:size-5" />
          {path.map((item, index) => {
            if (path.length - 1 === index) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            } else if (item !== "") {
              return (
                <>
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3 sm:[&>svg]:size-5" />
                </>
              );
            }
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
